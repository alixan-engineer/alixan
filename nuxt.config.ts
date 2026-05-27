// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap'],
  site: {
    url: 'https://alixan.kz',
    name: 'Alixan',
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/styles/main.scss'],
  sitemap: {
    zeroRuntime: true,
  },
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'theme-color',
          content: '#050505',
        },
        {
          name: 'color-scheme',
          content: 'dark',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'Alixan',
        },
        {
          name: 'application-name',
          content: 'Alixan',
        },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Syncopate:wght@400;700&display=swap',
        },
      ],
    },
  },
  i18n: {
    baseUrl: 'https://alixan.kz',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      redirectOn: 'root',
      useCookie: true,
      alwaysRedirect: false,
      cookieKey: 'alixan_locale',
    },
    locales: [
      {
        code: 'en',
        name: 'EN',
        language: 'en-US',
        file: 'en.json',
        dir: 'ltr',
        isCatchallLocale: true,
      },
      {
        code: 'ru',
        name: 'RU',
        language: 'ru-KZ',
        file: 'ru.json',
        dir: 'ltr',
      },
      {
        code: 'kk',
        name: 'KK',
        language: 'kk-KZ',
        file: 'kk.json',
        dir: 'ltr',
      },
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/ru': { prerender: true },
    '/kk': { prerender: true },
  },
  nitro: {
    prerender: {
      concurrency: 1,
    },
  },
})
