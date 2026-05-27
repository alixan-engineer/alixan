<script setup lang="ts">
const { t } = useI18n()
const isLoading = ref(true)
const localeHead = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

useHead(() => ({
  htmlAttrs: localeHead.value.htmlAttrs,
  link: localeHead.value.link,
  meta: localeHead.value.meta,
}))

onMounted(() => {
  window.setTimeout(() => {
    isLoading.value = false
  }, 1100)
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="noise-overlay" />
    <MouseGlow />
    <CustomCursor />

    <Transition name="loader-fade">
      <div v-if="isLoading" class="app-loader" aria-hidden="true">
        <div class="app-loader__mark">
          <span>{{ t('common.brand') }}</span>
          <span>{{ t('common.loader') }}</span>
        </div>
      </div>
    </Transition>

    <NuxtPage />
  </div>
</template>
