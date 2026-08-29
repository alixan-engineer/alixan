<script setup lang="ts">
import { Zap } from '@lucide/vue';
import CTADialog from './CTADialog.vue';

const dialog = useDialog();

const openDialog = () => {
	dialog.open(CTADialog, {
		width: '520px',
		height: '520px',
	});
};
</script>

<template>
	<Button
		size="responsive"
		variant="filled"
		color="primary"
		@click="openDialog"
	>
		<template #leading>
			<Zap />
		</template>
		{{ $t('home.cta.button') }}
	</Button>
</template>
