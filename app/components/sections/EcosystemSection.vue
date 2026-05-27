<script setup lang="ts">
type EcosystemItem = {
  key: string
  title: string
  description: string
  cta: string
  href: string
}

const { t } = useI18n()

const ecosystemKeys = ['portfolio', 'ui', 'products', 'public'] as const
const hrefMap: Record<(typeof ecosystemKeys)[number], string> = {
  portfolio: 'https://portfolio.alixan.kz',
  ui: 'https://ui.alixan.kz',
  products: '#products',
  public: '#build-public',
}

const items = computed<EcosystemItem[]>(() =>
  ecosystemKeys.map((key) => ({
    key,
    title: t(`ecosystem.items.${key}.title`),
    description: t(`ecosystem.items.${key}.description`),
    cta: t(`ecosystem.items.${key}.cta`),
    href: hrefMap[key],
  })),
)
</script>

<template>
  <section id="ecosystem" class="section-block">
    <div class="container">
      <SectionReveal>
        <div class="section-heading">
          <span class="section-heading__eyebrow">{{ t('ecosystem.eyebrow') }}</span>
          <h2>{{ t('ecosystem.title') }}</h2>
          <p>{{ t('ecosystem.description') }}</p>
        </div>
      </SectionReveal>

      <div class="ecosystem-grid">
        <SectionReveal v-for="item in items" :key="item.key">
          <AppCard class="ecosystem-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <AppButton :href="item.href" variant="ghost">{{ item.cta }}</AppButton>
          </AppCard>
        </SectionReveal>
      </div>
    </div>
  </section>
</template>
