<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';

const list = [
	{
		img: '/img/projects/kks.png',
		title: 'ККС - Единый Биллинг',
		description:
			'Биллинговая система для сферы ЖКХ. Сбор показаний и расчёт начислений за коммунальные услуги.',
	},
	{
		img: '/img/projects/halyk.svg',
		title: 'Halyk bank',
		description:
			'Корпоративный портал для Агентства РК по противодействию коррупции.',
	},
	{
		img: '/img/projects/alser.svg',
		title: 'Alser.kz',
		description:
			'Один из крупнейших интернет-магазинов электроники в Казахстане.',
	},
	{
		img: '/img/projects/anticor.jpg',
		title: 'Антикор',
		description:
			'Корпоративный портал для Агентства РК по противодействию коррупции.',
	},
	{
		img: '/img/projects/ryware.jpg',
		title: 'Ryware',
		description:
			'Компания по разработке программных продуктов для международных клиентов.',
	},
] as const;
</script>

<template>
	<Section>
		<div class="space-y-1.5">
			<SectionSubtitle>Проекты над которыми я работал</SectionSubtitle>
			<SectionTitle>Коммерческие проекты</SectionTitle>
		</div>

		<div
			class="w-full grid grid-cols-[repeat(auto-fill,minmax(232px,320px))] gap-section"
		>
			<Card
				v-for="(item, i) in list"
				:key="i"
				:image="item.img"
				:title="item.title"
				:description="item.description"
				button="Моя роль"
			>
				<template #trailing>
					<ArrowRight />
				</template>
			</Card>
		</div>
	</Section>
</template>
