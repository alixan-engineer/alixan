<script setup lang="ts">
import { ExternalLink } from '@lucide/vue';

const { t } = useI18n();

const list = computed(() => [
	{
		link: 'https://ui.alixan.kz/',
		img: '/img/startups/alixan-ui.svg',
		title: 'Alixan UI',
		description: t('home.products.items.ui.description'),
	},
	{
		link: 'https://kaspibot.alixan.kz/',
		img: '/img/startups/kaspi-bot.webp',
		title: 'Kaspi Bot',
		description: t('home.products.items.kaspi.description'),
	},
]);
</script>

<template>
	<Section>
		<div class="space-y-1.5">
			<SectionSubtitle>{{ $t('home.products.eyebrow') }}</SectionSubtitle>
			<SectionTitle>{{ $t('home.products.title') }}</SectionTitle>
		</div>

		<swiper-container
			free-mode
			slides-per-view="auto"
			:space-between="24"
			class="w-full h-auto cursor-grab"
		>
			<swiper-slide v-for="(item, i) in list" :key="i" class="w-70 h-130">
				<Card
					:image="item.img"
					:title="item.title"
					:description="item.description"
					:button="$t('home.products.open')"
					:button-href="item.link"
				>
					<template #trailing>
						<ExternalLink />
					</template>
				</Card>
			</swiper-slide>
		</swiper-container>
	</Section>
</template>
