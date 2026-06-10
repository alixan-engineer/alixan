<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
	<Card id="contact">
		<div class="space-y-10">
			<h5 class="text-h5-uppercase">{{ t('contact.eyebrow') }}</h5>
			<h1 class="text-h1">{{ t('contact.title') }}</h1>
			<h3 class="text-h3">{{ t('contact.description') }}</h3>
			<ContactButton class="mx-auto" />
		</div>
	</Card>
</template>
