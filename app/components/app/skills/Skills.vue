<script setup lang="ts">
import { CodeXml, Database, Palette, Smartphone } from '@lucide/vue';

const categories = [
	{
		id: 'design',
		icon: Palette,
		accent: '#ec168c',
		accentEnd: '#ff4f78',
		skills: [
			{ id: 'figma' },
			{ id: 'photoshop' },
			{ id: 'illustrator' },
			{ id: 'cupertino' },
			{ id: 'material' },
			{ id: 'atomic' },
		],
	},
	{
		id: 'frontend',
		icon: CodeXml,
		accent: '#4155dc',
		accentEnd: '#58b8ff',
		skills: [{ id: 'react' }, { id: 'vue' }, { id: 'angular' }, { id: 'rxjs' }],
	},
	{
		id: 'backend',
		icon: Database,
		accent: '#09a982',
		accentEnd: '#42e2c2',
		skills: [
			{ id: 'go' },
			{ id: 'node' },
			{ id: 'nest' },
			{ id: 'postgresql' },
			{ id: 'mongodb' },
			{ id: 'redis' },
			{ id: 'docker' },
			{ id: 'nginx' },
		],
	},
	{
		id: 'mobile',
		icon: Smartphone,
		accent: '#7a35de',
		accentEnd: '#d397ff',
		skills: [
			{ id: 'flutter' },
			{ id: 'firebase' },
			{ id: 'xcode' },
			{ id: 'android' },
		],
	},
] as const;
</script>

<template>
	<Section class="max-w-block mx-auto">
		<div class="space-y-1.5">
			<SectionSubtitle>{{ $t('home.skills.eyebrow') }}</SectionSubtitle>
			<SectionTitle>{{ $t('home.skills.title') }}</SectionTitle>
		</div>

		<div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
			<article
				v-for="category in categories"
				:key="category.id"
				class="space-y-6 rounded-3xl border bg-card p-4 text-card-foreground"
			>
				<div class="flex items-center gap-3.5">
					<div
						class="size-12 flex items-center justify-center rounded-2xl text-white"
						:style="{
							background: `linear-gradient(155deg, ${category.accentEnd}, ${category.accent})`,
						}"
					>
						<component :is="category.icon" :stroke-width="2.3" />
					</div>
					<h3 class="text-2xl font-bold">
						{{ $t(`home.skills.categories.${category.id}.title`) }}
					</h3>
				</div>

				<ul
					class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-2"
				>
					<li
						v-for="skill in category.skills"
						:key="skill.id"
						class="flex min-h-10 min-w-0 items-center gap-2.5 rounded-full border bg-skill-badge px-3 py-2"
					>
						<img
							:src="`/img/skills/${skill.id}.svg`"
							alt=""
							width="24"
							height="24"
							loading="lazy"
							class="size-6 shrink-0 object-contain"
						/>
						<span class="min-w-0 text-sm leading-tight font-medium">
							{{ $t(`home.skills.items.${skill.id}`) }}
						</span>
					</li>
				</ul>
			</article>
		</div>
	</Section>
</template>
