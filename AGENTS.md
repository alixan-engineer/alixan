# AGENTS.md

Краткий контекст для AI-агентов, работающих с `alixan` (`alixan.kz`).

## Проект

`alixan.kz` — главный сайт личной экосистемы Alixan. Его открывают:

- люди, которые заинтересовались автором и продуктами;
- HR и компании;
- разработчики;
- потенциальные партнеры и пользователи продуктов.

Сайт должен быстро объяснять кто такой Alikhan Zhumazhanov, чем он занимается, какие продукты строит, и куда перейти дальше. Это не просто резюме и не только портфолио: это главный хаб экосистемы.

Обязательные направления:

- CV / Resume PDF;
- About / короткое описание автора;
- Products / продукты и эксперименты;
- переход на Alixan UI: `https://ui.alixan.kz`;
- ссылки на социальные и профессиональные профили.

## UX и тон

- Сайт должен быть красивым, понятным, стабильным и доверительным.
- Первый экран обязан сразу показывать личный бренд `Alixan` / `Alikhan Zhumazhanov`, роль и понятный CTA.
- Для HR важны ясность, опыт, stack, CV PDF и контакты.
- Для разработчиков важны продукты, open-source, UI-система и технический уровень.
- Для случайных посетителей важна простая навигация по экосистеме.
- Не делай тяжелый маркетинговый лендинг с лишними секциями. Каждая секция должна помогать понять автора, опыт или продукты.
- Не прячь продукты глубоко: `Alixan UI` и другие продукты должны быть заметны.
- Текст должен помещаться в контейнеры на mobile и desktop, без наложений и горизонтального скролла.

## Реальная структура

- `app/app.vue` — глобальная оболочка, loader, SEO locale head, глобальные overlays.
- `app/pages/index.vue` — главная страница, SEO meta и JSON-LD.
- `app/components/layout/*` — header, footer, language switcher.
- `app/components/sections/*` — секции главной страницы.
- `app/components/ui/*` — локальные UI primitives: `AppButton`, `AppBadge`, `AppCard`.
- `app/components/CustomCursor.vue`, `MouseGlow.vue`, `SectionReveal.vue` — интерактивные/визуальные helpers.
- `app/composables/useRevealOnScroll.ts` — reveal-on-scroll logic.
- `app/assets/styles/main.scss`, `variables.scss`, `mixins.scss` — глобальные стили.
- `i18n/locales/en.json`, `ru.json`, `kk.json` — все отображаемые тексты.
- `public/*` — favicon, manifest, OG image, CV PDF и статические файлы.

## Стек и стиль кода

- Nuxt 4 / Vue 3 / TypeScript.
- Vue SFC: `<script setup lang="ts">`.
- Nuxt i18n: `@nuxtjs/i18n`.
- Sitemap: `@nuxtjs/sitemap`.
- SCSS для глобальных стилей.
- Auto-imported components включены из `~/components` без path prefix.
- Dev server: `9000`.

Не добавляй новые зависимости без явного запроса. Сначала используй то, что уже есть в проекте.

## Компоненты и дизайн

- Переиспользуй `AppButton`, `AppBadge`, `AppCard`, layout и section patterns вместо создания новых похожих компонентов.
- Если нужен новый primitive, держи API маленьким и typed.
- Стиль должен оставаться премиальным, темным, чистым и продуктовым.
- Избегай случайных decorative элементов, которые не улучшают восприятие.
- Анимации должны быть спокойными и не ломать доступность.
- Ссылки на внешние ресурсы должны открываться безопасно: `target="_blank"` и `rel="noreferrer"`, если это не download/mail/hash.

Можно брать идеи и отдельные компоненты из `../alixan-ui-nuxt`, особенно кнопки, SEO, i18n-подход, Geist/font conventions и иконки. При переносе адаптируй их под текущий SCSS/Nuxt i18n проект, а не копируй registry/documentation инфраструктуру.

## i18n правила

i18n — обязательная часть сайта.

- Все отображаемые тексты хранятся в `i18n/locales/en.json`, `ru.json`, `kk.json`.
- Не хардкодь UI-текст в Vue template/script, если это отображаемый контент.
- При добавлении, удалении или переименовании ключей обновляй все три локали.
- Для внутренних маршрутов используй `useLocalePath()`.
- Для SEO используй `t(...)` / computed значения, чтобы title/description соответствовали текущей локали.
- Следи, чтобы `useLocaleHead()` в `app/app.vue` продолжал отдавать корректные `htmlAttrs`, `link`, `meta`.

## SEO и публичные данные

SEO должно отражать главный сайт экосистемы, а не только CV.

Минимум на главной:

- localized title/description;
- Open Graph title/description/type/site name/url/image;
- Twitter card;
- `robots`;
- JSON-LD для `WebSite`/`Person`, если данные актуальны.

Если меняешь домены:

- главный сайт: `https://alixan.kz`;
- UI gateway: `https://ui.alixan.kz`;
- Nuxt UI docs/library: `https://nuxt.ui.alixan.kz`.

Не добавляй неподтвержденные достижения, компании, цифры или ссылки. Если данных нет в проекте или запросе, оставь текст нейтральным.

## CV PDF

- Кнопка CV/Resume должна вести на реальный PDF из `public`.
- Если меняешь имя файла, обнови все ссылки в header, hero/contact и локали при необходимости.
- Для download-ссылок не ставь `target="_blank"` без причины.

## Команды

- `npm run dev` — dev server на `9000`.
- `npm run build` — Nuxt build.
- `npm run generate` — static generation.
- `npm run preview` — preview generated/build output.

## Проверки перед ответом

Минимум:

```bash
python3 -m json.tool i18n/locales/en.json >/dev/null
python3 -m json.tool i18n/locales/ru.json >/dev/null
python3 -m json.tool i18n/locales/kk.json >/dev/null
npm run build
```

Если менялись layout/visual части, желательно проверить страницу в браузере или хотя бы запустить dev/build и убедиться, что нет Vue/Nuxt ошибок.

Если build невозможно запустить из-за окружения, явно скажи это в финальном ответе.

## Важные ограничения

- Не трогай unrelated dirty changes.
- Не используй `git reset --hard`, `git checkout --` и другие destructive команды без явного запроса.
- Для ручных правок используй `apply_patch`.
- Не ломай текущую i18n/sitemap/SEO конфигурацию.
- Держи изменения сфокусированными на главном сайте и экосистемной навигации.
