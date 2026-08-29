<script setup lang="ts">
import { ExternalLink, Sparkles } from '@lucide/vue';

const list = ['React', 'Vue', 'Angular', 'Flutter', 'NestJS', 'MongoDB'];
</script>

<template>
	<div class="relative isolate h-150 overflow-hidden border-b">
		<picture
			class="hero-art absolute inset-0 -z-10 block overflow-hidden pointer-events-none"
			aria-hidden="true"
		>
			<source
				media="(min-width: 768px)"
				srcset="/img/hero/hero-art-desktop.webp"
			/>
			<img
				src="/img/hero/hero-art-mobile.webp"
				alt=""
				width="1122"
				height="1402"
				loading="eager"
				fetchpriority="high"
				class="size-full object-cover"
			/>
		</picture>

		<div
			class="max-w-section relative z-10 mx-auto h-full flex flex-col items-center justify-center gap-10 px-4"
		>
			<div
				class="max-md:px-3 max-md:py-1 md:px-5 md:py-2.5 flex items-center max-md:gap-1.5 md:gap-2.5 bg-accent text-accent-foreground border rounded-3xl"
			>
				<Sparkles class="max-md:size-4" />
				<span class="max-md:text-sm md:text-base font-medium">{{ $t('home.hero.greeting') }}</span>
			</div>

			<SectionTitle>{{ $t('home.hero.title') }}</SectionTitle>

			<SectionSubtitle class="text-foreground/80!">
				{{ $t('home.hero.description') }}
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
					{{ $t('home.hero.resume') }}
					<template #trailing>
						<ExternalLink />
					</template>
				</Button>
			</div>

			<div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
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
.hero-art {
	opacity: 0.72;
	-webkit-mask-image: radial-gradient(
		ellipse 88% 82% at center,
		transparent 42%,
		black 80%
	);
	mask-image: radial-gradient(
		ellipse 88% 82% at center,
		transparent 42%,
		black 80%
	);
}

@media (max-width: 767px) {
	.hero-art {
		opacity: 0.48;
		-webkit-mask-image: radial-gradient(
			ellipse 92% 72% at center,
			transparent 38%,
			black 76%
		);
		mask-image: radial-gradient(
			ellipse 92% 72% at center,
			transparent 38%,
			black 76%
		);
	}
}

@media (prefers-reduced-motion: no-preference) {
	.hero-art img {
		animation: hero-art-drift 14s ease-in-out infinite alternate;
	}
}

@keyframes hero-art-drift {
	from {
		transform: scale(1.01);
	}

	to {
		transform: scale(1.035);
	}
}
</style>
