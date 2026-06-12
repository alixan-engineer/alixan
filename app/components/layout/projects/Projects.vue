<script setup lang="ts">
interface Product {
	key: string;
	stack: string[];
	link?: string;
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
				key: 'ui',
				stack: ['Vue', 'Nuxt', 'TypeScript', 'SCSS'],
				link: 'https://ui.alixan.kz/',
			},

			{
				key: 'takta',
				stack: ['Flutter', 'Nuxt', 'NestJS', 'MongoDB'],
			},
			{
				key: 'freelance',
				stack: ['Angular', 'NestJS', 'MongoDB'],
			},
		],
	},
	{
		label: 'products.commercial',
		products: [
			{
				key: 'kks',
				stack: ['Angular', 'RxJS', 'TypeScript'],
			},
			{
				key: 'halyk',
				stack: ['Angular', 'RxJS', 'TypeScript'],
			},
			{
				key: 'alser',
				stack: ['Angular', 'Nuxt', 'RxJS', 'TypeScript'],
			},
			{
				key: 'institu',
				stack: ['Angular', 'TypeScript', 'REST API'],
			},
			{
				key: 'ryware',
				stack: ['React', 'Angular', 'TypeScript'],
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
				class="grid xl:grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 justify-between xl:gap-10 max-xl:gap-8 max-md:gap-7"
			>
				<Card
					v-for="card in block.products"
					:key="card.key"
					class="p-0! overflow-hidden"
				>
					<div class="p-4">
						<p class="text-xl font-semibold">
							{{ $t(`products.items.${card.key}.title`) }}
						</p>
						<p class="text-base mt-2 mb-6">
							{{ $t(`products.items.${card.key}.description`) }}
						</p>
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
							target="_blank"
							rel="noreferrer"
						>
							{{ $t('products.view') }}
						</Button>
					</div>
				</Card>
			</div>
		</div>
	</div>
</template>
