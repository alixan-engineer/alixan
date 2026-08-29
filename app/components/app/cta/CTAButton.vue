<script setup lang="ts">
import { Zap } from '@lucide/vue';
</script>

<template>
	<Button size="responsive" variant="filled" color="primary">
		<template #leading>
			<Zap />
		</template>
		{{ $t('home.cta.button') }}
	</Button>
</template>
