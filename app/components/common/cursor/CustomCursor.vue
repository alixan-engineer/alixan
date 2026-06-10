<script setup lang="ts">
const cursorX = ref(-100);
const cursorY = ref(-100);
const ringX = ref(-100);
const ringY = ref(-100);
const isDesktop = ref(false);

let animationFrame = 0;

const syncViewport = () => {
	isDesktop.value = window.matchMedia('(pointer: fine)').matches;
};

const handlePointerMove = (event: PointerEvent) => {
	cursorX.value = event.clientX;
	cursorY.value = event.clientY;
};

const animateRing = () => {
	ringX.value += (cursorX.value - ringX.value) * 0.18;
	ringY.value += (cursorY.value - ringY.value) * 0.18;
	animationFrame = window.requestAnimationFrame(animateRing);
};

onMounted(() => {
	syncViewport();
	window.addEventListener('resize', syncViewport);
	window.addEventListener('pointermove', handlePointerMove);
	animationFrame = window.requestAnimationFrame(animateRing);
});

onBeforeUnmount(() => {
	window.removeEventListener('resize', syncViewport);
	window.removeEventListener('pointermove', handlePointerMove);
	window.cancelAnimationFrame(animationFrame);
});
</script>

<template>
	<div
		:class="
			cn('pointer-events-none fixed inset-0 z-50', !isDesktop && 'hidden')
		"
	>
		<span
			class="size-2 absolute top-0 left-0 translate-[-100px_-100px] rounded-full -ml1 -mb-1 bg-foreground/80"
			:style="{ transform: `translate3d(${cursorX}px, ${cursorY}px, 0)` }"
		/>
		<span
			class="size-11 absolute top-0 left-0 -ml-4 -mt-4 rounded-full translate-[-100px_-100px] border backdrop-blur-sm"
			:style="{ transform: `translate3d(${ringX}px, ${ringY}px, 0)` }"
		/>
	</div>
</template>
