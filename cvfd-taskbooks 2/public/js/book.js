/* Member task book: access code, cloud sync with offline cache, signatures, phase submit and lock. */
(function () {
  'use strict';
  var TB = window.TaskBook;
  var $ = function (id) { return document.getElementById(id); };
  var params = new URLSearchParams(location.search);
  var LAST = 'cvfd-tb-last';
  var code = (params.get('code') || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  var fromHub = params.get('from') === 'hub';
  if (!code) { try { code = localStorage.getItem(LAST) || ''; } catch (e) {} }

  var member = null, book = null, manifest = null;
  var state = {}, rev = 0, dirty = {};
  var cacheKey = function () { return 'cvfd-tb-' + code; };

  // ---------------- gate ----------------
  function showGate(msg) {
    $('app').hidden = true; $('gate').hidden = false;
    $('gateMsg').textContent = msg || '';
    $('codeIn').value = code || '';
  }
  $('gateForm').onsubmit = function (e) {
    e.preventDefault();
    code = $('codeIn').value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (!code) { $('gateMsg').textContent = 'Enter your access code.'; return; }
    $('gateMsg').textContent = 'Opening…';
    start();
  };

  // ---------------- local cache ----------------
  function readCache() {
    try { return JSON.parse(localStorage.getItem(cacheKey()) || 'null'); } catch (e) { return null; }
  }
  function writeCache() {
    try { localStorage.setItem(cacheKey(), JSON.stringify({ state: state, rev: rev, dirty: dirty, member: member, book: book })); } catch (e) {}
  }

  // ---------------- load ----------------
  function start() {
    fetch('/api/book?code=' + encodeURIComponent(code), { cache: 'no-store' })
      .then(function (r) { return r.json().then(function (j) { return { s: r.status, j: j }; }); })
      .then(function (res) {
        if (res.s === 404 || res.s === 400) { forget(); showGate(res.j.error || 'That code was not found.'); return; }
        if (res.s === 429) { showGate(res.j.error); return; }
        if (res.s !== 200) throw new Error(res.j.error || 'Server error');
        member = res.j.member; rev = res.j.rev; state = res.j.state || {}; book = res.j.book;
        var cache = readCache();
        if (cache && cache.dirty && Object.keys(cache.dirty).length) {
          // Changes made offline on this device that never reached the server.
          Object.keys(cache.dirty).forEach(function (k) {
            if (k in cache.state) state[k] = cache.state[k]; else delete state[k];
          });
          dirty = cache.dirty;
        }
        boot(true);
      })
      .catch(function () {
        var cache = readCache();
        if (cache && cache.member && cache.book) { member = cache.member; book = cache.book; state = cache.state; rev = cache.rev; dirty = cache.dirty || {}; boot(false); }
        else showGate('Can’t reach the server. Check your connection and try again.');
      });
  }
  function forget() { try { if (localStorage.getItem(LAST) === code) localStorage.removeItem(LAST); } catch (e) {} }

  function boot(online) {
    try { if (!fromHub) localStorage.setItem(LAST, code); } catch (e) {}
    if (!state[book_nameKey()] && member.name) { state[book_nameKey()] = member.name; }
    try {
        if (!book || !book.sections) throw 0;
        var out = TB.render(book);
        manifest = out.manifest;
        $('tabs').innerHTML = out.tabs;
        $('panels').innerHTML = out.panels;
        $('summary').innerHTML = out.summary;
        $('bookTitle').textContent = (book.title || 'Task book').toUpperCase();
        document.title = book.title + ' – ' + (member.name || '');
        $('gate').hidden = true; $('app').hidden = false;
        if (fromHub) { $('viewNote').hidden = false; $('viewNote').textContent = 'Training Division view of ' + member.name + '’s book. Changes you make here are saved to their book.'; $('exitBtn').textContent = 'Back to hub'; }
        var start = (location.hash || '').slice(1);
        show(document.querySelector('[data-panel="' + start + '"]') ? start : book.sections[0].id);
        paint(); writeCache();
        setSync(online ? (Object.keys(dirty).length ? 'busy' : 'ok') : 'bad', online ? (Object.keys(dirty).length ? 'Saving…' : 'All changes saved') : 'Offline – saved on this device');
        if (Object.keys(dirty).length) queueSync(200);
    } catch (e) { showGate('This task book could not be loaded. Tell the Training Division.'); }
  }
  function book_nameKey() { return (book && book.nameKey) || 'recruit'; }

  // ---------------- painting ----------------
  function paint() {
    document.querySelectorAll('.f[data-k]').forEach(function (el) { var v = state[el.dataset.k]; el.value = v == null ? '' : v; });
    document.querySelectorAll('.pf[data-k], .ot[data-k]').forEach(paintToggle);
    document.querySelectorAll('.rb[data-k], .rec[data-k], .ck[data-k]').forEach(function (el) { el.setAttribute('aria-pressed', String(state[el.dataset.k] === el.dataset.val)); });
    document.querySelectorAll('.sigbox[data-k]').forEach(paintSig);
    names(); locks(); refresh();
  }
  function paintToggle(el) { var v = state[el.dataset.k] || ''; el.dataset.v = v; el.textContent = v || '–'; }
  function paintSig(el) {
    var v = state[el.dataset.k];
    el.classList.toggle('has', !!(v && v.img));
    if (v && v.img) {
      var d = v.at ? new Date(v.at) : null;
      el.innerHTML = '<img alt="Signature" src="' + v.img + '">' + (d ? '<time>' + d.toLocaleDateString() + '</time>' : '');
    } else el.innerHTML = '<span class="sigph">Tap to sign</span>';
  }
  function names() {
    var n = (state[book_nameKey()] || member.name || '').trim();
    $('who').textContent = n + ' · ' + member.book.title + ' · Code ' + member.code;
    document.querySelectorAll('.autoname').forEach(function (el) { el.placeholder = n || 'Name'; });
  }
  function sectionOf(el) { var p = el.closest('[data-panel]'); return p ? p.dataset.panel : null; }
  function isLocked(sid) {
    if (member.archived) return true;
    var ph = member.phases && member.phases[sid];
    return !!ph && (ph.status === 'submitted' || ph.status === 'approved');
  }
  function locks() {
    document.querySelectorAll('.panel').forEach(function (p) {
      var sid = p.dataset.panel, lk = member.archived || isLocked(sid);
      p.classList.toggle('locked', lk);
      p.querySelectorAll('.f, .pf, .ot, .ck, .rb, .rec, .sigbox').forEach(function (el) { el.disabled = lk; });
    });
    document.querySelectorAll('[data-pstatus]').forEach(function (el) {
      var ph = member.phases[el.dataset.pstatus] || {}, st = ph.status, d = function (x) { return x ? new Date(x).toLocaleDateString() : ''; };
      el.className = 'pstatus ' + (st || '');
      if (member.archived) { el.className = 'pstatus submitted'; el.innerHTML = '<b>This book is archived</b>It can be viewed and printed but no longer changed.'; return; }
      if (st === 'submitted') el.innerHTML = '<b>Submitted ' + d(ph.submittedAt) + ' – under review</b>This phase is locked while the Training Division reviews it.';
      else if (st === 'approved') el.innerHTML = '<b>Approved ' + d(ph.reviewedAt) + ' ✓</b>' + (ph.note ? TB.esc(ph.note) : 'This phase is complete.');
      else if (st === 'returned') el.innerHTML = '<b>Returned for changes ' + d(ph.reviewedAt) + '</b>' + (ph.note ? TB.esc(ph.note) : 'Make the corrections and submit again.');
      else el.innerHTML = '';
    });
    document.querySelectorAll('[data-chip]').forEach(function (el) {
      var st = (member.phases[el.dataset.chip] || {}).status;
      el.className = 'chipst st-' + (st || 'open');
      el.textContent = st && st !== 'open' ? st.charAt(0).toUpperCase() + st.slice(1) : '';
    });
    document.body.classList.toggle('archived', !!member.archived);
  }

  function refresh() {
    if (state.emsTrack) document.body.dataset.track = state.emsTrack; else delete document.body.dataset.track;
    var pr = TB.progress(manifest, state);
    Object.keys(pr).forEach(function (sid) {
      var s = pr[sid], pct = s.total ? Math.round(s.done * 100 / s.total) : 0;
      Object.keys(s.cards).forEach(function (cid) {
        var c = s.cards[cid], st = document.querySelector('[data-status="' + cid + '"]');
        if (st) { st.textContent = c.done + ' of ' + c.total + ' complete'; st.classList.toggle('done', c.total > 0 && c.done === c.total); }
        var j = document.querySelector('.jump a[data-card="' + cid + '"]'); if (j) j.classList.toggle('done', c.total > 0 && c.done === c.total);
      });
      document.querySelectorAll('[data-bar="' + sid + '"]').forEach(function (b) { b.style.width = pct + '%'; });
      document.querySelectorAll('[data-pct="' + sid + '"]').forEach(function (b) { b.textContent = s.done + ' of ' + s.total + ' items complete (' + pct + '%)'; });
      var tp = document.querySelector('[data-tabpct="' + sid + '"]'); if (tp) tp.textContent = s.total ? pct + '%' : '';
    });
    document.querySelectorAll('.task[data-task]').forEach(function (t) { var k = t.dataset.task; t.classList.toggle('done', state[k + 'a1p'] === 'P' || state[k + 'a2p'] === 'P'); });
    document.querySelectorAll('[data-done]').forEach(function (t) { t.classList.toggle('done', TB.has(state, t.dataset.done)); });
    document.querySelectorAll('[data-reps]').forEach(function (r) {
      var k = r.dataset.reps, req = +r.dataset.req, n = TB.repsDone(k, req, state);
      r.classList.toggle('done', n >= req);
      r.querySelector('[data-rcount]').textContent = n + ' of ' + req + ' signed';
    });
    document.querySelectorAll('[data-auto]').forEach(function (a) {
      var k = a.dataset.auto, n = +a.dataset.n, tp = 0, tf = 0, rp = 0, rf = 0;
      for (var i = 1; i <= n; i++) { var t = state[k + 's' + i + 't'], r = state[k + 's' + i + 'r']; if (t === 'P') tp++; if (t === 'F') tf++; if (r === 'P') rp++; if (r === 'F') rf++; }
      var msg = 'Test: ' + (tp + tf) + ' of ' + n + ' steps scored' + (tf ? ' · ' + tf + ' fail' + (tf > 1 ? 's' : '') : '');
      if (rp + rf) msg += '   |   Retest: ' + (rp + rf) + ' of ' + n + ' scored' + (rf ? ' · ' + rf + ' fail' + (rf > 1 ? 's' : '') : '');
      a.textContent = msg;
    });
    document.querySelectorAll('[data-submit]').forEach(function (box) { renderSubmit(box, pr[box.dataset.submit]); });
    return pr;
  }

  // ---------------- editing ----------------
  function set(k, v) {
    if (v === '' || v == null) delete state[k]; else state[k] = v;
    dirty[k] = 1; writeCache(); queueSync(1200);
  }
  document.addEventListener('input', function (e) {
    var el = e.target; if (!el.matches || !el.matches('.f[data-k]') || el.disabled) return;
    set(el.dataset.k, el.value);
    if (el.dataset.k === book_nameKey()) names();
    refresh();
  });
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.pf[data-k]');
    if (b && !b.disabled) { var cur = state[b.dataset.k] || ''; set(b.dataset.k, cur === '' ? 'P' : cur === 'P' ? 'F' : ''); paintToggle(b); refresh(); return; }
    var o = e.target.closest('.ot[data-k]');
    if (o && !o.disabled) { var c0 = state[o.dataset.k] || ''; set(o.dataset.k, c0 === '' ? 'O' : c0 === 'O' ? 'T' : ''); paintToggle(o); refresh(); return; }
    var c = e.target.closest('.rb[data-k], .rec[data-k], .ck[data-k]');
    if (c && !c.disabled) {
      var k = c.dataset.k; set(k, state[k] === c.dataset.val ? '' : c.dataset.val);
      document.querySelectorAll('[data-k="' + k + '"]').forEach(function (o) { o.setAttribute('aria-pressed', String(state[k] === o.dataset.val)); });
      refresh(); return;
    }
    var s = e.target.closest('.sigbox[data-k]'); if (s && !s.disabled) { openSig(s); return; }
    var g = e.target.closest('[data-goto]'); if (g) { show(g.dataset.goto); window.scrollTo(0, 0); return; }
    var t = e.target.closest('.tab'); if (t) { show(t.dataset.tab); window.scrollTo(0, 0); return; }
    var j = e.target.closest('.jump a'); if (j) { e.preventDefault(); var tgt = document.getElementById(j.getAttribute('href').slice(1)); if (tgt) tgt.scrollIntoView({ behavior: 'smooth' }); }
  });
  function show(sid) {
    document.body.dataset.tab = sid;
    document.querySelectorAll('.panel').forEach(function (p) { p.classList.toggle('on', p.dataset.panel === sid); });
    document.querySelectorAll('.tab').forEach(function (t) { t.setAttribute('aria-selected', String(t.dataset.tab === sid)); });
    try { history.replaceState(null, '', location.pathname + location.search + '#' + sid); } catch (e) {}
  }

  // ---------------- sync ----------------
  var syncTimer = null, syncing = false, failCount = 0;
  function setSync(cls, text) { var el = $('sync'); el.className = 'sync ' + cls; el.lastElementChild.textContent = text; }
  function queueSync(ms) { clearTimeout(syncTimer); syncTimer = setTimeout(sync, ms); if (!syncing) setSync('busy', 'Saving…'); }
  function summary() {
    var pr = TB.progress(manifest, state), out = { track: state.emsTrack || null };
    Object.keys(pr).forEach(function (sid) { if (pr[sid].total) out[sid] = { done: pr[sid].done, total: pr[sid].total }; });
    return out;
  }
  function sync() {
    if (syncing) { queueSync(800); return Promise.resolve(false); }
    if (!Object.keys(dirty).length) { setSync('ok', 'All changes saved'); return Promise.resolve(true); }
    syncing = true;
    var sent = dirty; dirty = {};
    return fetch('/api/book', { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ code: code, baseRev: rev, state: state, summary: summary() }) })
      .then(function (r) { return r.json().then(function (j) { return { s: r.status, j: j }; }); })
      .then(function (res) {
        syncing = false;
        if (res.s === 200) {
          rev = res.j.rev; member = res.j.member; failCount = 0; writeCache();
          if (Object.keys(dirty).length) queueSync(600);
          else setSync('ok', 'All changes saved ' + new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
          return true;
        }
        if (res.s === 409) {
          // Saved from another device in the meantime: keep their entries, then re-apply ours.
          var mine = Object.assign({}, sent, dirty), merged = res.j.state || {};
          Object.keys(mine).forEach(function (k) { if (k in state) merged[k] = state[k]; else delete merged[k]; });
          state = merged; rev = res.j.rev; member = res.j.member; dirty = mine;
          paint(); writeCache(); return sync();
        }
        if (res.s === 403) { member.archived = true; dirty = Object.assign(sent, dirty); locks(); setSync('bad', 'Archived – not saved'); return false; }
        throw new Error(res.j.error || 'Save failed');
      })
      .catch(function () {
        syncing = false; dirty = Object.assign(sent, dirty); writeCache(); failCount++;
        setSync('bad', 'Offline – saved on this device');
        clearTimeout(syncTimer); syncTimer = setTimeout(sync, Math.min(60000, 4000 * failCount));
        return false;
      });
  }
  window.addEventListener('online', function () { queueSync(300); });
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden' && Object.keys(dirty).length) sync(); });
  // Pick up reviews from the hub (approve / return) while the book is open.
  setInterval(function () {
    if (!member || syncing || Object.keys(dirty).length || document.visibilityState !== 'visible') return;
    fetch('/api/book?code=' + encodeURIComponent(code), { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
      if (!j || Object.keys(dirty).length || syncing) return;
      var changed = j.rev !== rev || JSON.stringify(j.member.phases) !== JSON.stringify(member.phases) || j.member.archived !== member.archived;
      member = j.member;
      if (j.rev !== rev) { state = j.state; rev = j.rev; }
      if (changed) { paint(); writeCache(); }
    }).catch(function () {});
  }, 45000);

  // ---------------- submit a phase ----------------
  var armed = {};
  function renderSubmit(box, pr) {
    var sid = box.dataset.submit, ph = member.phases[sid] || {}, sec = book.sections.filter(function (s) { return s.id === sid; })[0];
    var left = pr ? pr.total - pr.done : 0, st = ph.status || 'open';
    var label = sec ? sec.label : sid, h;
    if (member.archived) h = '<p class="hint">This book is archived.</p>';
    else if (st === 'submitted') h = '<div class="row"><div><b>' + TB.esc(label) + ' submitted</b><br><span class="hint">Waiting for Training Division review.</span></div></div>';
    else if (st === 'approved') h = '<div class="row"><div><b>' + TB.esc(label) + ' approved ✓</b></div></div>';
    else {
      h = '<div class="row"><div><b>Submit ' + TB.esc(label) + ' to the Training Division</b><br><span class="hint">' +
        (left ? left + ' item' + (left > 1 ? 's are' : ' is') + ' not complete yet.' : 'Everything in this phase is complete.') +
        ' Once submitted, this phase is locked until it is reviewed.</span></div><button type="button" class="b2 pri" data-dosubmit="' + TB.esc(sid) + '">' +
        (armed[sid] ? (left ? 'Tap again to submit with ' + left + ' incomplete' : 'Tap again to confirm') : (st === 'returned' ? 'Resubmit ' : 'Submit ') + TB.esc(label)) + '</button></div>';
    }
    if (box.innerHTML !== h) box.innerHTML = h;
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-dosubmit]'); if (!b) return;
    var sid = b.dataset.dosubmit;
    if (!armed[sid]) { armed[sid] = true; refresh(); setTimeout(function () { armed[sid] = false; refresh(); }, 5000); return; }
    armed[sid] = false; b.disabled = true; b.textContent = 'Submitting…';
    sync().then(function (ok) {
      if (!ok && Object.keys(dirty).length) throw new Error('offline');
      return fetch('/api/book/submit', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ code: code, phase: sid }) });
    }).then(function (r) { return r.json(); }).then(function (j) {
      if (!j.member) throw new Error(j.error || 'failed');
      member = j.member; writeCache(); paint(); window.scrollTo(0, 0);
    }).catch(function () { b.disabled = false; b.textContent = 'Could not submit – check connection and try again'; });
  });

  // ---------------- signatures ----------------
  var cv = $('sigCanvas'), ctx = cv.getContext('2d'), sigTarget = null, drawn = false, last = null;
  function sizeCanvas() {
    var r = cv.getBoundingClientRect(), dpr = Math.max(1, window.devicePixelRatio || 1);
    cv.width = Math.round(r.width * dpr); cv.height = Math.round(r.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = '#102a5c';
  }
  function openSig(el) {
    sigTarget = el; drawn = false;
    $('sigTitle').textContent = el.dataset.label || 'Sign';
    $('sigRemove').hidden = !(state[el.dataset.k] && state[el.dataset.k].img);
    $('sigModal').classList.add('on'); sizeCanvas(); ctx.clearRect(0, 0, cv.width, cv.height);
  }
  function closeSig() { $('sigModal').classList.remove('on'); sigTarget = null; }
  function pt(e) { var r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top, p: e.pressure || 0.5, pen: e.pointerType === 'pen' }; }
  cv.addEventListener('pointerdown', function (e) { e.preventDefault(); cv.setPointerCapture(e.pointerId); last = pt(e); drawn = true; ctx.beginPath(); ctx.arc(last.x, last.y, 1.2, 0, Math.PI * 2); ctx.fillStyle = '#102a5c'; ctx.fill(); });
  cv.addEventListener('pointermove', function (e) {
    if (!last) return; e.preventDefault();
    var evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
    evs.forEach(function (ev) {
      var p = pt(ev), mid = { x: (last.x + p.x) / 2, y: (last.y + p.y) / 2 };
      ctx.lineWidth = p.pen ? 1.2 + p.p * 2.6 : 2.4;
      ctx.beginPath(); ctx.moveTo(last.mx || last.x, last.my || last.y); ctx.quadraticCurveTo(last.x, last.y, mid.x, mid.y); ctx.stroke();
      p.mx = mid.x; p.my = mid.y; last = p;
    });
  });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (n) { cv.addEventListener(n, function () { last = null; }); });
  $('sigClear').onclick = function () { ctx.clearRect(0, 0, cv.width, cv.height); drawn = false; };
  $('sigCancel').onclick = closeSig;
  $('sigModal').addEventListener('click', function (e) { if (e.target === $('sigModal')) closeSig(); });
  $('sigRemove').onclick = function () { if (!sigTarget) return; set(sigTarget.dataset.k, ''); paintSig(sigTarget); refresh(); closeSig(); };
  $('sigDone').onclick = function () {
    if (!sigTarget) return;
    if (!drawn) { closeSig(); return; }
    // Trim to the inked area and shrink so each signature stays a few KB.
    var w = cv.width, h = cv.height, data = ctx.getImageData(0, 0, w, h).data, x0 = w, y0 = h, x1 = 0, y1 = 0;
    for (var y = 0; y < h; y += 2) for (var x = 0; x < w; x += 2) if (data[(y * w + x) * 4 + 3] > 10) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    if (x1 <= x0) { closeSig(); return; }
    var pad = 8; x0 = Math.max(0, x0 - pad); y0 = Math.max(0, y0 - pad); x1 = Math.min(w, x1 + pad); y1 = Math.min(h, y1 + pad);
    var sw = x1 - x0, sh = y1 - y0, scale = Math.min(1, 360 / sw, 120 / sh);
    var out = document.createElement('canvas'); out.width = Math.max(1, Math.round(sw * scale)); out.height = Math.max(1, Math.round(sh * scale));
    out.getContext('2d').drawImage(cv, x0, y0, sw, sh, 0, 0, out.width, out.height);
    set(sigTarget.dataset.k, { img: out.toDataURL('image/png'), at: new Date().toISOString() });
    paintSig(sigTarget); refresh(); closeSig();
  };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && sigTarget) closeSig(); });

  // ---------------- buttons ----------------
  $('printBtn').onclick = function () { window.print(); }; // print styles show every section
  $('exitBtn').onclick = function () {
    if (fromHub) { location.href = 'hub.html'; return; }
    if (Object.keys(dirty).length) { setSync('busy', 'Saving before you leave…'); sync().then(function () { forget(); location.href = location.pathname; }); return; }
    forget(); location.href = location.pathname;
  };

  if (code) start(); else showGate('');
})();
