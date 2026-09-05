<script setup lang="ts">
import { ArrowLeft, Check } from '@lucide/vue';
import { commercialProjects } from '~/config/projects';

definePageMeta({
	key: route => route.path,
});

const route = useRoute();
const { tm, rt } = useI18n();
const project = commercialProjects.find(
	item => item.slug === route.params.slug,
);

if (!project) {
	throw createError({ statusCode: 404, statusMessage: 'Project not found' });
}

const contentKey = `projectCase.items.${project.slug}`;

usePageMeta({
	title: `${contentKey}.metaTitle`,
	description: `${contentKey}.metaDescription`,
});
</script>

<template>
	<Scaffold>
		<template #body>
			<div class="mx-auto max-w-section">
				<SilverAppBar :title="$t(`${contentKey}.headline`)" title-align="start">
					<template #leading>
						<IconButton :to="$localePath('/')">
							<ArrowLeft />
						</IconButton>
					</template>

					<template #observer>
						<h1 class="mt-8 px-4 text-3xl font-semibold">
							{{ $t(`${contentKey}.headline`) }}
						</h1>
					</template>
				</SilverAppBar>

				<div class="px-4 py-8 space-y-14 md:space-y-20">
					<ProjectScreenshots :images="project.screenshots" />

					<div
						class="grid gap-6 p-6 md:grid-cols-3 md:gap-8 bg-card/40 border rounded-4xl"
					>
						<div
							v-for="field in ['role', 'period', 'focus']"
							:key="field"
							class="space-y-1"
						>
							<p class="text-base text-muted-foreground">
								{{ $t(`projectCase.${field}`) }}
							</p>
							<p class="text-xm font-medium">
								{{ $t(`${contentKey}.${field}`) }}
							</p>
						</div>
					</div>

					<section class="space-y-5">
						<h2
							class="font-semibold leading-tight tracking-tight max-md:text-2xl md:text-3xl"
						>
							{{ $t('projectCase.role') }}
						</h2>
						<p
							class="text-muted-foreground max-md:text-base max-md:leading-7 md:text-lg md:leading-8"
						>
							{{ $t(`${contentKey}.intro`) }}
						</p>
					</section>

					<section class="space-y-8 md:space-y-10">
						<h2
							class="font-semibold leading-tight tracking-tight max-md:text-2xl md:text-3xl"
						>
							{{ $t('projectCase.work') }}
						</h2>
						<section
							v-for="topic in project.topics"
							:key="topic.id"
							class="space-y-6"
						>
							<div class="space-y-4">
								<h3 class="text-xl font-semibold tracking-tight md:text-2xl">
									{{ $t(`${contentKey}.topics.${topic.id}.title`) }}
								</h3>
								<p
									class="text-muted-foreground max-md:text-base max-md:leading-7 md:text-lg md:leading-8"
								>
									{{ $t(`${contentKey}.topics.${topic.id}.description`) }}
								</p>
							</div>
						</section>
					</section>

					<section class="space-y-5">
						<h2
							class="font-semibold leading-tight tracking-tight max-md:text-2xl md:text-3xl"
						>
							{{ $t('projectCase.stack') }}
						</h2>
						<p
							class="text-muted-foreground max-md:text-base max-md:leading-7 md:text-lg md:leading-8"
						>
							{{ $t(`${contentKey}.stackDescription`) }}
						</p>
						<ul class="flex flex-wrap gap-2.5">
							<li
								v-for="(item, index) in tm(`${contentKey}.stack`)"
								:key="index"
								class="max-w-full rounded-xl border bg-card px-4 py-2 text-sm font-medium"
							>
								{{ rt(item) }}
							</li>
						</ul>
					</section>

					<section class="space-y-6">
						<h2
							class="font-semibold leading-tight tracking-tight max-md:text-2xl md:text-3xl"
						>
							{{ $t('projectCase.achievements') }}
						</h2>
						<ul class="divide-y rounded-2xl border bg-card/40 px-5 md:px-7">
							<li
								v-for="(item, index) in tm(`${contentKey}.achievements`)"
								:key="index"
								class="flex items-start gap-4 py-5"
							>
								<Check class="mt-1 size-5 shrink-0 text-muted-foreground" />
								<p class="text-base leading-relaxed">{{ rt(item) }}</p>
							</li>
						</ul>
					</section>

					<section class="space-y-5">
						<h2
							class="font-semibold leading-tight tracking-tight max-md:text-2xl md:text-3xl"
						>
							{{ $t('projectCase.experience') }}
						</h2>
						<p
							class="text-muted-foreground max-md:text-base max-md:leading-7 md:text-lg md:leading-8"
						>
							{{ $t(`${contentKey}.experience`) }}
						</p>
					</section>
				</div>
			</div>
		</template>
	</Scaffold>
</template>
