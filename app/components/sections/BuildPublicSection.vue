<script setup lang="ts">
type SocialItem = {
  key: string
  label: string
  href: string
}

const { t } = useI18n()

const socialKeys = ['tiktok', 'instagram', 'youtube', 'telegram', 'github', 'linkedin'] as const
const socialLinks: Record<(typeof socialKeys)[number], string> = {
  tiktok: 'https://www.tiktok.com/@alixan.engineer',
  instagram: 'https://www.instagram.com/alixan.engineer',
  youtube: 'https://www.youtube.com/@alixan.engineer',
  telegram: 'https://t.me/alixan_engineer',
  github: 'https://github.com/alixan-engineer',
  linkedin: 'https://www.linkedin.com/in/alikhan-zhumazhanov-a25859409/',
}

const socialItems = computed<SocialItem[]>(() => {
  return socialKeys.map((key) => ({
    key,
    label: t(`buildPublic.socials.${key}`),
    href: socialLinks[key],
  }))
})
</script>

<template>
  <section id="build-public" class="section-block">
    <div class="container">
      <SectionReveal>
        <AppCard class="build-public-panel">
          <div class="section-heading section-heading--compact">
            <span class="section-heading__eyebrow">{{ t('buildPublic.eyebrow') }}</span>
            <h2>{{ t('buildPublic.title') }}</h2>
            <p>{{ t('buildPublic.description') }}</p>
          </div>

          <div class="build-public-panel__links">
            <a v-for="item in socialItems" :key="item.key" :href="item.href" target="_blank" rel="noreferrer">
              {{ item.label }}
            </a>
          </div>
        </AppCard>
      </SectionReveal>
    </div>
  </section>
</template>
