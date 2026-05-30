<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const isMenuOpen = ref(false)

const navItems = computed(() => [
  { label: t('header.nav.ecosystem'), href: '#ecosystem' },
  { label: t('header.nav.products'), href: '#products' },
  { label: t('header.nav.ui'), href: '#ui-system' },
  { label: t('header.nav.portfolio'), href: '#about' },
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
        <AppButton href="https://portfolio.alixan.kz" variant="ghost">{{ t('header.portfolioCta') }}</AppButton>
        <AppButton href="https://ui.alixan.kz">{{ t('header.uiCta') }}</AppButton>
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
              <AppButton href="https://portfolio.alixan.kz" variant="ghost" block>
                {{ t('header.portfolioCta') }}
              </AppButton>
              <AppButton href="https://ui.alixan.kz" block>{{ t('header.uiCta') }}</AppButton>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>
