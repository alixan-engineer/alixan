<script setup lang="ts">
type ExperienceItem = {
	startDate: string;
	endDate: string;
	company: string;
	role: string;
	summary: string;
	points: string[];
	stack: string[];
};

type RawExperienceItem = {
	startDate: string;
	endDate: string;
	company: string;
	role: string;
	summary: string;
	points?: string[];
	stack?: string[];
};

const { t, tm, rt } = useI18n();

const translateMessage = (message: string) =>
	typeof message === 'string' ? message : rt(message);

const items = computed<ExperienceItem[]>(() =>
	(tm('experience.items') as RawExperienceItem[]).map(item => ({
		startDate: translateMessage(item.startDate),
		endDate: translateMessage(item.endDate),
		company: translateMessage(item.company),
		role: translateMessage(item.role),
		summary: translateMessage(item.summary),
		points: (item.points ?? []).map(translateMessage),
		stack: (item.stack ?? []).map(translateMessage),
	})),
);
</script>

<template>
	<div class="space-y-4" id="experience">
		<h5 class="text-h5-uppercase">{{ t('experience.eyebrow') }}</h5>
		<h1 class="text-h1">{{ t('experience.title') }}</h1>
		<h3 class="text-h3">{{ t('experience.description') }}</h3>

		<div
			class="relative my-14 before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-px before:-translate-x-1/2 before:bg-[linear-gradient(transparent,rgba(15,23,42,0.12),transparent)] dark:before:bg-[linear-gradient(transparent,rgba(255,255,255,0.2),transparent)] overflow-hidden grid gap-7 max-w-5xl mx-auto"
		>
			<div
				v-for="(item, i) in items"
				:key="i"
				class="relative max-lg:after:hidden after:content-[''] after:absolute after:top-10 after:left-1/2 after:-translate-x-1/2 after:size-4 after:rounded-full after:bg-white after:border after:border-slate-300 after:shadow-[0_0_0_8px_rgba(15,23,42,0.04)] dark:after:bg-[#050505] dark:after:border-white/22 dark:after:shadow-[0_0_0_8px_rgba(255,255,255,0.035)]"
			>
				<Card
					:class="
						cn('max-w-md overflow-hidden', i % 2 === 0 ? 'mr-auto' : 'ml-auto')
					"
				>
					<div class="space-y-4">
						<div
							class="flex items-center justify-between text-sm text-muted-foreground uppercase"
						>
							<p class="tracking-wider flex-1">{{ item.role }}</p>
							<div>
								<p>{{ item.startDate }}</p>
								<p>{{ item.endDate }}</p>
							</div>
						</div>

						<h3 class="text-2xl font-semibold">{{ item.company }}</h3>

						<p class="text-base text-foreground">{{ item.summary }}</p>

						<ul class="list-disc pl-4 text-base text-muted-foreground">
							<li v-for="point in item.points" :key="point">{{ point }}</li>
						</ul>

						<div class="inline-flex gap-4 flex-wrap">
							<Chip v-for="itemStack in item.stack" :key="itemStack">
								{{ itemStack }}
							</Chip>
						</div>
					</div>
				</Card>
			</div>
		</div>

		<CVButton />
	</div>
</template>
