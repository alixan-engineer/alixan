<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="ui-system" class="section-block">
    <div class="container">
      <SectionReveal>
        <AppCard class="ui-system-panel">
          <div class="ui-system-panel__copy">
            <div class="section-heading section-heading--compact">
              <span class="section-heading__eyebrow">{{ t('uiSection.eyebrow') }}</span>
              <h2>{{ t('uiSection.title') }}</h2>
              <p>{{ t('uiSection.description') }}</p>
            </div>
            <AppButton href="https://ui.alixan.kz">{{ t('uiSection.cta') }}</AppButton>
          </div>

          <div class="ui-preview">
            <div class="ui-preview__toolbar">
              <AppButton>{{ t('uiSection.preview.button') }}</AppButton>
              <AppButton variant="ghost">{{ t('uiSection.preview.secondaryButton') }}</AppButton>
            </div>
            <div class="ui-preview__input">{{ t('uiSection.preview.input') }}</div>
            <div class="ui-preview__badges">
              <AppBadge>{{ t('uiSection.preview.badgeOne') }}</AppBadge>
              <AppBadge>{{ t('uiSection.preview.badgeTwo') }}</AppBadge>
            </div>
            <div class="ui-preview__cards">
              <AppCard class="ui-preview__modal">
                <span>{{ t('uiSection.preview.modalLabel') }}</span>
                <strong>{{ t('uiSection.preview.modalTitle') }}</strong>
              </AppCard>
              <AppCard class="ui-preview__dashboard">
                <span>{{ t('uiSection.preview.dashboardLabel') }}</span>
                <strong>{{ t('uiSection.preview.dashboardValue') }}</strong>
              </AppCard>
            </div>
          </div>
        </AppCard>
      </SectionReveal>
    </div>
  </section>
</template>
