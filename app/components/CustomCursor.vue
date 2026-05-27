<script setup lang="ts">
const cursorX = ref(-100)
const cursorY = ref(-100)
const ringX = ref(-100)
const ringY = ref(-100)
const isDesktop = ref(false)

let animationFrame = 0

const syncViewport = () => {
  isDesktop.value = window.matchMedia('(pointer: fine)').matches
}

const handlePointerMove = (event: PointerEvent) => {
  cursorX.value = event.clientX
  cursorY.value = event.clientY
}

const animateRing = () => {
  ringX.value += (cursorX.value - ringX.value) * 0.18
  ringY.value += (cursorY.value - ringY.value) * 0.18
  animationFrame = window.requestAnimationFrame(animateRing)
}

onMounted(() => {
  syncViewport()
  window.addEventListener('resize', syncViewport)
  window.addEventListener('pointermove', handlePointerMove)
  animationFrame = window.requestAnimationFrame(animateRing)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', syncViewport)
  window.removeEventListener('pointermove', handlePointerMove)
  window.cancelAnimationFrame(animationFrame)
})
</script>

<template>
  <div class="custom-cursor" :class="{ 'is-hidden': !isDesktop }">
    <span
      class="custom-cursor__dot"
      :style="{ transform: `translate3d(${cursorX}px, ${cursorY}px, 0)` }"
    />
    <span
      class="custom-cursor__ring"
      :style="{ transform: `translate3d(${ringX}px, ${ringY}px, 0)` }"
    />
  </div>
</template>
