<script setup lang="ts">
import { ExternalLink } from '@lucide/vue';
</script>

<template>
	<Button size="lg" color="secondary" variant="outlined" class="mx-auto">
		{{ $t('about.cta') }}
		<template #trailing>
			<ExternalLink />
		</template>
	</Button>
</template>
