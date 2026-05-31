<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const isMenuOpen = ref(false)

const navItems = computed(() => [
  { label: t('header.nav.about'), href: '#about' },
  { label: t('header.nav.skills'), href: '#skills' },
  { label: t('header.nav.experience'), href: '#experience' },
  { label: t('header.nav.projects'), href: '#projects' },
  { label: t('header.nav.contact'), href: '#contact' },
])

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <NuxtLink class="site-header__brand" :to="localePath('/')">
        {{ t('common.brand') }}
      </NuxtLink>

      <nav class="site-header__nav" aria-label="Primary">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <div class="site-header__actions">
        <LanguageSwitcher />
        <AppButton href="https://ui.alixan.kz" variant="ghost">{{ t('header.uiCta') }}</AppButton>
        <AppButton href="/alixan-zhumazhanov-cv-hh.pdf" download>{{ t('header.resumeCta') }}</AppButton>
        <button
          class="site-header__menu"
          type="button"
          :aria-expanded="String(isMenuOpen)"
          :aria-label="t('header.menu')"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span />
          <span />
        </button>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="menu-fade">
        <div v-show="isMenuOpen" class="mobile-menu">
          <div class="container mobile-menu__inner">
            <div class="mobile-menu__header">
              <NuxtLink class="site-header__brand" :to="localePath('/')" @click="isMenuOpen = false">
                {{ t('common.brand') }}
              </NuxtLink>
              <button
                class="mobile-menu__close"
                type="button"
                :aria-label="t('header.closeMenu')"
                @click="isMenuOpen = false"
              >
                <span />
                <span />
              </button>
            </div>

            <nav class="mobile-menu__nav" aria-label="Mobile">
              <a v-for="item in navItems" :key="item.href" :href="item.href" @click="isMenuOpen = false">
                {{ item.label }}
              </a>
            </nav>

            <div class="mobile-menu__footer">
              <LanguageSwitcher class="mobile-menu__languages" />
              <AppButton href="https://ui.alixan.kz" variant="ghost" block>{{ t('header.uiCta') }}</AppButton>
              <AppButton href="/alixan-zhumazhanov-cv-hh.pdf" download block>{{ t('header.resumeCta') }}</AppButton>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>
