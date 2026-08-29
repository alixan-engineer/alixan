<script setup lang="ts">
const { t } = useI18n();

const list = computed(() => [
	{
		key: t('home.about.details.experience.label'),
		value: t('home.about.details.experience.value'),
	},
	{
		key: t('home.about.details.city.label'),
		value: t('home.about.details.city.value'),
	},
	{
		key: t('home.about.details.education.label'),
		value: t('home.about.details.education.value'),
	},
	{
		key: t('home.about.details.languages.label'),
		value: t('home.about.details.languages.value'),
	},
	{
		key: t('home.about.details.hobbies.label'),
		value: t('home.about.details.hobbies.value'),
	},
]);
</script>

<template>
	<Section class="w-full max-w-block mx-auto">
		<div class="space-y-1.5">
			<SectionSubtitle>{{ $t('home.about.eyebrow') }}</SectionSubtitle>
			<SectionTitle>{{ $t('home.about.title') }}</SectionTitle>
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
						{{ $t('home.about.role') }}
					</h2>
					<h1 class="text-3xl font-bold">{{ $t('home.about.name') }}</h1>
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
