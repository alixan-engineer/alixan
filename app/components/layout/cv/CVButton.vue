<script setup lang="ts">
import { ExternalLink } from '@lucide/vue';
</script>

<template>
	<Button
		size="lg"
		color="secondary"
		variant="outlined"
		class="mx-auto w-fit"
		href="/CV-Alikhan.pdf"
		target="_blank"
	>
		{{ $t('about.cta') }}
		<template #trailing>
			<ExternalLink />
		</template>
	</Button>
</template>
