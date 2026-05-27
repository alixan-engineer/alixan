<script setup lang="ts">
const position = reactive({ x: -200, y: -200 })
const isVisible = ref(false)

const handleMove = (event: PointerEvent) => {
  position.x = event.clientX - 180
  position.y = event.clientY - 180
  isVisible.value = true
}

const handleLeave = () => {
  isVisible.value = false
}

onMounted(() => {
  window.addEventListener('pointermove', handleMove)
  window.addEventListener('pointerleave', handleLeave)
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', handleMove)
  window.removeEventListener('pointerleave', handleLeave)
})
</script>

<template>
  <div
    class="mouse-glow"
    :style="{
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      opacity: isVisible ? 1 : 0,
    }"
  />
</template>
