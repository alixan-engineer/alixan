<script setup lang="ts">
import { ExternalLink } from '@lucide/vue';

const list = [
	{
		link: 'https://ui.alixan.kz/',
		img: '/img/startups/alixan-ui.svg',
		title: 'Alixan UI',
		description:
			'Дизайн-система в стиле Cupertino. Единые компоненты и визуальный язык для Web, Mobile и Figma.',
	},
	{
		link: 'https://kaspi.bot.alixan.kz/',
		img: '/img/startups/kaspi-bot.png',
		title: 'Kaspi Bot',
		description:
			'Сервис автоматизации продаж на Kaspi. Демпинг цен и управление заказами.',
	},
] as const;
</script>

<template>
	<Section>
		<div class="space-y-1.5">
			<SectionSubtitle>Мои собственные продукты</SectionSubtitle>
			<SectionTitle>Продукты</SectionTitle>
		</div>

		<div
			class="w-full grid grid-cols-[repeat(auto-fill,minmax(232px,320px))] gap-section"
		>
			<a v-for="(item, i) in list" :key="i" :href="item.link" target="_blank">
				<Card
					:image="item.img"
					:title="item.title"
					:description="item.description"
					button="Посмотреть продукт"
				>
					<template #trailing>
						<ExternalLink />
					</template>
				</Card>
			</a>
		</div>
	</Section>
</template>
