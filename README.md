# Alixan

Main website of the Alixan ecosystem: personal brand, portfolio, CV and product gateway for Alikhan Zhumazhanov.

The site introduces who Alikhan is, what he builds, which products are active, and where visitors should go next. It is built for HR teams, companies, developers, partners and people discovering the Alixan ecosystem.

<p>
  <a href="https://alixan.kz/">🌐 WEBSITE</a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://ui.alixan.kz/">🧩 ALIXAN UI</a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://nuxt.ui.alixan.kz/">📖 UI DOCS</a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/alixan-engineer/alixan">⭐ GITHUB</a>
</p>

## ✨ Features

- 🎯 Personal ecosystem hub for `Alixan` and `Alikhan Zhumazhanov`
- 🧑‍💻 Clear profile for HR, companies, developers and partners
- 📄 Resume/CV download from `public/CV-Alikhan.pdf`
- 🧩 Visible product navigation for Alixan UI and other projects
- 🌍 Localized content with English, Russian and Kazakh locales
- 🔎 Shared SEO metadata, Open Graph and Twitter card configuration
- 🌓 Nuxt Color Mode support
- 🎨 Premium dark visual system with calm interactions
- 📱 Viewport-aware Select and dropdown menus that flip and constrain themselves on small screens
- 🖼 Optimized WebP project, startup and social-preview assets
- 🗺 Sitemap, robots.txt, favicon and PWA manifest assets

## 📦 Stack

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS v4
- Sass for scoped component styles where needed
- `@nuxtjs/i18n`
- `@nuxtjs/sitemap`
- `@nuxtjs/color-mode`
- `@nuxtjs/google-fonts`
- `@lucide/vue`

## 🌍 i18n

All visible UI copy lives in locale files:

```txt
i18n/locales/en.json
i18n/locales/ru.json
i18n/locales/kk.json
```

When changing public text, update all three locales together. Internal links should use Nuxt i18n routing, and SEO values should stay localized through translation keys.

## 🔎 SEO

Shared site metadata lives in:

```txt
app/config/site/site.ts
app/config/site/favicon.ts
app/composables/usePageMeta.ts
```

The homepage should describe `alixan.kz` as the main ecosystem site, not only as a resume page. Keep Open Graph, Twitter card and sitemap metadata aligned with the public domain:

```txt
https://alixan.kz
```

The shared Open Graph and Twitter preview is `public/og-image.png` (1200×630). Its public URL is configured through `siteConfig.ogImage`; update both the asset and config when changing its name or format.

## 📄 CV

The public resume PDF is stored at:

```txt
public/CV-Alikhan.pdf
```

Resume buttons and links should point to this file unless the PDF filename is intentionally changed everywhere.

## 📁 Project Structure

```txt
app/
  app.vue
  assets/css/tailwind.css
  components/
    app/
    ui/
  composables/
  config/site/
  pages/
  plugins/
  types/
  utils/
i18n/
  locales/
public/
  CV-Alikhan.pdf
  favicon.ico
  icons/
  img/
    projects/
    startups/
  og-image.png
  robots.txt
  site.webmanifest
```

Raster images are stored as compact WebP files where conversion is beneficial. Keep project/startup cards near or below 20 KB and hero artwork below 30 KB; use quality 85 as the default upper target. Current hero artwork is 900×400 for desktop and 480×600 for mobile. Small SVG assets can remain vector-based.

## 🛠 Development

```bash
npm install
npm run dev
```

The development server runs on <http://localhost:9000>.

Production commands:

```bash
npm run build
npm run generate
npm run preview
```

## 🧭 Ecosystem Links

- Main site: <https://alixan.kz>
- Alixan UI gateway: <https://ui.alixan.kz>
- Alixan UI Nuxt docs: <https://nuxt.ui.alixan.kz>
- GitHub: <https://github.com/alixan-engineer/alixan>

## 📄 License

Private project.
