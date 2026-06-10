<script setup lang="ts">
type SkillGroup = {
	key: string;
	title: string;
	description: string;
	stack: string[];
};

const { t } = useI18n();

const groups = computed<SkillGroup[]>(() =>
	['design', 'frontend', 'backend', 'mobile'].map(key => ({
		key,
		title: t(`skills.items.${key}.title`),
		description: t(`skills.items.${key}.description`),
		stack: t(`skills.items.${key}.stack`).split(', '),
	})),
);
</script>

<template>
	<div class="space-y-4" id="skills">
		<h5 class="text-h5-uppercase">{{ t('skills.eyebrow') }}</h5>
		<h1 class="text-h1">{{ t('skills.title') }}</h1>
		<h3 class="text-h3">
			{{ t('skills.description') }}
		</h3>

		<div class="mt-14 grid max-md:grid-cols-1 md:grid-cols-2 gap-6">
			<Card v-for="group in groups" :key="group.key">
				<div class="space-y-4 mb-6">
					<h2 class="max-md:text-xl md:text-2xl font-bold">
						{{ group.title }}
					</h2>
					<p
						class="max-md:text-md md:text-base tracking-wider text-muted-foreground"
					>
						{{ group.description }}
					</p>
				</div>

				<div class="inline-flex gap-4 flex-wrap">
					<Chip v-for="item in group.stack" :key="item">
						{{ item }}
					</Chip>
				</div>
			</Card>
		</div>
	</div>
</template>
