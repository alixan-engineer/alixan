<script setup lang="ts">
const { t } = useI18n()

const robotRef = ref<HTMLElement | null>(null)
const robotStyle = ref({
  '--robot-rotate-x': '0deg',
  '--robot-rotate-y': '0deg',
  '--robot-move-x': '0px',
  '--robot-move-y': '0px',
  '--robot-head-x': '0deg',
  '--robot-head-y': '0deg',
  '--robot-eye-x': '0px',
  '--robot-eye-y': '0px',
})

let frameId = 0

const resetRobot = () => {
  robotStyle.value = {
    '--robot-rotate-x': '0deg',
    '--robot-rotate-y': '0deg',
    '--robot-move-x': '0px',
    '--robot-move-y': '0px',
    '--robot-head-x': '0deg',
    '--robot-head-y': '0deg',
    '--robot-eye-x': '0px',
    '--robot-eye-y': '0px',
  }
}

const updateRobot = (event: PointerEvent) => {
  if (!robotRef.value || window.matchMedia('(pointer: coarse)').matches) {
    return
  }

  if (frameId) {
    cancelAnimationFrame(frameId)
  }

  frameId = requestAnimationFrame(() => {
    const rect = robotRef.value?.getBoundingClientRect()

    if (!rect) {
      return
    }

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = Math.max(-1, Math.min(1, (event.clientX - centerX) / (window.innerWidth * 0.32)))
    const y = Math.max(-1, Math.min(1, (event.clientY - centerY) / (window.innerHeight * 0.32)))

    robotStyle.value = {
      '--robot-rotate-x': `${(-y * 7).toFixed(2)}deg`,
      '--robot-rotate-y': `${(x * 11).toFixed(2)}deg`,
      '--robot-move-x': `${(x * 16).toFixed(2)}px`,
      '--robot-move-y': `${(y * 10).toFixed(2)}px`,
      '--robot-head-x': `${(y * 9).toFixed(2)}deg`,
      '--robot-head-y': `${(x * 17).toFixed(2)}deg`,
      '--robot-eye-x': `${(x * 4).toFixed(2)}px`,
      '--robot-eye-y': `${(y * 3).toFixed(2)}px`,
    }
  })
}

onMounted(() => {
  window.addEventListener('pointermove', updateRobot, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', updateRobot)

  if (frameId) {
    cancelAnimationFrame(frameId)
  }
})
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="container hero-section__grid">
      <SectionReveal>
        <div class="hero-copy">
          <p class="hero-kicker">{{ t('hero.kicker') }}</p>
          <h1>
            {{ t('hero.nameFirst') }}<br>
            <strong>{{ t('hero.nameLast') }}</strong>
          </h1>
          <p class="hero-role">• {{ t('hero.role') }}</p>
          <p>{{ t('hero.description') }}</p>
          <div class="hero-copy__actions">
            <AppButton to="#projects">{{ t('hero.primaryCta') }}</AppButton>
            <AppButton to="#contact" variant="ghost">
              {{ t('hero.secondaryCta') }}
            </AppButton>
          </div>
          <div class="hero-stack">
            <span v-for="item in t('hero.stack').split(', ')" :key="item">{{ item }}</span>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal>
        <AppCard class="hero-visual">
          <div class="hero-visual__grid" />
          <div class="robot-stage" @pointerleave="resetRobot">
            <div ref="robotRef" class="robot-mascot" :style="robotStyle" aria-hidden="true">
              <div class="robot-mascot__halo" />
              <div class="robot-mascot__arm robot-mascot__arm--left">
                <span class="robot-mascot__joint" />
                <span class="robot-mascot__hand">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div class="robot-mascot__arm robot-mascot__arm--right">
                <span class="robot-mascot__joint" />
                <span class="robot-mascot__hand">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div class="robot-mascot__neck" />
              <div class="robot-mascot__head">
                <span />
                <span />
              </div>
              <div class="robot-mascot__body">
                <span class="robot-mascot__shine" />
                <span class="robot-mascot__core" />
              </div>
              <div class="robot-mascot__base">
                <span />
                <span />
              </div>
            </div>
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
