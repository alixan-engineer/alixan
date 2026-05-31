<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const requestUrl = useRequestURL()

const siteUrl = 'https://alixan.kz'
const siteOrigin = import.meta.dev ? requestUrl.origin : siteUrl
const currentUrl = computed(() => `${siteOrigin}${route.path === '/' ? '/' : route.path}`)
const ogImageUrl = `${siteOrigin}/og-image.png`

useSeoMeta({
  title: () => t('seo.title'),
  ogTitle: () => t('seo.title'),
  description: () => t('seo.description'),
  ogDescription: () => t('seo.description'),
  ogType: 'website',
  ogSiteName: 'Alixan',
  ogUrl: () => currentUrl.value,
  ogImage: ogImageUrl,
  ogImageAlt: () => t('seo.imageAlt'),
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.title'),
  twitterDescription: () => t('seo.description'),
  twitterImage: ogImageUrl,
  twitterImageAlt: () => t('seo.imageAlt'),
  twitterCreator: '@alixan_engineer',
  robots: 'index, follow, max-image-preview:large',
  themeColor: '#050505',
})

useHead(() => ({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Alixan',
        url: siteUrl,
        description: t('seo.description'),
        inLanguage: ['en-US', 'ru-KZ', 'kk-KZ'],
        publisher: {
          '@type': 'Person',
          name: 'Alikhan Zhumazhanov',
          url: siteUrl,
          sameAs: [
            'https://github.com/alixan-engineer',
            'https://www.linkedin.com/in/alikhan-zhumazhanov-a25859409/',
            'https://www.youtube.com/@alixan.engineer',
            'https://www.instagram.com/alixan.engineer',
            'https://www.tiktok.com/@alixan.engineer',
            'https://t.me/alixan_engineer',
          ],
        },
      }),
    },
  ],
}))
</script>

<template>
  <main>
    <AppHeader />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProductsSection />
    <UiSystemSection />
    <ContactSection />
    <AppFooter />
  </main>
</template>
