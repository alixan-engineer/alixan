<script setup lang="ts">
import Accordion from '@/components/ui/accordion/Accordion.vue';

const activeItem = ref('item-1');

const items = [
	{
		value: '1',
		title: 'Самое сложное что Вы делали в карьере?',
		content:
			'Работа с Three.js. Надо было сделать 3D просмотр квартиры прямо на сайте.',
	},
	{
		value: '2',
		title: 'Ваши слабые стороны?',
		content: 'Сложные алгоритмы. Мало решал алгоритмические задачи.',
	},
	{
		value: '3',
		title: 'Ваши сильные стороны?',
		content:
			'Хорошо чувствую интерфейсы. Люблю делать их простыми, быстрыми и удобными.',
	},
];
</script>

<template>
	<Section>
		<SectionTitle>FAQ</SectionTitle>
		<Accordion v-model="activeItem" :items="items" />
	</Section>
</template>
