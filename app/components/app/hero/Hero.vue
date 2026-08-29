<script setup lang="ts">
import { ExternalLink, Sparkles } from '@lucide/vue';

const list = ['React', 'Vue', 'Angular', 'Flutter', 'NestJS', 'MongoDB'];
</script>

<template>
	<div class="h-150 border-b">
		<!-- <picture
		class="hero-art absolute inset-x-0 -z-10 block h-150 overflow-hidden pointer-events-none"
	>
		<source media="(min-width: 1280px)" :srcset="desktopHeroImage" />
		<img
			:src="mobileHeroImage"
			:alt="$t('images.abstractAlt')"
			width="1122"
			height="1402"
			loading="eager"
			fetchpriority="high"
			class="size-full object-cover"
		/>
	</picture> -->

		<div
			class="max-w-section mx-auto h-full flex flex-col items-center justify-center gap-10"
		>
			<div
				class="max-md:px-3 max-md:py-1 md:px-5 md:py-2.5 flex items-center max-md:gap-1.5 md:gap-2.5 bg-accent text-accent-foreground border rounded-3xl"
			>
				<Sparkles class="max-md:size-4" />
				<span class="max-md:text-sm md:text-base font-medium">Привет, я</span>
			</div>

			<SectionTitle>Алихан, разработчик </SectionTitle>

			<SectionSubtitle class="text-foreground/80!">
				Запускаю IT продукты с нуля: архитектура, код, инфраструктура. Работаю
				там, где нужно не просто “сделать”, а довести до результата.
			</SectionSubtitle>

			<div class="flex items-center gap-4">
				<CTAButton />
				<Button
					size="responsive"
					color="secondary"
					variant="outlined"
					class="mx-auto w-fit"
					href="/CV-Alikhan.pdf"
					target="_blank"
				>
					Полное резюме (PDF)
					<template #trailing>
						<ExternalLink />
					</template>
				</Button>
			</div>

			<div class="flex items-center justify-center gap-x-5 gap-y-2">
				<span
					v-for="(tile, i) in list"
					:key="i"
					class="max-md:text-sm md:text-xm text-foreground/80 uppercase"
				>
					{{ $t(tile) }}
				</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
@media (max-width: 1279px) {
	.hero-art {
		opacity: 0.65;
		-webkit-mask-image: radial-gradient(
			ellipse 72% 52% at center,
			transparent 28%,
			black 78%
		);
		mask-image: radial-gradient(
			ellipse 72% 52% at center,
			transparent 28%,
			black 78%
		);
	}
}

@media (max-width: 639px) {
	.hero-art {
		opacity: 0.5;
		-webkit-mask-image: radial-gradient(
			ellipse 82% 50% at center,
			transparent 36%,
			black 82%
		);
		mask-image: radial-gradient(
			ellipse 82% 50% at center,
			transparent 36%,
			black 82%
		);
	}
}
</style>
