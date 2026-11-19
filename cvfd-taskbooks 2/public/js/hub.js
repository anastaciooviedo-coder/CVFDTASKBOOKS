/* Training Division hub: members, live progress, assign books, review submitted phases. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var esc = window.TaskBook.esc;
  var PINKEY = 'cvfd-hub-pin';
  var pin = '';
  try { pin = localStorage.getItem(PINKEY) || sessionStorage.getItem(PINKEY) || ''; } catch (e) {}
  var members = [], books = {}, bookOrder = [], timer = null, lastLoad = null;

  // ---------------- api ----------------
  function api(path, body) {
    return fetch('/api/hub/' + path, {
      method: body ? 'POST' : 'GET', cache: 'no-store',
      headers: Object.assign({ 'x-hub-pin': pin }, body ? { 'content-type': 'application/json' } : {}),
      body: body ? JSON.stringify(body) : undefined,
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (r.status === 401 || r.status === 429) { lock(j.error || 'Incorrect PIN'); throw new Error('pin'); }
        if (!r.ok) throw new Error(j.error || 'Request failed');
        return j;
      });
    });
  }
  function toast(msg) { var t = $('toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('on'); }, 2600); }

  // ---------------- gate ----------------
  function lock(msg) {
    pin = ''; try { localStorage.removeItem(PINKEY); sessionStorage.removeItem(PINKEY); } catch (e) {}
    clearInterval(timer); $('app').hidden = true; $('gate').hidden = false; $('pinMsg').textContent = msg || ''; $('pinIn').value = ''; $('pinIn').focus();
  }
  $('pinForm').onsubmit = function (e) {
    e.preventDefault(); pin = $('pinIn').value.trim(); $('pinMsg').textContent = 'Checking…';
    load(true).then(function (ok) { if (ok) { try { if ($('rememberIn').checked) localStorage.setItem(PINKEY, pin); else sessionStorage.setItem(PINKEY, pin); } catch (e) {} } });
  };
  $('lockBtn').onclick = function () { lock(''); };

  // ---------------- books ----------------
  function loadBooks() {
    // The library comes from the server and is only sent with the hub PIN.
    return api('books').then(function (j) {
      books = {}; bookOrder = [];
      (j.books || []).forEach(function (b) { books[b.id] = b; bookOrder.push(b.id); });
      $('aBook').innerHTML = bookOrder.map(function (id) { return '<option value="' + esc(id) + '">' + esc(books[id].title) + '</option>'; }).join('');
      $('fBook').innerHTML = '<option value="">All books</option>' + bookOrder.map(function (id) { return '<option value="' + esc(id) + '">' + esc(books[id].title) + '</option>'; }).join('');
      descBook();
    });
  }
  function descBook() { var b = books[$('aBook').value]; $('aBookDesc').textContent = b ? b.description + ' Sections: ' + b.sections.map(function (s) { return s.label; }).join(', ') + '.' : ''; }
  $('aBook').onchange = descBook;

  // ---------------- load + render ----------------
  function load(first) {
    return api('members').then(function (j) {
      if (first) return loadBooks().then(function () { return j; });
      return j;
    }).then(function (j) {
      members = j.members || []; lastLoad = new Date();
      if (first) {
        $('gate').hidden = true; $('app').hidden = false;
        clearInterval(timer); timer = setInterval(function () { if (document.visibilityState === 'visible') load(false); }, 30000);
      }
      render(); return true;
    }).catch(function (e) {
      if (e.message !== 'pin') { if (first) $('pinMsg').textContent = e.message; else $('live').textContent = 'Couldn’t refresh – ' + e.message; }
      return false;
    });
  }
  $('refreshBtn').onclick = function () { load(false).then(function (ok) { if (ok) toast('Up to date'); }); };
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible' && pin && !$('app').hidden) load(false); });

  function overall(m) {
    var s = m.summary || {}, d = 0, t = 0;
    Object.keys(m.phases || {}).forEach(function (ph) { if (s[ph]) { d += s[ph].done; t += s[ph].total; } });
    return t ? Math.round(d * 100 / t) : 0;
  }
  function ago(iso) {
    if (!iso) return 'Not started';
    var s = (Date.now() - new Date(iso).getTime()) / 1000;
    if (s < 60) return 'Just now';
    if (s < 3600) return Math.floor(s / 60) + ' min ago';
    if (s < 86400) return Math.floor(s / 3600) + ' h ago';
    if (s < 86400 * 14) return Math.floor(s / 86400) + ' day' + (s >= 172800 ? 's' : '') + ' ago';
    return new Date(iso).toLocaleDateString();
  }
  function link(code) { return location.origin + location.pathname.replace(/hub\.html$/, '') + '?code=' + code; }
  function labelOf(m, ph) { return (m.phases[ph] && m.phases[ph].label) || ph; }
  function title(m) { return m.displayName || m.name; }

  function render() {
    $('live').textContent = 'Live · updated ' + lastLoad.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    var active = members.filter(function (m) { return !m.archived; });
    var pending = [];
    active.forEach(function (m) { Object.keys(m.phases || {}).forEach(function (ph) { if (m.phases[ph].status === 'submitted') pending.push({ m: m, ph: ph }); }); });
    pending.sort(function (a, b) { return String(a.m.phases[a.ph].submittedAt).localeCompare(String(b.m.phases[b.ph].submittedAt)); });
    var avg = active.length ? Math.round(active.reduce(function (a, m) { return a + overall(m); }, 0) / active.length) : 0;
    var done = active.filter(function (m) { var ks = Object.keys(m.phases || {}); return ks.length && ks.every(function (k) { return m.phases[k].status === 'approved'; }); }).length;
    $('stats').innerHTML =
      '<div class="stat"><b>' + active.length + '</b><span>Active task books</span></div>' +
      '<div class="stat' + (pending.length ? ' alert' : '') + '"><b>' + pending.length + '</b><span>Phases waiting for review</span></div>' +
      '<div class="stat"><b>' + avg + '%</b><span>Average progress</span></div>' +
      '<div class="stat"><b>' + done + '</b><span>Books fully approved</span></div>';

    $('reviewSec').hidden = !pending.length;
    $('reviews').innerHTML = pending.map(function (p) {
      var m = p.m, ph = m.phases[p.ph];
      return '<div class="rv"><div class="who"><b>' + esc(title(m)) + '</b> · ' + esc(labelOf(m, p.ph)) + ' of ' + esc(m.book ? m.book.title : '') +
        '<small>Submitted ' + esc(ago(ph.submittedAt)) + (m.summary && m.summary[p.ph] ? ' · ' + m.summary[p.ph].done + ' of ' + m.summary[p.ph].total + ' items complete' : '') + '</small></div>' +
        '<div class="acts"><a class="b2 sm" href="' + esc(link(m.code)) + '&from=hub#' + esc(p.ph) + '" target="_blank" rel="noopener">Open book</a>' +
        '<button class="b2 sm" data-rv="returned" data-code="' + m.code + '" data-ph="' + esc(p.ph) + '">Return</button>' +
        '<button class="b2 sm ok" data-rv="approved" data-code="' + m.code + '" data-ph="' + esc(p.ph) + '">Approve</button></div></div>';
    }).join('');

    var q = $('q').value.trim().toLowerCase(), fb = $('fBook').value, fs = $('fStatus').value;
    var list = members.filter(function (m) {
      if (fs === 'active' && m.archived) return false;
      if (fs === 'archived' && !m.archived) return false;
      if (fb && (!m.book || m.book.id !== fb)) return false;
      if (q && (title(m) + ' ' + m.name + ' ' + m.code + ' ' + (m.notes || '')).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    $('members').innerHTML = list.length ? list.map(row).join('') :
      '<div class="empty">' + (members.length ? 'No members match these filters.' : 'No task books assigned yet. Use “+ Assign a book” to add your first member.') + '</div>';
  }

  function row(m) {
    var pct = overall(m), s = m.summary || {};
    var phs = Object.keys(m.phases || {}).map(function (ph) {
      var p = m.phases[ph], x = s[ph], pp = x && x.total ? Math.round(x.done * 100 / x.total) : 0;
      var st = p.status === 'open' ? (pp ? pp + '%' : '–') : p.status.charAt(0).toUpperCase() + p.status.slice(1);
      return '<div class="ph ' + esc(p.status) + '" title="' + esc(p.label || ph) + ': ' + (x ? x.done + ' of ' + x.total : 'not started') + '"><b>' + esc(p.label || ph) + '</b><em>' + esc(st) + '</em><i><u style="width:' + pp + '%"></u></i></div>';
    }).join('');
    return '<div class="mrow"><div class="nm"><b>' + esc(title(m)) + '</b><small>' + esc(m.book ? m.book.title : '') + ' · <code>' + esc(m.code) + '</code>' +
      (m.archived ? ' · Archived' : '') + (m.notes ? ' · ' + esc(m.notes) : '') + '</small></div>' +
      '<div><div class="overall"><div class="pbar"><i style="width:' + pct + '%"></i></div><span>' + pct + '%</span></div><div class="phs">' + phs + '</div></div>' +
      '<div class="last">' + esc(ago(m.lastActivity)) + '</div>' +
      '<div class="acts"><a class="b2 sm" href="' + esc(link(m.code)) + '&from=hub" target="_blank" rel="noopener">Open</a>' +
      '<button class="b2 sm" data-copy="' + m.code + '">Copy link</button>' +
      '<div class="menu"><button class="b2 sm" data-menu aria-label="More actions">⋯</button><div class="pop">' +
      '<button data-showlink="' + m.code + '">Show code and link</button>' +
      Object.keys(m.phases || {}).filter(function (ph) { return m.phases[ph].status !== 'open'; }).map(function (ph) {
        return '<button data-rv="reopen" data-code="' + m.code + '" data-ph="' + esc(ph) + '">Reopen ' + esc(labelOf(m, ph)) + ' for editing</button>';
      }).join('') +
      '<button data-arch="' + m.code + '">' + (m.archived ? 'Restore from archive' : 'Archive (make read-only)') + '</button>' +
      '<button class="red" data-del="' + m.code + '">Delete permanently…</button></div></div></div></div>';
  }
  ['q', 'fBook', 'fStatus'].forEach(function (id) { $(id).addEventListener('input', render); });

  // ---------------- actions ----------------
  var byCode = function (c) { return members.filter(function (m) { return m.code === c; })[0]; };
  function copy(text) {
    var done = function () { toast('Link copied'); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { prompt('Copy this link:', text); });
    else prompt('Copy this link:', text);
  }
  function showLink(m) {
    $('linkTitle').textContent = m.name + ' – ' + (m.book ? m.book.title : '');
    $('linkCode').textContent = m.code; $('linkUrl').textContent = link(m.code);
    var body = 'Hi ' + m.name.split(' ')[0] + ',\n\nYour ' + (m.book ? m.book.title : 'task book') + ' is ready. Open it here:\n' + link(m.code) +
      '\n\nYour access code is ' + m.code + '. Keep it private.\nOn an iPhone or iPad, tap Share → Add to Home Screen so it opens like an app.\n\nCVFD Training Division';
    $('linkMail').href = 'mailto:' + encodeURIComponent(m.email || '') + '?subject=' + encodeURIComponent('Your CVFD ' + (m.book ? m.book.title : 'task book')) + '&body=' + encodeURIComponent(body);
    $('linkCopy').onclick = function () { copy(link(m.code)); };
    open('linkDlg');
  }
  function open(id) { $(id).classList.add('on'); var f = $(id).querySelector('input,textarea,select'); if (f) setTimeout(function () { f.focus(); }, 30); }
  function close(id) { $(id).classList.remove('on'); }
  document.querySelectorAll('.dlg').forEach(function (d) {
    d.addEventListener('click', function (e) { if (e.target === d || e.target.closest('[data-close]')) close(d.id); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') document.querySelectorAll('.dlg.on').forEach(function (d) { close(d.id); }); });

  document.addEventListener('click', function (e) {
    var t = e.target;
    var mm = t.closest('[data-menu]');
    document.querySelectorAll('.menu.on').forEach(function (x) { if (!mm || x !== mm.parentNode) x.classList.remove('on'); });
    if (mm) { mm.parentNode.classList.toggle('on'); return; }
    var c = t.closest('[data-copy]'); if (c) { copy(link(c.dataset.copy)); return; }
    var sl = t.closest('[data-showlink]'); if (sl) { showLink(byCode(sl.dataset.showlink)); return; }
    var rv = t.closest('[data-rv]'); if (rv) { startReview(byCode(rv.dataset.code), rv.dataset.ph, rv.dataset.rv); return; }
    var ar = t.closest('[data-arch]'); if (ar) {
      var m = byCode(ar.dataset.arch);
      api('update', { code: m.code, archived: !m.archived }).then(function () { toast(m.archived ? 'Restored' : 'Archived'); load(false); }).catch(function (er) { toast(er.message); });
      return;
    }
    var dl = t.closest('[data-del]'); if (dl) { var md = byCode(dl.dataset.del); delCode = md.code; $('delHint').textContent = 'This removes ' + md.name + '’s ' + (md.book ? md.book.title : 'book') + ' and every entry and signature in it. Print or save it first if you need a record. This cannot be undone.'; $('delIn').value = ''; open('delDlg'); }
  });

  $('backupBtn').onclick = function () {
    api('export').then(function (data) {
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(data)], { type: 'application/json' }));
      a.download = 'CVFD-task-books-backup-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      toast('Backup downloaded');
    }).catch(function (er) { toast(er.message); });
  };
  $('assignBtn').onclick = function () { $('assignForm').reset(); descBook(); $('aMsg').textContent = ''; open('assignDlg'); };
  $('assignForm').onsubmit = function (e) {
    e.preventDefault();
    var b = books[$('aBook').value];
    if (!b) { $('aMsg').textContent = 'Choose a task book.'; return; }
    $('aMsg').textContent = '';
    api('assign', { name: $('aName').value, email: $('aEmail').value, notes: $('aNotes').value, bookId: b.id })
      .then(function (j) { close('assignDlg'); showLink(j.member); load(false); })
      .catch(function (er) { $('aMsg').textContent = er.message; });
  };

  var rvCtx = null;
  function startReview(m, ph, decision) {
    rvCtx = { m: m, ph: ph, decision: decision };
    var lab = labelOf(m, ph);
    $('rvTitle').textContent = (decision === 'approved' ? 'Approve ' : decision === 'returned' ? 'Return ' : 'Reopen ') + lab + ' – ' + title(m);
    $('rvHint').textContent = decision === 'approved' ? 'The phase stays locked and is marked approved. The member sees your note.' :
      decision === 'returned' ? 'The phase unlocks so the member can make corrections and submit again. Tell them what to fix.' :
      'The phase unlocks for editing and its status goes back to In progress.';
    $('rvNoteLabel').textContent = decision === 'returned' ? 'What needs to be fixed' : 'Note to the member (optional)';
    $('rvNote').value = ''; $('rvNote').required = decision === 'returned';
    $('rvGo').textContent = decision === 'approved' ? 'Approve' : decision === 'returned' ? 'Return for changes' : 'Reopen';
    $('rvGo').className = 'b2 ' + (decision === 'approved' ? 'ok' : 'pri');
    open('reviewDlg');
  }
  $('reviewForm').onsubmit = function (e) {
    e.preventDefault();
    api('review', { code: rvCtx.m.code, phase: rvCtx.ph, decision: rvCtx.decision, note: $('rvNote').value })
      .then(function () { close('reviewDlg'); toast(rvCtx.decision === 'approved' ? 'Approved' : rvCtx.decision === 'returned' ? 'Returned to member' : 'Reopened'); load(false); })
      .catch(function (er) { toast(er.message); });
  };

  var delCode = null;
  $('delForm').onsubmit = function (e) {
    e.preventDefault();
    api('delete', { code: delCode, confirm: $('delIn').value.toUpperCase().trim() })
      .then(function () { close('delDlg'); toast('Deleted'); load(false); })
      .catch(function (er) { toast(er.message); });
  };

  if (pin) load(true); else lock('');
})();
