<script setup lang="ts">
type SkillGroup = {
  key: string
  title: string
  description: string
  stack: string[]
}

const { t } = useI18n()

const groups = computed<SkillGroup[]>(() =>
  ['frontend', 'backend', 'mobile', 'product'].map((key) => ({
    key,
    title: t(`skills.items.${key}.title`),
    description: t(`skills.items.${key}.description`),
    stack: t(`skills.items.${key}.stack`).split(', '),
  })),
)
</script>

<template>
  <section id="skills" class="section-block">
    <div class="container">
      <SectionReveal>
        <div class="section-heading">
          <span class="section-heading__eyebrow">{{ t('skills.eyebrow') }}</span>
          <h2>{{ t('skills.title') }}</h2>
          <p>{{ t('skills.description') }}</p>
        </div>
      </SectionReveal>

      <div class="skills-grid">
        <SectionReveal v-for="(group, index) in groups" :key="group.key" :style="{ '--delay': `${index * 70}ms` }">
          <AppCard class="skill-card">
            <div class="skill-card__header">
              <span>0{{ index + 1 }}</span>
              <div>
                <h3>{{ group.title }}</h3>
                <p>{{ group.description }}</p>
              </div>
            </div>
            <div class="skill-card__tags">
              <AppBadge v-for="item in group.stack" :key="item">{{ item }}</AppBadge>
            </div>
          </AppCard>
        </SectionReveal>
      </div>
    </div>
  </section>
</template>
