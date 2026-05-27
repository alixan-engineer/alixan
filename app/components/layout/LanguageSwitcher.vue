<script setup lang="ts">
const { locale: activeLocale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const { t } = useI18n()

const currentLocale = computed(() => activeLocale.value)
</script>

<template>
  <div class="language-switcher" :aria-label="t('header.language')">
    <NuxtLink
      v-for="locale in locales"
      :key="locale.code"
      class="language-switcher__item"
      :class="{ 'is-active': locale.code === currentLocale }"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>
