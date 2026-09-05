<script setup lang="ts">
defineProps<{
	images: string[];
}>();

const failedSources = ref(new Set<string>());
</script>

<template>
	<swiper-container
		v-if="images.length"
		free-mode
		slides-per-view="auto"
		:space-between="16"
		class="w-full cursor-grab"
	>
		<swiper-slide
			v-for="item in images"
			:key="item"
			class="max-w-200 rounded-2xl overflow-hidden"
		>
			<img
				:src="item"
				alt="Screenshot"
				width="800"
				height="450"
				loading="lazy"
				class="aspect-video overflow-hidden"
			/>
		</swiper-slide>
	</swiper-container>
</template>
