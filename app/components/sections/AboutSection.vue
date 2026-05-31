<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="about" class="section-block">
    <div class="container">
      <SectionReveal>
        <AppCard class="about-panel">
          <div class="section-heading section-heading--compact">
            <span class="section-heading__eyebrow">{{ t('about.eyebrow') }}</span>
            <h2>{{ t('about.title') }}</h2>
          </div>

          <div class="about-panel__grid">
            <p>{{ t('about.paragraph1') }}</p>
            <p>{{ t('about.paragraph2') }}</p>
            <p>{{ t('about.paragraph3') }}</p>
          </div>

          <AppButton href="/alixan-zhumazhanov-cv-hh.pdf" download class="about-panel__cta">
            {{ t('about.cta') }}
          </AppButton>
        </AppCard>
      </SectionReveal>
    </div>
  </section>
</template>
