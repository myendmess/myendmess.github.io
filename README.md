# Mohamed Boujnane — Portfolio

Personal portfolio site for **Mohamed Boujnane** — IT & AI Consultant working where
technology meets finance (FinTech, data engineering, AI automation). Dark by default,
fast, and fully static — prerendered at build time and served from GitHub Pages.

🔗 **Live:** [myendmess.github.io](https://myendmess.github.io)

## 🛠 Technologies Used

- **[SvelteKit 2](https://kit.svelte.dev) + [Svelte 5](https://svelte.dev)** – component
  architecture with runes (`$state`, `$effect`, `$props`) for reactivity, built as a
  **100% static site** via `@sveltejs/adapter-static` (every route prerendered, no SSR
  runtime, no backend).
- **[Tailwind CSS v4](https://tailwindcss.com)** – utility-first styling on top of a
  semantic design-token system (`page` / `surface` / `fg` / `accent`) defined as CSS
  custom properties, giving a **dark default theme with a light-mode toggle**.
- **Internationalization** – full **EN / IT / FR / JA** translations in
  [`src/lib/i18n.svelte.js`](src/lib/i18n.svelte.js), switched client-side with a
  Svelte 5 rune store and persisted in `localStorage`. English is prerendered for SEO.
- **Vanilla `<canvas>` constellation** background, `IntersectionObserver` scroll-reveal,
  and glassmorphism/neon design language — carried over from v1, now as Svelte actions
  and effects with `prefers-reduced-motion` fallbacks.
- **Google Fonts** – Inter (sans), JetBrains Mono (mono), Noto Sans JP (Japanese).
- **Security hardening** – escaped JSON-LD structured data, HTML-escaped i18n fallbacks,
  strict referrer policy, and a clean `npm audit`.

## 🧭 Sections

- **Hero** – introduction, core stack chips, and a terminal mockup of a Vela market scan.
- **Stack** – data & BI, AI/ML & cloud, FinTech & market data, ERP, and DevOps tooling.
- **Experience** – career timeline, education, languages, and certification cards
  (Google / Coursera credentials with verified badge links).
- **Projects** – algorithmic market scanners, AI/audio work, GitHub automation, and data pipelines.
- **Contact** – email, GitHub, and LinkedIn.

## 🚀 Development

```console
npm install     # once
npm run dev     # dev server at http://localhost:5173
npm run build   # static build → build/
npm run preview # serve the production build at http://localhost:4173
```

## 📦 Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `build/` to **GitHub Pages** (source: GitHub Actions).
The workflow can also be run manually against any branch from the Actions tab.

## 🤝 Open Source & Donations

This project is open source — feel free to explore the code, reuse it, or contribute.

If you'd like to support my work, you can make a small, voluntary donation via PayPal.
Every contribution, big or small, is greatly appreciated.

<p align="center">
  <a href="https://paypal.me/myendingmess?country.x=IT&locale.x=en_US" target="_blank">
    <img src="img/qrcode.png" alt="Donate on PayPal" width="200">
  </a>
</p>

## 📁 Project Structure

```console
├── src
│   ├── routes
│   │   ├── +layout.svelte    # Nav (language switcher, theme toggle), footer/contact, constellation
│   │   ├── +layout.js        # prerender = true (static build)
│   │   └── +page.svelte      # Landing page: hero, stack, experience, projects
│   ├── lib
│   │   ├── i18n.svelte.js    # EN/IT/FR/JA translation table + rune store
│   │   └── reveal.js         # IntersectionObserver scroll-reveal action
│   ├── app.css               # Tailwind v4 + design tokens (dark/light themes)
│   └── app.html              # Shell: fonts, favicon, pre-paint theme script
├── static                    # favicon.svg, .nojekyll
├── .github/workflows
│   └── deploy.yml            # Build + deploy to GitHub Pages on push to main
├── svelte.config.js          # @sveltejs/adapter-static
├── vite.config.js            # SvelteKit + Tailwind plugins
├── index.html, style/, js/   # Legacy v1 vanilla site (no longer served)
├── img/qrcode.png            # PayPal donation QR
├── LICENSE
└── README.md
```
