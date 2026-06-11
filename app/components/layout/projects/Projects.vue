<script setup lang="ts">
import { Image } from '@lucide/vue';

interface Product {
	img: string;
	title: string;
	description: string;
	stack: string[];
	link?: string;
	closed?: boolean;
}

interface Block {
	label: string;
	products: Product[];
}

const blocks: Block[] = [
	{
		label: 'products.own',
		products: [
			{
				img: 'https://placehold.co/600x400',
				title: 'Alixan UI',
				description:
					'Alixan UI brings lightweight Cupertino-style components to product interfaces',
				stack: ['Nuxt', 'Angular', 'Flutter'],
				link: 'https://ui.alixan.kz/',
			},

			{
				img: 'https://placehold.co/600x400',
				title: 'Takta.kz',
				description: 'Description',
				stack: ['Flutter', 'Nuxt', 'Nestjs', 'MongoDB'],
				closed: true,
			},
			{
				img: 'https://placehold.co/600x400',
				title: 'FreelancePlus',
				description: 'Фриланс биржа',
				stack: ['Angular', 'Nestjs', 'MongoDB'],
				closed: true,
			},
		],
	},
	{
		label: 'products.commercial',
		products: [
			{
				img: 'https://placehold.co/600x400',
				title: 'KKS DIGITAL',
				description: '...',
				stack: ['Angular', 'RxJS', 'TypeScript'],
			},
			{
				img: 'https://placehold.co/600x400',
				title: 'Halyk bank',
				description: '...',
				stack: ['Angular', 'RxJS', 'TypeScript'],
			},
			{
				img: 'https://placehold.co/600x400',
				title: 'Alser.kz',
				description: '...',
				stack: ['Angular', 'Nuxt', 'RxJS', 'TypeScript'],
			},
		],
	},
];
</script>

<template>
	<div id="projects" class="space-y-10">
		<div class="space-y-4">
			<h5 class="text-h5-uppercase">{{ $t('products.eyebrow') }}</h5>
			<h1 class="text-h1">{{ $t('products.title') }}</h1>
			<h3 class="text-h3">{{ $t('products.description') }}</h3>
		</div>

		<div v-for="(block, i) in blocks" :key="i" class="space-y-4">
			<h2
				class="text-2xl font-semibold text-foreground/90 ml-4 max-md:text-center"
			>
				{{ $tn(block.label) }}
			</h2>
			<div
				class="grid grid-cols-[repeat(auto-fit,minmax(232px,1fr))] justify-between gap-10"
			>
				<Card v-for="card in block.products" class="p-0! overflow-hidden">
					<!-- <img
					:src="card.img"
					:alt="card.title"
					loading="lazy"
					class="w-full h-40 object-cover"
				/> -->
					<div
						class="w-full h-50 flex items-center justify-center bg-muted text-muted-foreground rounded-4xl"
					>
						<Image class="size-26" />
					</div>
					<div class="p-4">
						<p class="text-xl font-semibold">{{ card.title }}</p>
						<p class="text-base mt-2 mb-6">{{ card.description }}</p>
						<div class="inline-flex gap-2 flex-wrap">
							<Chip v-for="item in card.stack" :key="item">
								{{ item }}
							</Chip>
						</div>
						<Button
							v-if="card?.link"
							:href="card.link"
							color="secondary"
							class="w-full mt-4"
						>
							Посмотреть
						</Button>
					</div>
				</Card>
			</div>
		</div>
	</div>
</template>
