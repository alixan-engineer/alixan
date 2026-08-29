<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';

const { t } = useI18n();

const list = computed(() => [
	{
		img: '/img/projects/kks.png',
		title: t('home.projects.items.kks.title'),
		description: t('home.projects.items.kks.description'),
	},
	{
		img: '/img/projects/halyk.svg',
		title: t('home.projects.items.halyk.title'),
		description: t('home.projects.items.halyk.description'),
	},
	{
		img: '/img/projects/alser.svg',
		title: t('home.projects.items.alser.title'),
		description: t('home.projects.items.alser.description'),
	},
	{
		img: '/img/projects/anticor.jpg',
		title: t('home.projects.items.anticor.title'),
		description: t('home.projects.items.anticor.description'),
	},
	{
		img: '/img/projects/ryware.jpg',
		title: t('home.projects.items.ryware.title'),
		description: t('home.projects.items.ryware.description'),
	},
]);
</script>

<template>
	<Section>
		<div class="space-y-1.5">
			<SectionSubtitle>{{ $t('home.projects.eyebrow') }}</SectionSubtitle>
			<SectionTitle>{{ $t('home.projects.title') }}</SectionTitle>
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
					:button="$t('home.projects.role')"
				>
					<template #trailing>
						<ArrowRight />
					</template>
				</Card>
			</swiper-slide>
		</swiper-container>
	</Section>
</template>
