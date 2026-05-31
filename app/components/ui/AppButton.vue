<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'ghost'
    block?: boolean
    download?: boolean | string
  }>(),
  {
    variant: 'primary',
    block: false,
    download: false,
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
    const isDownload = Boolean(props.download)

    return {
      href: props.href,
      download: props.download || undefined,
      target: isHashLink || isDownload ? undefined : '_blank',
      rel: isHashLink || isDownload ? undefined : 'noreferrer',
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
