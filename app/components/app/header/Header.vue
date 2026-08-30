<script setup lang="ts">
import Github from '~/assets/icons/github.svg';

const isScrolled = ref(false);

const updateHeader = (event?: Event) => {
	const target = event?.target;

	if (target instanceof Element) {
		isScrolled.value = target.scrollTop > 12;
	}
};

onMounted(() => {
	document.addEventListener('scroll', updateHeader, true);
});

onBeforeUnmount(() => {
	document.removeEventListener('scroll', updateHeader, true);
});
</script>

<template>
	<header
		class="site-header absolute inset-x-0 top-0 z-50 max-md:h-16 md:h-24"
		:class="{ 'site-header--scrolled': isScrolled }"
	>
		<div
			class="size-full max-w-container mx-auto px-4 flex items-center justify-between gap-4"
		>
			<Logo />
			<IconButton
				href="https://github.com/alixan-engineer"
				target="_blank"
				variant="ghost"
				size="responsive"
			>
				<Github />
			</IconButton>
		</div>
	</header>
</template>

<style scoped>
.site-header {
	color: #123247;
	background: linear-gradient(
		180deg,
		rgb(247 252 255 / 0.76),
		rgb(235 248 255 / 0.48)
	);
	border-bottom: 1px solid rgb(20 145 199 / 0.1);
	-webkit-backdrop-filter: blur(14px) saturate(125%);
	backdrop-filter: blur(14px) saturate(125%);
	transition:
		background-color 240ms ease,
		border-color 240ms ease,
		box-shadow 240ms ease,
		backdrop-filter 240ms ease;
}

.site-header--scrolled {
	background: rgb(255 255 255 / 0.82);
	border-bottom-color: rgb(20 145 199 / 0.14);
	box-shadow: 0 12px 36px rgb(17 83 113 / 0.1);
	-webkit-backdrop-filter: blur(18px) saturate(135%);
	backdrop-filter: blur(18px) saturate(135%);
}

:global(.dark .site-header) {
	color: #f7fbff;
	background: linear-gradient(
		180deg,
		rgb(2 8 16 / 0.74),
		rgb(3 16 28 / 0.42)
	);
	border-bottom-color: rgb(123 211 255 / 0.08);
}

:global(.dark .site-header--scrolled) {
	background: rgb(3 10 18 / 0.78);
	border-bottom-color: rgb(123 211 255 / 0.13);
	box-shadow: 0 12px 36px rgb(0 0 0 / 0.2);
}
</style>
