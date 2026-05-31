<script setup lang="ts">
const { t } = useI18n()

const emailHref = 'mailto:alixan.engineer@gmail.com'
</script>

<template>
  <section id="contact" class="section-block">
    <div class="container">
      <SectionReveal>
        <AppCard class="contact-panel">
          <div class="section-heading section-heading--compact">
            <div class="contact-availability">
              <span />
              {{ t('contact.availability') }}
            </div>
            <span class="section-heading__eyebrow">{{ t('contact.eyebrow') }}</span>
            <h2>{{ t('contact.title') }}</h2>
            <p>{{ t('contact.description') }}</p>
          </div>

          <div class="contact-panel__actions">
            <AppButton :href="emailHref">{{ t('contact.primaryCta') }}</AppButton>
            <AppButton href="/alixan-zhumazhanov-cv-hh.pdf" download variant="ghost">
              {{ t('contact.secondaryCta') }}
            </AppButton>
          </div>
        </AppCard>
      </SectionReveal>
    </div>
  </section>
</template>
