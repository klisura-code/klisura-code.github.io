# Đorđe Klisura — Academic Website

A clean, fast, single-page academic site (CV / homepage) built as a static site —
**no build step, no dependencies.** Just HTML, CSS, and a little vanilla JavaScript.
Designed to be hosted free on **GitHub Pages**.

## Features

- Sticky sidebar with profile, contact links, and section navigation
- Light / dark mode (remembers your choice, respects OS preference)
- Scroll-spy navigation that highlights the current section
- Fully responsive (collapsible mobile menu)
- All CV content: publications, preprints, education, appointments, awards,
  teaching, presentations, service, grants, credentials, skills, experience, memberships
- Accessible (skip link, semantic markup, keyboard friendly)
- Links to your CV PDF

## File structure

```
.
├── index.html              # all content lives here
├── assets/
│   ├── css/style.css       # styling + theming
│   └── js/main.js          # theme toggle, mobile nav, scroll-spy
├── Curriculum_Vitae.pdf    # linked from the sidebar
├── .nojekyll               # tells GitHub Pages to serve files as-is
└── README.md
```

## Before you publish — fill in a few links

Open `index.html` and update these placeholders:

1. **Google Scholar** — replace `https://scholar.google.com/` with your profile URL.
2. **GitHub** — the link marked `data-edit="github"` (`href="#"`) → your GitHub profile.
3. **LinkedIn** — the link marked `data-edit="linkedin"` (`href="#"`) → your LinkedIn URL.
4. *(Optional)* Add a real photo: drop `assets/img/photo.jpg` in and replace the
   `<div class="avatar">ĐK</div>` block in `index.html` with
   `<img class="avatar" src="assets/img/photo.jpg" alt="Đorđe Klisura" />`
   (the round styling already applies).

## Preview locally

Just open `index.html` in a browser. Or run a tiny local server:

```powershell
# Python (any version 3.x)
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

### Option A — user/organization site (recommended URL: `username.github.io`)

1. Create a repo named **`<your-username>.github.io`** (e.g. `dklisura.github.io`).
2. Push these files to the `main` branch:

   ```powershell
   git init
   git add .
   git commit -m "Academic website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick `main` / `/ (root)`, **Save**.
4. Your site goes live at `https://<your-username>.github.io/` in a minute or two.

### Option B — project site (URL: `username.github.io/repo-name`)

Same as above but use any repo name. The site will be at
`https://<your-username>.github.io/<repo-name>/`.

## Custom domain (optional)

In **Settings → Pages → Custom domain**, enter e.g. `klisura.com`, then add the
DNS records GitHub shows you. A `CNAME` file will be added to the repo automatically.

---

Content sourced from your CV. Update `index.html` directly to keep it current.
