<script setup lang="ts">
import Github from '~/assets/icons/github.svg';
</script>

<template>
	<header class="max-md:h-16 md:h-24 border-b">
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
