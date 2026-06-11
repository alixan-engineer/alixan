<script setup lang="ts">
import { favicon } from './config/site/favicon';

const { locale } = useI18n();

usePageMeta();

useHead({
	htmlAttrs: { lang: locale.value },
	link: favicon,
});
</script>

<template>
	<!-- Glass cursor -->
	<NoiseOverlay />
	<MouseGlow />
	<CustomCursor />

	<!-- Pages -->
	<div class="size-full overflow-y-auto z-10">
		<div
			class="max-w-container mx-auto px-4 py-6 md:space-y-30 max-md:space-y-20 relative overflow-hidden"
		>
			<NuxtPage />
		</div>
	</div>

	<!-- Grid wallpaper -->
	<Wallpaper />

	<!-- Host -->
	<DrawerHost />
</template>
