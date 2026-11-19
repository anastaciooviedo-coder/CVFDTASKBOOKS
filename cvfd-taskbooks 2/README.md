# CVFD Task Books – setup guide

This folder is a small web app for the CVFD Training Division:

- **Task book** (`/`) – members open their assigned book with a link or access code, fill it in on a phone, iPad or computer, sign with a finger or Apple Pencil, and submit each phase. Everything saves to the Training Division automatically and works offline until they reconnect.
- **Hub** (`/hub.html`) – the Training Division assigns books, sees every member's progress live, approves or returns submitted phases, opens and prints any book, and downloads backups.

No Claude account is needed by anyone. It runs on your Netlify account.

---

## 1. Put the files on GitHub (one time, about 5 minutes)

Netlify's drag-and-drop deploy can't run the small server code this app needs to save books, so the files go on GitHub and Netlify picks them up from there.

1. Sign in at github.com (a free account is fine).
2. Click **+ → New repository**. Name it `cvfd-taskbooks`, choose **Private**, and click **Create repository**.
3. On the new repository's page, click **uploading an existing file**.
4. Open this folder on your computer, select **everything inside it** (`netlify.toml`, `package.json`, `README.md`, `BOOK-FORMAT.md`, and the `netlify`, `server` and `public` folders), and drag it onto the GitHub page. Use Chrome or Edge on a computer; they upload folders correctly.
5. Click **Commit changes**.

## 2. Connect it to Netlify (one time)

1. In Netlify, click **Add new project → Import an existing project → GitHub**, and allow Netlify to see the `cvfd-taskbooks` repository.
2. Pick the repository. Leave the build settings as they are (they come from `netlify.toml`) and click **Deploy**.
3. Set the hub PIN: go to **Project configuration → Environment variables → Add a variable**.
   - Key: `ADMIN_PIN`
   - Value: a PIN only you know, **at least 6 characters** (8 or more is better). Anyone with this PIN can assign books, so don't share it.
4. Go to **Deploys → Trigger deploy → Deploy project** so the PIN takes effect.
5. Optional: under **Domain management**, rename the site to something like `cvfd-taskbooks.netlify.app`.

## 3. Use it

- Hub: `https://YOUR-SITE.netlify.app/hub.html` → enter the PIN (leave “Remember this device” checked and it won’t ask again on that phone or computer; **Sign out** makes it forget) → **+ Assign a book** → pick the member and the book → **Email it** or **Copy link**.
- Members open the link. On an iPhone or iPad, have them tap **Share → Add to Home Screen** so it opens like an app.
- Officers sign tasks on the member's device (finger or Apple Pencil).
- When a phase is done, the member taps **Submit Phase N**. It appears under **Waiting for your review** in the hub. **Approve** keeps it locked; **Return** unlocks it with your note.
- To print or save a book as a PDF: open it from the hub (**Open**) and tap **Print / PDF**. On an iPad, choose Print, then pinch out on the preview and Share to save as a PDF.
- **Backup** in the hub downloads every book (entries and signatures) as one file. Do this regularly, and print or PDF each completed book for the personnel file.

## Adding more task books

The task book library is kept on the server side, not as public files, so only the hub (with your PIN) and a member opening their own assigned book can read it.

```
server/books/library.mjs                          ← the list of books in the library
server/books/probationary-phase-book.mjs          ← Probationary Phase Book
server/books/eo-fast-track-packet.mjs             ← E/O Fast Track Packet
server/books/lieutenant-qualification-task-book.mjs  ← Lieutenant Qualification & Task Book
server/books/lieutenant-mini-academy-workbook.mjs ← Lt. Fast Track Workbook (Mini Academy edition)
public/books/<book>/                              ← each book's pictures (logos, diagrams, charts)
```

The library starts with four books. Word versions of each are made from these same files, so the web book and the Word book always match.

To add a book:

1. Upload the new book file (for example `engine-operator-task-book.mjs`) into `server/books/` on GitHub (**Add file → Upload files**), and its picture folder, if it has one, into `public/books/`.
2. Edit `server/books/library.mjs` on GitHub and add two lines, following the one that is there:
   ```js
   import probationaryPhaseBook from './probationary-phase-book.mjs';
   import engineOperatorTaskBook from './engine-operator-task-book.mjs';

   export default [
     probationaryPhaseBook,
     engineOperatorTaskBook,
   ];
   ```
3. Commit. Netlify updates the site in about a minute, and the new book appears in the hub's **Task book** list.

The book file format is described in `BOOK-FORMAT.md`. The easiest way to get one is to send the Word or PDF version of the task book to Claude and ask for it to be converted.

**Changing a book that members are already using:** every box in a book has an id (`"k"` in the file). Entries are saved against those ids, so keep the ids of existing boxes the same and only add new ones. If a book changes a lot, add it as a new book (new id) and keep the old one for members who already started.

## Who can see and do what

- **You (hub PIN):** see the library and every member, assign books, approve/return phases, archive, delete, back up. Assigning is only possible with the PIN, and only books in the library can be assigned.
- **A member (access code):** sees and fills in only the one book assigned to them. They can't see the library, other members, or the hub.
- **Officers:** sign on the member's device; they don't need the PIN.
- **Guessing protection:** after 6 wrong PINs or 6 wrong access codes from one connection in 15 minutes, that connection is blocked for 15 minutes.
- **Your accounts:** keep the GitHub repository **private** and your Netlify and GitHub logins to yourself; whoever controls those controls the app. Change the PIN any time in Netlify (Environment variables → `ADMIN_PIN`, then redeploy).

## Good to know

- **Access codes** are the key to a member's book: anyone with the code can open and edit it. Members should keep theirs private. You can archive (read-only) or delete a book from the hub's **⋯** menu.
- **Pictures** in `public/books/` (logos, photos) are ordinary web files; don't put anything private in that folder.
- **Where the data lives:** in your Netlify account's Blobs storage for this site (Netlify UI: **Blobs**). Deleting the Netlify site deletes the books, so keep backups.
- **Offline:** if a member loses signal, entries stay on their device and send automatically when they reconnect. On iPhone/iPad, keeping the book on the Home Screen prevents Safari from clearing that saved data.
- **Two devices at once:** if the same book is edited on two devices, both sets of changes are kept.
- **Locked phases:** once submitted, a phase can't be changed until you return or reopen it in the hub.
