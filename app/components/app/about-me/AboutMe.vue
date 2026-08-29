<script setup lang="ts">
const list = [
	{
		key: 'Опыт',
		value: '+7 лет',
	},
	{
		key: 'Город',
		value: 'Казахстан, Алматы',
	},
	{
		key: 'Образование',
		value: 'Высшее & Satbayev University',
	},
	{
		key: 'Языки',
		value: 'Казахский (родной), Русский, Английский',
	},
	{
		key: 'Хобби',
		value: 'Шахматы, Футбол',
	},
] as const;
</script>

<template>
	<Section class="w-full max-w-block mx-auto">
		<div class="space-y-1.5">
			<SectionSubtitle>Без длинного CV</SectionSubtitle>
			<SectionTitle>Коротко обо мне</SectionTitle>
		</div>

		<div class="w-full h-auto p-6 flex gap-8 bg-card border rounded-4xl">
			<img
				src="/img/me.webp"
				alt="alixan.kz"
				width="250"
				height="250"
				loading="lazy"
				class="aspect-square object-cover rounded-4xl"
			/>

			<div class="flex-1 space-y-3.5">
				<div class="space-y-1.5">
					<h2 class="text-xl font-medium text-muted-foreground">
						Senior Full Stack разработчик
					</h2>
					<h1 class="text-3xl font-bold">Жумажанов Алихан</h1>
				</div>
				<div class="space-y-2">
					<p v-for="(item, i) in list" :key="i" class="flex gap-3 text-base">
						<b>{{ item.key }}:</b>
						{{ item.value }}
					</p>
				</div>
			</div>
		</div>
	</Section>
</template>
