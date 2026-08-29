<script setup lang="ts">
import Accordion from '@/components/ui/accordion/Accordion.vue';

const activeItem = ref('item-1');
const { t } = useI18n();

const items = computed(() => [
	{
		value: '1',
		title: t('home.answers.challenge.question'),
		content: t('home.answers.challenge.answer'),
	},
	{
		value: '2',
		title: t('home.answers.weaknesses.question'),
		content: t('home.answers.weaknesses.answer'),
	},
	{
		value: '3',
		title: t('home.answers.strengths.question'),
		content: t('home.answers.strengths.answer'),
	},
]);
</script>

<template>
	<Section>
		<SectionTitle>FAQ</SectionTitle>
		<Accordion v-model="activeItem" :items="items" />
	</Section>
</template>
