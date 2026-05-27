<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="container hero-section__grid">
      <SectionReveal>
        <div class="hero-copy">
          <AppBadge>{{ t('hero.badge') }}</AppBadge>
          <h1>{{ t('hero.title') }}</h1>
          <p>{{ t('hero.description') }}</p>
          <div class="hero-copy__actions">
            <AppButton to="#ecosystem">{{ t('hero.primaryCta') }}</AppButton>
            <AppButton href="https://portfolio.alixan.kz" variant="ghost">
              {{ t('hero.secondaryCta') }}
            </AppButton>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal>
        <AppCard class="hero-visual">
          <div class="hero-visual__orb" />
          <div class="hero-visual__grid" />
          <div class="hero-visual__node hero-visual__node--one">
            <span>{{ t('hero.nodes.products') }}</span>
          </div>
          <div class="hero-visual__node hero-visual__node--two">
            <span>{{ t('hero.nodes.ui') }}</span>
          </div>
          <div class="hero-visual__node hero-visual__node--three">
            <span>{{ t('hero.nodes.portfolio') }}</span>
          </div>
          <div class="hero-visual__panel">
            <span>{{ t('hero.panelLabel') }}</span>
            <strong>{{ t('hero.panelTitle') }}</strong>
            <p>{{ t('hero.panelText') }}</p>
          </div>
        </AppCard>
      </SectionReveal>
    </div>
  </section>
</template>
