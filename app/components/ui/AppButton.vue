<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'ghost'
    block?: boolean
  }>(),
  {
    variant: 'primary',
    block: false,
  },
)

const tag = computed(() => {
  if (props.to) {
    return resolveComponent('NuxtLink')
  }

  if (props.href) {
    return 'a'
  }

  return 'button'
})

const linkAttrs = computed(() => {
  if (props.to) {
    return { to: props.to }
  }

  if (props.href) {
    const isHashLink = props.href.startsWith('#') || props.href.startsWith('mailto:')

    return {
      href: props.href,
      target: isHashLink ? undefined : '_blank',
      rel: isHashLink ? undefined : 'noreferrer',
    }
  }

  return { type: 'button' }
})
</script>

<template>
  <component
    :is="tag"
    class="app-button"
    :class="[`app-button--${variant}`, { 'app-button--block': block }]"
    v-bind="linkAttrs"
  >
    <span><slot /></span>
  </component>
</template>
