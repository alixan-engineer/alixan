<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__top">
        <div class="site-footer__identity">
          <span class="site-footer__brand">{{ t('common.brand') }}</span>
          <p>{{ t('footer.caption') }}</p>
        </div>

        <nav class="site-footer__links" aria-label="Footer">
          <a href="#products">{{ t('footer.products') }}</a>
          <a href="https://portfolio.alixan.kz" target="_blank" rel="noreferrer">{{ t('footer.portfolio') }}</a>
          <a href="https://ui.alixan.kz" target="_blank" rel="noreferrer">{{ t('footer.ui') }}</a>
          <a href="#build-public">{{ t('footer.social') }}</a>
        </nav>
      </div>

      <div class="site-footer__bottom">
        <p class="site-footer__copy">{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>
