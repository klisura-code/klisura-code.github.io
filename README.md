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

