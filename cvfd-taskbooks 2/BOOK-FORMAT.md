# Task book file format (`cvfd-taskbook/1`)

A task book is one file in `server/books/`, named after its id (`engine-operator-task-book.mjs`), and listed in `server/books/library.mjs`. The file is `export default` followed by the book written as JSON:

```js
export default {
  "format": "cvfd-taskbook/1",
  "id": "engine-operator-task-book",
  "title": "Engine Operator Task Book",
  "org": "Community Volunteer Fire Department",
  "description": "One sentence shown in the hub when assigning.",
  "version": "2026-11",
  "nameKey": "recruit",
  "sections": [ ... ]
};
```

Pictures go in `public/books/<id>/` and are referred to as `books/<id>/picture.jpg`.

## Sections

Sections become the tabs across the top (Overview, Phase 1, Phase 2…).

```json
{ "id": "p1", "label": "Phase 1", "banner": "books/engine-operator-task-book/banner1.jpg", "submit": true, "cards": [ ... ] }
```

- `id`: short letters/numbers only. **Every box id inside the section must start with this id and a dash** (`p1-…`). That is how a submitted phase is locked.
- `submit: true`: the section can be submitted and reviewed in the hub. Leave it off for an Overview section.
- `banner`: optional picture at the top of the section.

## Cards

Each card is one titled block on the page (a task list, a performance standard, a review…).

```json
{ "id": "p1-c3", "title": "PS #01 – Turnout Evolution", "standard": true, "submit": false, "blocks": [ ... ] }
```

- `standard: true` starts the card on a new page when printing.
- `submit: true` on the section's last card puts the **Submit** button there.

## Blocks

Every box that stores an answer has a `"k"` id. Ids must be unique in the book and must never change once members have started.

| `t` | What it shows | Counts toward progress |
|---|---|---|
| `html` | Text, headings, lists. `{{name}}` becomes a name box. | – |
| `img` | Picture: `src`, `alt`, `style` = `cover`, `seal`, `wide` or `sigimg` | – |
| `fields` | A row of boxes. `cols` = `1`, `2-1`, `2-2-1`, `4`, `1-1-2`. Each field: `k`, `label`, `type` = `text`, `date`, `sig` (draw-to-sign), `name`; `"count": true` makes it count | Fields with `count` |
| `log` | Shift log table: `k`, `rows`, `min` (shaded rows), `cols` | – |
| `chooser` | Pick one track, e.g. EMS / Non-EMS: `k`, `question`, `options[{v,label}]` | – |
| `tasks` | Task list. `mode: "attempts"` = P/F + date + evaluator signature for Attempt 1 and 2; `mode: "dated"` = date + evaluator signature. `head`, `band` (red banner), `track` (matches a chooser option), `items[{k, html}]` | Each task |
| `ps` | Performance standard: `k`, `desc[]`, `limit`, `equip`, `steps[{t:"step"\|"sub"\|"note", html}]`. Test and retest date/name/signature, P/F per step, times and overall pass/fail are built in | Passed test or retest |
| `reviewHead` | Officer name/date and rating scale: `k`, `intro`, `help`, `scale[5]` | Officer name |
| `ratings` | 1–5 ratings: `items[{k, name, desc}]` | Each rating |
| `comments` | Comments, recommendation buttons and officer signature: `k`, `options[]` | Recommendation |
| `exam` | Written exam information: `title`, `html`, `lists[[...]]` | – |
| `table` | Read-only reference table: `head[]`, `rows[[...]]`, optional `widths[]` (percent) | – |
| `checks` | Checkbox list: `k`, `items[]` (html); `"count": true` makes each box count | Each box, if `count` |
| `choice` | Pick one: `k`, `label`, `options[]`; `"count": true` to count it | If `count` |
| `grid` | Fill-in table: `k`, `label` (first column heading), `rows` (list of `{label, sub}`), `cols[{h, type}]` with type `text`, `date`, `sig`, `number`, `check`, `choice` (+`opts`), or `label` (shows the row's `sub`; several label columns split `sub` on `|`). `count` = index of the column that marks a row done | Each row, if `count` |
| `reps` | Repeat-count task record: `head`, `noteHead` (optional extra column), `items[{k, html, req, note}]`. Each performance is marked O (call) or T (training) and initialed | Each task once `req` performances are marked and initialed |

`ps` also accepts `chips[[label, value]]` (shown instead of time limit/equipment), `noTime: true`, `candidateSig: true`, and step types `info` (unscored line) and `hl: true` on a step (highlighted key step). `ratings` accepts `scale` (for example `["1","2","3","4","N/O"]`).

Look at `server/books/probationary-phase-book.mjs` for a full working example.
