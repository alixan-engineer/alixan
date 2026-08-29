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
		link: 'https://kaspi.bot.alixan.kz/',
		img: '/img/startups/kaspi-bot.png',
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

		<div
			class="w-full grid grid-cols-[repeat(auto-fill,minmax(232px,320px))] gap-section"
		>
			<a v-for="(item, i) in list" :key="i" :href="item.link" target="_blank">
				<Card
					:image="item.img"
					:title="item.title"
					:description="item.description"
					:button="$t('home.products.open')"
				>
					<template #trailing>
						<ExternalLink />
					</template>
				</Card>
			</a>
		</div>
	</Section>
</template>
