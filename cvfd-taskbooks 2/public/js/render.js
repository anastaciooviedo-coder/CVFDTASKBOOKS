/* Renders a task book definition (books/<id>.json) into HTML, and builds the progress manifest.
   Block types: html, img, fields, log, chooser, tasks, ps, reviewHead, ratings, comments, exam.
   See BOOK-FORMAT.md for the full description. */
(function (global) {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function inp(k, o) {
    o = o || {};
    var typ = o.type || 'text';
    return '<input class="f ' + (o.cls || '') + '" data-k="' + esc(k) + '" type="' + typ + '"' +
      (o.ph ? ' placeholder="' + esc(o.ph) + '"' : '') +
      ' aria-label="' + esc(o.label || o.ph || '') + '">';
  }
  function sig(k, label) {
    return '<button type="button" class="sigbox" data-k="' + esc(k) + '" data-label="' + esc(label || 'Signature') +
      '" aria-label="' + esc(label || 'Signature') + ': tap to sign"><span class="sigph">Tap to sign</span></button>';
  }
  function tog(k, label) {
    return '<button type="button" class="pf" data-k="' + esc(k) + '" data-v="" aria-label="' + esc(label || 'Pass or fail') + '">–</button>';
  }
  function field(f) {
    var ctl;
    if (f.type === 'sig') ctl = sig(f.k, f.label);
    else if (f.type === 'date') ctl = inp(f.k, { type: 'date', label: f.label });
    else if (f.type === 'name') ctl = inp(f.k, { cls: 'autoname', ph: f.ph || 'Name', label: f.label });
    else if (f.type === 'textarea') ctl = '<textarea class="f" data-k="' + esc(f.k) + '" rows="3" aria-label="' + esc(f.label) + '"></textarea>';
    else if (f.type === 'number') ctl = inp(f.k, { type: 'number', ph: f.ph || '', label: f.label });
    else ctl = inp(f.k, { ph: f.ph || '', label: f.label });
    return '<label class="fld"><span>' + esc(f.label) + '</span>' + ctl + '</label>';
  }
  var COLS = { '1': 'one', '2-1': 'two', '2-2-1': 'two3', '4': 'four', '1-1-2': 'three' };

  function block(b, items, ctx) {
    var h = '', k = b.k;
    switch (b.t) {
      case 'html':
        return b.html.replace(/\{\{name\}\}/g, function () {
          ctx.n++;
          return inp(ctx.sec + '-name' + ctx.n, { cls: 'inline autoname', ph: 'Firefighter name', label: 'Firefighter name' });
        });
      case 'img':
        return '<img class="' + esc(b.style || 'wide') + '" src="' + esc(b.src) + '" alt="' + esc(b.alt || '') + '">';
      case 'fields':
        b.fields.forEach(function (f) { if (f.count) items.push({ t: 'field', k: f.k }); });
        return '<div class="due ' + (COLS[b.cols] || 'four') + '">' + b.fields.map(field).join('') + '</div>';
      case 'log':
        h = '<div class="scroll"><table class="grid log"><thead><tr><th>#</th>' +
          b.cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>';
        for (var i = 0; i < b.rows; i++) {
          var rk = k + '_' + (i + 1);
          h += '<tr' + (i < (b.min || 0) ? ' class="min"' : '') + '><td class="n">' + (i + 1) + '</td><td>' + inp(rk + 'a', { ph: 'Apparatus', label: 'Apparatus' }) +
            '</td><td>' + inp(rk + 'd', { type: 'date', label: 'Date' }) + '</td><td>' + inp(rk + 't', { type: 'time', label: 'Time in' }) +
            '</td><td>' + sig(rk + 's', 'OIC signature, shift ' + (i + 1)) + '</td></tr>';
        }
        return h + '</tbody></table></div>';
      case 'chooser':
        return '<div class="chooser"><span>' + esc(b.question) + '</span><div class="recs two">' +
          b.options.map(function (o) { return '<button type="button" class="rec" data-k="' + esc(k) + '" data-val="' + esc(o.v) + '">' + esc(o.label) + '</button>'; }).join('') +
          '</div><small>Only the chosen section is shown and counted toward progress.</small></div>';
      case 'tasks':
        h = b.band ? '<div class="band">' + esc(b.band) + '</div>' : '';
        if (b.mode === 'dated') {
          h += '<div class="tasks"><div class="th">' + esc(b.head) + '</div>';
          b.items.forEach(function (it) {
            items.push({ t: 'field', k: it.k + 'd', tr: b.track });
            h += '<div class="task" data-done="' + esc(it.k) + 'd"><div class="tt">' + it.html + '</div><div class="att one">' +
              '<label class="fld"><span>Date completed</span>' + inp(it.k + 'd', { type: 'date', label: 'Date completed' }) + '</label>' +
              '<label class="fld"><span>Evaluator</span>' + sig(it.k + 'e', 'Evaluator') + '</label></div></div>';
          });
        } else {
          h += '<div class="tasks"><div class="th">' + esc(b.head) + '<span>Attempt 1</span><span>Attempt 2</span></div>';
          b.items.forEach(function (it) {
            items.push({ t: 'task', k: it.k, tr: b.track });
            var att = function (n) {
              return '<div class="att"><div class="al">Attempt ' + n + '</div>' + tog(it.k + 'a' + n + 'p', 'Attempt ' + n + ' pass or fail') +
                inp(it.k + 'a' + n + 'd', { type: 'date', label: 'Attempt ' + n + ' date' }) + sig(it.k + 'a' + n + 'e', 'Evaluator, attempt ' + n) + '</div>';
            };
            h += '<div class="task" data-task="' + esc(it.k) + '"><div class="tt">' + it.html + '</div>' + att(1) + att(2) + '</div>';
          });
        }
        h += '</div>';
        return b.track ? '<div class="track" data-track="' + esc(b.track) + '">' + h + '</div>' : h;
      case 'ps':
        items.push({ t: 'ps', k: k });
        var chips = b.chips || [['Time limit', b.limit || 'None'], ['Equipment', b.equip || '']];
        h = '<div class="ps" data-ps="' + esc(k) + '"><div class="psmeta">' + b.desc.map(function (d) { return '<div class="desc">' + d + '</div>'; }).join('') +
          '<div class="chips">' + chips.filter(function (c) { return c[1]; }).map(function (c) { return '<span class="chip"><b>' + esc(c[0]) + '</b> ' + esc(c[1]) + '</span>'; }).join('') + '</div></div><div class="evals">';
        [['Test', 't'], ['Retest', 'r']].forEach(function (x) {
          h += '<fieldset class="ev"><legend>' + x[0] + '</legend>' +
            '<label class="fld"><span>Date</span>' + inp(k + x[1] + 'd', { type: 'date', label: x[0] + ' date' }) + '</label>' +
            '<label class="fld"><span>Evaluator name</span>' + inp(k + x[1] + 'n', { ph: 'Name', label: x[0] + ' evaluator name' }) + '</label>' +
            '<label class="fld"><span>Evaluator signature</span>' + sig(k + x[1] + 's', x[0] + ' evaluator signature') + '</label></fieldset>';
        });
        h += '</div><div class="steps"><div class="sh"><span>Task steps</span><span>Score</span><span>Retest</span></div>';
        var n = 0;
        b.steps.forEach(function (s) {
          if (s.t === 'step') { n++; h += '<div class="st' + (s.hl ? ' hl' : '') + '"><div class="stt">' + s.html + '</div>' + tog(k + 's' + n + 't', 'Score') + tog(k + 's' + n + 'r', 'Retest') + '</div>'; }
          else if (s.t === 'info') h += '<div class="st info"><div class="stt">' + s.html + '</div><span></span><span></span></div>';
          else h += '<div class="sub' + (s.t === 'note' ? ' note' : '') + '">' + s.html + '</div>';
        });
        if (!b.noTime) h += '<div class="st tot"><div class="stt">Time</div>' + inp(k + 'tt', { ph: 'm:ss', label: 'Test time' }) + inp(k + 'rt', { ph: 'm:ss', label: 'Retest time' }) + '</div>';
        h += '<div class="st tot pfrow"><div class="stt">Pass / Fail</div>' + tog(k + 'tp', 'Test result') + tog(k + 'rp', 'Retest result') + '</div>' +
          '<div class="auto" data-auto="' + esc(k) + '" data-n="' + n + '"></div></div>';
        if (b.candidateSig) h += '<div class="due two" style="margin-top:12px"><label class="fld"><span>Candidate signature</span>' + sig(k + 'cs', 'Candidate signature') + '</label><label class="fld"><span>Date</span>' + inp(k + 'cd', { type: 'date', label: 'Date' }) + '</label></div>';
        return h + '</div>';
      case 'reviewHead':
        items.push({ t: 'field', k: k + 'o' });
        return '<p class="hint">' + esc(b.intro) + '</p><div class="due two">' +
          '<label class="fld"><span>Officer name</span>' + inp(k + 'o', { ph: 'Officer name', label: 'Officer name' }) + '</label>' +
          '<label class="fld"><span>Review date</span>' + inp(k + 'd', { type: 'date', label: 'Review date' }) + '</label></div>' +
          '<p class="hint">' + esc(b.help) + '</p><div class="scale">' +
          b.scale.map(function (s, i) { return '<span><b>' + (i + 1) + '</b>' + esc(s) + '</span>'; }).join('') + '</div>';
      case 'ratings':
        h = '<div class="ratings">';
        b.items.forEach(function (r) {
          items.push({ t: 'field', k: r.k });
          var opts = '';
          (b.scale || ['1', '2', '3', '4', '5']).forEach(function (v) { opts += '<button type="button" class="rb' + (v.length > 1 ? ' wide' : '') + '" data-k="' + esc(r.k) + '" data-val="' + esc(v) + '" aria-label="' + esc(r.name) + ' ' + esc(v) + '">' + esc(v) + '</button>'; });
          h += '<div class="rate"><div><div class="rn">' + esc(r.name) + '</div><div class="rd">' + esc(r.desc) + '</div></div><div class="rbs" role="group" aria-label="' + esc(r.name) + '">' + opts + '</div></div>';
        });
        return h + '</div>';
      case 'comments':
        items.push({ t: 'field', k: k + 'r' });
        return '<label class="fld block"><span>Officer comments / performance improvement plan</span><textarea class="f" data-k="' + esc(k) + 'c" rows="4"></textarea></label>' +
          '<div class="recs">' + b.options.map(function (o) { return '<button type="button" class="rec" data-k="' + esc(k) + 'r" data-val="' + esc(o) + '">' + esc(o) + '</button>'; }).join('') + '</div>' +
          '<div class="due two"><label class="fld"><span>Officer signature</span>' + sig(k + 's', 'Officer signature') + '</label></div>';
      case 'table':
        return '<div class="scroll"><table class="ref' + (b.widths ? ' fixed' : '') + '">' + (b.widths ? '<colgroup>' + b.widths.map(function (w) { return '<col style="width:' + w + '%">'; }).join('') + '</colgroup>' : '') +
          '<thead><tr>' + b.head.map(function (x) { return '<th>' + esc(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          b.rows.map(function (r) { return '<tr>' + r.map(function (x) { return '<td>' + esc(x) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      case 'checks':
        return '<div class="checks">' + b.items.map(function (it, i) {
          var kk = k + '_' + (i + 1);
          if (b.count) items.push({ t: 'field', k: kk });
          return '<button type="button" class="ck" data-k="' + esc(kk) + '" data-val="1" aria-pressed="false"><i></i><span>' + it + '</span></button>';
        }).join('') + '</div>';
      case 'choice':
        if (b.count) items.push({ t: 'field', k: k });
        return '<div class="choice"><span class="cl">' + esc(b.label) + '</span><div class="opts">' + b.options.map(function (o) {
          return '<button type="button" class="rec opt" data-k="' + esc(k) + '" data-val="' + esc(o) + '">' + esc(o) + '</button>'; }).join('') + '</div></div>';
      case 'grid':
        var hasLabel = b.rows.some(function (r) { return r.label; }) || b.label != null;
        var numl = b.rows.length && b.rows.every(function (r) { return (r.label || '').length <= 3 && !r.sub; }) && b.rows.some(function (r) { return r.label; });
        h = '<div class="gridf' + (numl ? ' numl' : '') + '" style="--cols:' + b.cols.length + '"><div class="gh">' + (hasLabel ? '<span class="gl">' + esc(b.label || '') + '</span>' : '') +
          b.cols.map(function (c) { return '<span>' + esc(c.h) + '</span>'; }).join('') + '</div>';
        b.rows.forEach(function (r, ri) {
          var subs = (r.sub || '').split('|'), li = 0, rk = k + '_' + (ri + 1);
          if (b.count != null) items.push({ t: 'field', k: rk + '_' + b.count });
          h += '<div class="gr' + (hasLabel ? '' : ' nolabel') + '"' + (b.count != null ? ' data-done="' + esc(rk + '_' + b.count) + '"' : '') + '>' + (hasLabel ? '<div class="gl">' + esc(r.label || '') + (r.sub && !b.cols.some(function (c) { return c.type === 'label'; }) ? '<small>' + esc(r.sub) + '</small>' : '') + '</div>' : '');
          b.cols.forEach(function (c, ci) {
            var ck = rk + '_' + ci, lab = c.h + (r.label ? ' – ' + r.label : ''), ctl;
            if (c.type === 'label') ctl = '<span class="glabel">' + esc(subs[li++] || '') + '</span>';
            else if (c.type === 'sig') ctl = sig(ck, lab);
            else if (c.type === 'date') ctl = inp(ck, { type: 'date', label: lab });
            else if (c.type === 'number') ctl = inp(ck, { type: 'number', label: lab });
            else if (c.type === 'check') ctl = '<button type="button" class="ck solo" data-k="' + esc(ck) + '" data-val="1" aria-pressed="false" aria-label="' + esc(lab) + '"><i></i></button>';
            else if (c.type === 'choice') ctl = '<div class="opts sm">' + c.opts.map(function (o) { return '<button type="button" class="rec opt" data-k="' + esc(ck) + '" data-val="' + esc(o) + '">' + esc(o) + '</button>'; }).join('') + '</div>';
            else ctl = inp(ck, { label: lab });
            h += '<div class="gc"><em>' + esc(c.h) + '</em>' + ctl + '</div>';
          });
          h += '</div>';
        });
        return h + '</div>';
      case 'reps':
        h = '<div class="reps"><div class="rh"><span>' + esc(b.head || 'Task') + '</span><span>Req.</span>' + (b.noteHead ? '<span>' + esc(b.noteHead) + '</span>' : '') + '</div>';
        b.items.forEach(function (it) {
          items.push({ t: 'reps', k: it.k, req: it.req });
          h += '<div class="rp" data-reps="' + esc(it.k) + '" data-req="' + it.req + '"><div class="rt"><div>' + it.html + '</div><b class="req">' + it.req + '</b>' +
            (b.noteHead ? '<small class="rn">' + esc(it.note || '') + '</small>' : '') + '</div><div class="rbox">';
          for (var i = 1; i <= it.req; i++) {
            h += '<div class="rcell"><span class="ri">' + i + '</span><button type="button" class="ot" data-k="' + esc(it.k + '_' + i + 'm') + '" data-v="" aria-label="Performance ' + i + ': O call or T training">–</button>' +
              inp(it.k + '_' + i + 'i', { cls: 'ini', ph: 'Init.', label: 'Performance ' + i + ' initials' }) + '</div>';
          }
          h += '</div><div class="rcount" data-rcount="' + esc(it.k) + '"></div></div>';
        });
        return h + '</div>';
      case 'exam':
        return '<div class="exam"><h4>' + esc(b.title) + '</h4><p>' + b.html + '</p><div class="pols">' +
          b.lists.map(function (l) { return '<ul>' + l.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; }).join('') + '</div></div>';
    }
    return '';
  }

  function render(book) {
    var manifest = {}, tabs = '', panels = '';
    book.sections.forEach(function (sec) {
      var ctx = { sec: sec.id, n: 0 }, cardsOut = [];
      manifest[sec.id] = [];
      sec.cards.forEach(function (c) {
        var items = [], body = c.blocks.map(function (b) { return block(b, items, ctx); }).join('');
        var lastSubmit = sec.submit && !sec.cards.some(function (x) { return x.submit; }) && c === sec.cards[sec.cards.length - 1];
        if ((c.submit || lastSubmit) && sec.submit) body += '<div class="submitbox" data-submit="' + esc(sec.id) + '"></div>';
        if (items.length) manifest[sec.id].push({ card: c.id, title: c.title, items: items });
        cardsOut.push({ c: c, body: body });
      });
      var h = '';
      if (sec.banner) {
        h += '<div class="banner" style="background-image:url(\'' + esc(sec.banner) + '\')"><div><span>' + esc(book.title) + '</span><h2>' + esc(sec.label) +
          '</h2><div class="pbar"><i data-bar="' + esc(sec.id) + '"></i></div><small data-pct="' + esc(sec.id) + '"></small></div></div>';
      }
      if (sec.submit) h += '<div class="pstatus" data-pstatus="' + esc(sec.id) + '"></div>';
      if (sec.id !== book.sections[0].id) {
        h += '<nav class="jump">' + cardsOut.map(function (x) { return '<a href="#' + esc(x.c.id) + '" data-card="' + esc(x.c.id) + '">' + esc(x.c.title) + '</a>'; }).join('') + '</nav>';
      }
      cardsOut.forEach(function (x) {
        h += '<section class="card' + (x.c.standard ? ' ps-card' : '') + '" id="' + esc(x.c.id) + '"><header><h2>' + esc(x.c.title) +
          '</h2><span class="status" data-status="' + esc(x.c.id) + '"></span></header>' + x.body + '</section>';
      });
      tabs += '<button type="button" class="tab" data-tab="' + esc(sec.id) + '" role="tab">' + esc(sec.label) + '<em data-tabpct="' + esc(sec.id) + '"></em></button>';
      panels += '<div class="panel" id="panel-' + esc(sec.id) + '" data-panel="' + esc(sec.id) + '" role="tabpanel">' + h + '</div>';
    });
    var summary = book.sections.filter(function (s) { return manifest[s.id].length; }).map(function (s) {
      return '<button type="button" class="sumcard" data-goto="' + esc(s.id) + '"><span>' + esc(s.label) + '</span><em class="chipst" data-chip="' + esc(s.id) +
        '"></em><div class="pbar"><i data-bar="' + esc(s.id) + '"></i></div><small data-pct="' + esc(s.id) + '"></small></button>';
    }).join('');
    return { tabs: tabs, panels: panels, summary: summary, manifest: manifest };
  }

  // Progress: works on a state object and a manifest; shared by the book page.
  function itemCounts(it, state) { return !it.tr || state.emsTrack === it.tr; }
  function has(state, k) { var v = state[k]; return v != null && (typeof v === 'object' ? !!v.img : String(v).trim() !== ''); }
  function itemDone(it, state) {
    if (it.t === 'task') return state[it.k + 'a1p'] === 'P' || state[it.k + 'a2p'] === 'P';
    if (it.t === 'ps') return state[it.k + 'tp'] === 'P' || state[it.k + 'rp'] === 'P';
    if (it.t === 'reps') return repsDone(it.k, it.req, state) >= it.req;
    return has(state, it.k);
  }
  function repsDone(k, req, state) {
    var n = 0;
    for (var i = 1; i <= req; i++) { var m = state[k + '_' + i + 'm']; if ((m === 'O' || m === 'T') && has(state, k + '_' + i + 'i')) n++; }
    return n;
  }
  function progress(manifest, state) {
    var out = {};
    Object.keys(manifest).forEach(function (sid) {
      var done = 0, total = 0, cards = {};
      manifest[sid].forEach(function (c) {
        var d = 0, n = 0;
        c.items.forEach(function (it) { if (!itemCounts(it, state)) return; n++; if (itemDone(it, state)) d++; });
        cards[c.card] = { done: d, total: n }; done += d; total += n;
      });
      out[sid] = { done: done, total: total, cards: cards };
    });
    return out;
  }

  global.TaskBook = { render: render, progress: progress, has: has, esc: esc, repsDone: repsDone };
})(window);
