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
- 🔎 Localized SEO metadata, Open Graph, Twitter card and JSON-LD
- 🌓 Nuxt Color Mode support
- 🎨 Premium dark visual system with calm interactions
- 🗺 Sitemap, robots.txt, favicon and PWA manifest assets

## 📦 Stack

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS v4
- SCSS-ready styling conventions
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

The homepage should describe `alixan.kz` as the main ecosystem site, not only as a resume page. Keep Open Graph, Twitter card, sitemap and JSON-LD aligned with the public domain:

```txt
https://alixan.kz
```

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
    common/
    layout/
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
  og-image.png
  robots.txt
  site.webmanifest
```

## 🧭 Ecosystem Links

- Main site: <https://alixan.kz>
- Alixan UI gateway: <https://ui.alixan.kz>
- Alixan UI Nuxt docs: <https://nuxt.ui.alixan.kz>
- GitHub: <https://github.com/alixan-engineer/alixan>

## 📄 License

Private project.
