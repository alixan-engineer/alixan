<script setup lang="ts">
type ExperienceItem = {
  period: string
  company: string
  role: string
  summary: string
  points: string[]
  stack: string[]
}

type RawExperienceItem = {
  period: unknown
  company: unknown
  role: unknown
  summary: unknown
  points?: unknown[]
  stack?: unknown[]
}

const { t, tm, rt } = useI18n()

const translateMessage = (message: unknown) => (typeof message === 'string' ? message : rt(message))

const items = computed<ExperienceItem[]>(() =>
  (tm('experience.items') as RawExperienceItem[]).map((item) => ({
    period: translateMessage(item.period),
    company: translateMessage(item.company),
    role: translateMessage(item.role),
    summary: translateMessage(item.summary),
    points: (item.points ?? []).map(translateMessage),
    stack: (item.stack ?? []).map(translateMessage),
  })),
)
</script>

<template>
  <section id="experience" class="section-block experience-section">
    <div class="container">
      <SectionReveal>
        <div class="section-heading">
          <span class="section-heading__eyebrow">{{ t('experience.eyebrow') }}</span>
          <h2>{{ t('experience.title') }}</h2>
          <p>{{ t('experience.description') }}</p>
        </div>
      </SectionReveal>

      <div class="experience-timeline">
        <SectionReveal v-for="(item, index) in items" :key="`${item.company}-${item.period}`" :style="{ '--delay': `${index * 60}ms` }">
          <AppCard class="experience-card">
            <div class="experience-card__top">
              <span>{{ item.role }}</span>
              <span>{{ item.period }}</span>
            </div>
            <h3>{{ item.company }}</h3>
            <p>{{ item.summary }}</p>
            <ul>
              <li v-for="point in item.points" :key="point">{{ point }}</li>
            </ul>
            <div class="experience-card__tags">
              <AppBadge v-for="itemStack in item.stack" :key="itemStack">{{ itemStack }}</AppBadge>
            </div>
          </AppCard>
        </SectionReveal>
      </div>
    </div>
  </section>
</template>
