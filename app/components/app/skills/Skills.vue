<script setup lang="ts">
const list = [
	{
		key: 'UI/UX Design',
		value: [
			'Figma',
			'Adobe Photoshop',
			'Adobe Illustrator',
			'Cupertino Design',
			'Material Design',
			'Atomic Design',
		],
	},
	{
		key: 'Frontend',
		value: ['React', 'Vue', 'Angular', 'Rxjs'],
	},
	{
		key: 'Backend',
		value: ['Node.js', 'Nest.js', 'MongoDB', 'Redis', 'Docker', 'Nginx'],
	},
	{
		key: 'Mobile',
		value: ['Flutter', 'Firebase', 'XCode', 'Android Studio'],
	},
] as const;
</script>

<template>
	<Section>
		<div class="space-y-1.5">
			<SectionSubtitle>{{ $t('home.skills.eyebrow') }}</SectionSubtitle>
			<SectionTitle>{{ $t('home.skills.title') }}</SectionTitle>
		</div>

		<div class="grid xl:grid-cols-4 grid-cols-2 gap-6">
			<div
				v-for="(item, i) in list"
				:key="i"
				class="p-6 space-y-4 bg-card border rounded-4xl"
			>
				<p class="text-2xl font-semibold">{{ item.key }}</p>

				<ol class="space-y-2 text-xm">
					<li v-for="v in item.value">{{ v }}</li>
				</ol>
			</div>
		</div>
	</Section>
</template>
