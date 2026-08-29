<script setup lang="ts">
import { favicon } from './config/site/favicon';

const { locale } = useI18n();

// Init default meta SEO tags
usePageMeta();

// Init lang and favicon for html
useHead({
	htmlAttrs: { lang: locale.value },
	link: favicon,
});
</script>

<template>
	<NuxtPage />

	<DialogHost />
	<DrawerHost />
	<GlobalLoaderHost />
	<ToastHost />
</template>
