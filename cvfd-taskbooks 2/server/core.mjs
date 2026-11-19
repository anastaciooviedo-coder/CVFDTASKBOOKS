// Core logic for the CVFD Phase Book API.
// The store is injected so the same code runs on Netlify Blobs and in local tests.
//
// Keys:
//   members/<CODE>  -> member record (name, phases status, progress summary)
//   books/<CODE>    -> { rev, state, updatedAt }

import LIBRARY from './books/library.mjs';

const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const MAX_BODY = 5_500_000; // stay under the 6 MB function payload limit

export function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}

function findBook(id) {
  return LIBRARY.find((b) => b && b.id === id) || null;
}

function bookSummary(b) {
  return {
    id: b.id,
    title: b.title,
    description: b.description || '',
    sections: b.sections.filter((s) => s.submit).map((s) => ({ id: s.id, label: s.label })),
  };
}

// ---- lockout after repeated wrong PINs / access codes (per network address) ----
const MAX_FAILS = 6;
const WINDOW_MS = 15 * 60 * 1000;
function clientKey(req, kind) {
  const ip = req.headers.get('x-nf-client-connection-ip') || req.headers.get('x-forwarded-for') || 'unknown';
  return `security/${kind}-${String(ip).split(',')[0].trim().replace(/[^0-9a-fA-F:.]/g, '').slice(0, 64) || 'unknown'}`;
}
async function lockedOut(store, req, kind) {
  const rec = await store.get(clientKey(req, kind), { type: 'json' });
  if (!rec) return false;
  const recent = (rec.fails || []).filter((t) => Date.now() - t < WINDOW_MS);
  return recent.length >= MAX_FAILS;
}
async function recordFail(store, req, kind) {
  const key = clientKey(req, kind);
  const rec = (await store.get(key, { type: 'json' })) || { fails: [] };
  rec.fails = [...rec.fails.filter((t) => Date.now() - t < WINDOW_MS), Date.now()].slice(-20);
  await store.setJSON(key, rec);
}
async function clearFails(store, req, kind) {
  await store.delete(clientKey(req, kind));
}
const TOO_MANY = 'Too many wrong attempts from this connection. Wait 15 minutes and try again.';

function err(status, message) {
  return json({ error: message }, status);
}

function newCode() {
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  return Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join('');
}

function cleanCode(c) {
  return String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12);
}

function cleanText(s, max = 200) {
  return String(s ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max);
}

function now() {
  return new Date().toISOString();
}

async function readJSON(req) {
  const text = await req.text();
  if (text.length > MAX_BODY) throw Object.assign(new Error('too_large'), { status: 413 });
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    throw Object.assign(new Error('bad_json'), { status: 400 });
  }
}

function publicMember(m) {
  return {
    code: m.code,
    name: m.name,
    book: m.book,
    email: m.email || '',
    notes: m.notes || '',
    assignedAt: m.assignedAt,
    archived: !!m.archived,
    phases: m.phases,
    summary: m.summary || null,
    lastActivity: m.lastActivity || null,
  };
}

function freshPhases(sections) {
  const p = {};
  for (const sec of sections) p[sec.id] = { status: 'open', label: sec.label };
  return p;
}


function locked(member, phase) {
  const st = member.phases?.[phase]?.status;
  return st === 'submitted' || st === 'approved';
}

// ---------------- member book ----------------
export async function getBook(store, req, code) {
  code = cleanCode(code);
  if (!code) return err(400, 'Missing access code');
  if (await lockedOut(store, req, 'code')) return err(429, TOO_MANY);
  const member = await store.get(`members/${code}`, { type: 'json' });
  if (!member || member.deleted) {
    await recordFail(store, req, 'code');
    return err(404, 'That access code was not found. Check it with the Training Division.');
  }
  const def = findBook(member.book && member.book.id);
  if (!def) return err(500, 'This task book is no longer in the library. Contact the Training Division.');
  const book = (await store.get(`books/${code}`, { type: 'json' })) || { rev: 0, state: {}, updatedAt: null };
  return json({ member: publicMember(member), rev: book.rev, state: book.state, updatedAt: book.updatedAt, book: def });
}

export async function putBook(store, req) {
  const body = await readJSON(req);
  const code = cleanCode(body.code);
  if (!code) return err(400, 'Missing access code');
  const member = await store.get(`members/${code}`, { type: 'json' });
  if (!member || member.deleted) return err(404, 'Access code not found');
  if (member.archived) return err(403, 'This book has been archived by the Training Division and can no longer be changed.');
  if (!body.state || typeof body.state !== 'object' || Array.isArray(body.state)) return err(400, 'Missing book data');

  const book = (await store.get(`books/${code}`, { type: 'json' })) || { rev: 0, state: {} };
  if (Number(body.baseRev) !== Number(book.rev)) {
    // Someone saved from another device since this one last synced.
    return json({ conflict: true, rev: book.rev, state: book.state, member: publicMember(member) }, 409);
  }

  // Entries in a submitted or approved phase stay exactly as they were submitted.
  // Book field keys start with the phase they belong to: "p1-", "p2-", "p3-".
  const lockedPrefixes = Object.keys(member.phases || {}).filter((p) => locked(member, p)).map((p) => p + '-');
  let state = body.state;
  if (lockedPrefixes.length) {
    state = { ...body.state };
    const isLocked = (k) => lockedPrefixes.some((pre) => k.startsWith(pre));
    for (const k of Object.keys(state)) if (isLocked(k) && !(k in book.state)) delete state[k];
    for (const [k, v] of Object.entries(book.state)) if (isLocked(k)) state[k] = v;
  }

  const next = { rev: book.rev + 1, state, updatedAt: now() };
  await store.setJSON(`books/${code}`, next);

  member.summary = sanitizeSummary(body.summary) || member.summary || null;
  member.lastActivity = next.updatedAt;
  const nk = (findBook(member.book && member.book.id) || {}).nameKey || 'recruit';
  if (typeof state[nk] === 'string' && state[nk].trim()) member.displayName = cleanText(state[nk], 80);
  await store.setJSON(`members/${code}`, member);
  return json({ ok: true, rev: next.rev, updatedAt: next.updatedAt, member: publicMember(member) });
}

function sanitizeSummary(s) {
  if (!s || typeof s !== 'object') return null;
  const out = {};
  for (const ph of Object.keys(s).slice(0, 12)) {
    if (ph === 'track') continue;
    const v = s[ph];
    if (v && typeof v === 'object') out[ph] = { done: Math.max(0, Number(v.done) || 0), total: Math.max(0, Number(v.total) || 0) };
  }
  out.track = s.track === 'ems' || s.track === 'non' ? s.track : null;
  return out;
}

export async function submitPhase(store, req) {
  const body = await readJSON(req);
  const code = cleanCode(body.code);
  const phase = String(body.phase || '');
  const member = await store.get(`members/${code}`, { type: 'json' });
  if (!member || member.deleted) return err(404, 'Access code not found');
  if (!member.phases?.[phase]) return err(400, 'Unknown phase');
  if (member.archived) return err(403, 'This book has been archived.');
  const cur = member.phases[phase]?.status;
  if (cur === 'submitted' || cur === 'approved') return json({ ok: true, member: publicMember(member) });
  member.phases[phase] = { ...member.phases[phase], status: 'submitted', submittedAt: now(), note: '', history: [...(member.phases[phase]?.history || []), { at: now(), event: 'submitted' }].slice(-20) };
  member.lastActivity = now();
  await store.setJSON(`members/${code}`, member);
  return json({ ok: true, member: publicMember(member) });
}

// ---------------- hub (training division) ----------------
async function pinOK(store, req, adminPin) {
  if (!adminPin) return { ok: false, res: err(500, 'The ADMIN_PIN setting has not been added in Netlify yet. See the setup guide.') };
  if (adminPin.length < 6) return { ok: false, res: err(500, 'ADMIN_PIN in Netlify must be at least 6 characters. Change it and redeploy.') };
  if (await lockedOut(store, req, 'pin')) return { ok: false, res: err(429, TOO_MANY) };
  const given = req.headers.get('x-hub-pin') || '';
  if (given.length !== adminPin.length || !timingSafeEqual(given, adminPin)) {
    await recordFail(store, req, 'pin');
    await new Promise((r) => setTimeout(r, 600));
    return { ok: false, res: err(401, 'Incorrect PIN') };
  }
  return { ok: true };
}

function timingSafeEqual(a, b) {
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function listMembers(store) {
  const { blobs } = await store.list({ prefix: 'members/' });  // security/* records are not members
  const out = await Promise.all(blobs.map((b) => store.get(b.key, { type: 'json' })));
  return out.filter((m) => m && !m.deleted);
}

export async function hub(store, req, path, adminPin) {
  const gate = await pinOK(store, req, adminPin);
  if (!gate.ok) return gate.res;
  if (path === 'members' && req.method === 'GET') await clearFails(store, req, 'pin');

  if (req.method === 'GET' && path === 'books') {
    return json({ books: LIBRARY.filter(Boolean).map(bookSummary) });
  }

  if (req.method === 'GET' && path === 'members') {
    const members = await listMembers(store);
    members.sort((a, b) => String(b.assignedAt).localeCompare(String(a.assignedAt)));
    return json({ members: members.map((m) => ({ ...publicMember(m), displayName: m.displayName || m.name })), serverTime: now() });
  }

  if (req.method === 'GET' && path === 'export') {
    // Full backup: every member record and every book's entries and signatures.
    const members = await listMembers(store);
    const books = {};
    for (const m of members) books[m.code] = await store.get(`books/${m.code}`, { type: 'json' });
    return json({ app: 'cvfd-taskbook-hub', exportedAt: now(), members, books });
  }

  if (req.method !== 'POST') return err(405, 'Method not allowed');
  const body = await readJSON(req);

  if (path === 'assign') {
    const name = cleanText(body.name, 80);
    if (!name) return err(400, 'Enter the member’s name');
    const def = findBook(String(body.bookId || ''));
    if (!def) return err(400, 'Choose a task book from the library');
    const book = bookSummary(def);
    for (let attempt = 0; attempt < 8; attempt++) {
      const code = newCode();
      if (await store.get(`members/${code}`)) continue;
      const member = {
        code,
        name,
        email: cleanText(body.email, 120),
        notes: cleanText(body.notes, 300),
        assignedAt: now(),
        archived: false,
        book: { id: book.id, title: book.title },
        phases: freshPhases(book.sections),
        summary: null,
        lastActivity: null,
      };
      const res = await store.setJSON(`members/${code}`, member, { onlyIfNew: true });
      if (res && res.modified === false) continue; // code already taken, try another
      await store.setJSON(`books/${code}`, { rev: 0, state: { [def.nameKey || 'recruit']: name }, updatedAt: null });
      return json({ ok: true, member: publicMember(member) });
    }
    return err(500, 'Could not create a unique code, try again');
  }

  const code = cleanCode(body.code);
  const member = await store.get(`members/${code}`, { type: 'json' });
  if (!member || member.deleted) return err(404, 'Member not found');

  if (path === 'review') {
    const phase = String(body.phase || '');
    if (!member.phases?.[phase]) return err(400, 'Unknown phase');
    const decision = body.decision;
    if (!['approved', 'returned', 'reopen'].includes(decision)) return err(400, 'Unknown decision');
    const prev = member.phases[phase];
    const status = decision === 'reopen' ? 'open' : decision;
    member.phases[phase] = {
      ...prev,
      status,
      reviewedAt: now(),
      note: cleanText(body.note, 500),
      history: [...(prev.history || []), { at: now(), event: decision, note: cleanText(body.note, 500) }].slice(-20),
    };
    await store.setJSON(`members/${code}`, member);
    return json({ ok: true, member: publicMember(member) });
  }

  if (path === 'update') {
    if ('archived' in body) member.archived = !!body.archived;
    if ('name' in body && cleanText(body.name, 80)) member.name = cleanText(body.name, 80);
    if ('email' in body) member.email = cleanText(body.email, 120);
    if ('notes' in body) member.notes = cleanText(body.notes, 300);
    await store.setJSON(`members/${code}`, member);
    return json({ ok: true, member: publicMember(member) });
  }

  if (path === 'delete') {
    if (body.confirm !== code) return err(400, 'Type the member’s code to confirm');
    await store.delete(`members/${code}`);
    await store.delete(`books/${code}`);
    return json({ ok: true });
  }

  return err(404, 'Unknown request');
}

// ---------------- router ----------------
export async function route(req, store, adminPin) {
  const url = new URL(req.url);
  const parts = url.pathname.replace(/^\/api\/?/, '').split('/').filter(Boolean);
  try {
    if (parts[0] === 'book') {
      if (parts[1] === 'submit' && req.method === 'POST') return await submitPhase(store, req);
      if (req.method === 'GET') return await getBook(store, req, url.searchParams.get('code'));
      if (req.method === 'PUT') return await putBook(store, req);
      return err(405, 'Method not allowed');
    }
    if (parts[0] === 'hub') return await hub(store, req, parts[1] || '', adminPin);
    if (parts[0] === 'ping') return json({ ok: true, time: now() });
    return err(404, 'Not found');
  } catch (e) {
    if (e && e.status) return err(e.status, e.message === 'too_large' ? 'That save is too large.' : 'Bad request');
    console.error(e);
    return err(500, 'Server error, try again');
  }
}
