<script setup lang="ts">
const { element } = useRevealOnScroll()
</script>

<template>
  <div ref="element" class="reveal-block">
    <slot />
  </div>
</template>
