# myendmess.github.io — project context

Personal portfolio site for **Mohamed Boujnane** (IT & AI Consultant, FinTech/data).
Fully **static**, dark-by-default, served straight from **GitHub Pages** with
**no build step**. Live at https://myendmess.github.io.

## Stack & structure
- **Vanilla HTML/CSS/JS — no frameworks, no dependencies, no bundler.** Edit the
  files directly; what's in the repo is what ships.
- `index.html` — single-page site: hero, stack, experience timeline, projects, contact.
- `style/style.css` — dark glassmorphism / amber-orange neon theme, CSS custom
  properties, responsive grid (mobile → desktop), `prefers-reduced-motion` fallbacks.
- `js/main.js` — mobile nav, scroll-reveal via `IntersectionObserver`, `<canvas>`
  constellation background, and **i18n** (language switch).
- `img/` — assets (e.g. `qrcode.png` PayPal donation QR).
- Inline SVG favicon (data URI) and Google Fonts (Inter, JetBrains Mono, Noto Sans JP).

## Internationalization
Multi-language via `data-i18n` attributes in HTML + a translation table in
`js/main.js`. Languages: **EN / IT / FR / JA** (switcher in the nav). When adding
or changing visible copy, update the `data-i18n` key for **all four** languages,
not just English.

## Run / preview locally
No build. Either open `index.html` directly, or serve statically, e.g.:
```bash
python -m http.server 8000   # then open http://localhost:8000
```

## Deploy
Push to the default branch → GitHub Pages serves it automatically. No CI, no build
artifacts. The repo name `myendmess.github.io` is what makes it the user/org Pages site.

## Conventions
- Keep it **dependency-free and build-free** — don't introduce npm, a framework, or a
  bundler unless explicitly asked. That zero-build property is a feature.
- Preserve accessibility: skip-link, `aria-*`, and `prefers-reduced-motion` paths.
- Keep performance lean (inline favicon, font `display=swap`, no heavy libs).
