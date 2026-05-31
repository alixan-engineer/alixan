<script setup lang="ts">
type ProductItem = {
  key: string
  label: string
  title: string
  description: string
  stack: string[]
  glow: string
}

const { t } = useI18n()

const productKeys = ['takta', 'ui', 'wedding', 'freelance'] as const
const glows: Record<(typeof productKeys)[number], string> = {
  takta: 'rgba(70, 204, 166, 0.3)',
  ui: 'rgba(102, 126, 234, 0.3)',
  wedding: 'rgba(131, 101, 255, 0.28)',
  freelance: 'rgba(56, 189, 248, 0.28)',
}

const products = computed<ProductItem[]>(() =>
  productKeys.map((key) => ({
    key,
    label: t(`products.items.${key}.label`),
    title: t(`products.items.${key}.title`),
    description: t(`products.items.${key}.description`),
    stack: t(`products.items.${key}.stack`).split(', '),
    glow: glows[key],
  })),
)
</script>

<template>
  <section id="projects" class="section-block">
    <div class="container">
      <SectionReveal>
        <div class="section-heading">
          <span class="section-heading__eyebrow">{{ t('products.eyebrow') }}</span>
          <h2>{{ t('products.title') }}</h2>
          <p>{{ t('products.description') }}</p>
        </div>
      </SectionReveal>

      <div class="products-grid">
        <SectionReveal v-for="product in products" :key="product.key">
          <AppCard class="product-card">
            <div class="product-card__preview" :style="{ '--product-glow': product.glow }">
              <span>{{ product.label }}</span>
            </div>
            <div class="product-card__body">
              <div>
                <h3>{{ product.title }}</h3>
                <p>{{ product.description }}</p>
              </div>
              <div class="product-card__stack">
                <AppBadge v-for="item in product.stack" :key="item">{{ item }}</AppBadge>
              </div>
            </div>
          </AppCard>
        </SectionReveal>
      </div>
    </div>
  </section>
</template>
