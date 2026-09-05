<script setup lang="ts">
import { ExternalLink, Sparkles } from '@lucide/vue';

const list = ['React', 'Vue', 'Angular', 'Flutter', 'NestJS', 'MongoDB'];
</script>

<template>
	<div class="hero relative isolate h-170 overflow-hidden">
		<div
			class="hero-space hero-space--dark absolute inset-0 -z-10"
		>
			<div class="hero-orb hero-orb--dark" />
		</div>
		<div
			class="hero-space hero-space--light absolute inset-0 -z-10"
		>
			<div class="hero-orb hero-orb--light" />
		</div>

		<div
			class="max-w-section h-full relative z-10 mx-auto flex flex-col items-center justify-center md:gap-10 max-md:gap-8"
		>
			<div
				class="hero-greeting max-md:px-3 max-md:py-1 md:px-5 md:py-2.5 flex items-center max-md:gap-1.5 md:gap-2.5 border rounded-3xl"
			>
				<Sparkles class="max-md:size-4" />
				<span class="max-md:text-sm md:text-base font-medium">
					{{ $t('home.hero.greeting') }}
				</span>
			</div>

			<div class="space-y-3">
				<SectionTitle>{{ $t('home.hero.title') }}</SectionTitle>
				<SectionSubtitle class="text-foreground/80! leading-7">
					{{ $t('home.hero.description') }}
				</SectionSubtitle>
			</div>

			<div
				class="w-full px-4 flex items-center justify-center gap-4 max-md:flex-col"
			>
				<CTAButton class="hero-primary max-md:w-full" />
				<Button
					size="responsive"
					color="secondary"
					variant="outlined"
					class="hero-secondary max-md:w-full"
					href="/CV-Alikhan.pdf"
					target="_blank"
				>
					{{ $t('home.hero.resume') }}
					<template #trailing>
						<ExternalLink />
					</template>
				</Button>
			</div>

			<div
				class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4"
			>
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

<style scoped lang="scss">
.hero::after {
	position: absolute;
	z-index: 1;
	right: 0;
	bottom: 0;
	left: 0;
	height: 8rem;
	pointer-events: none;
	content: '';
	background: linear-gradient(180deg, transparent, var(--background));
}

.hero-space {
	transition: opacity 240ms ease;
}

.hero-space--light {
	background: linear-gradient(180deg, #f7fcff 0%, #eaf7ff 58%, #f8fcff 100%);
}

.hero-space--dark {
	display: none;
	background:
		radial-gradient(
			circle at 8% 22%,
			rgb(82 180 255 / 0.55) 0 0.8px,
			transparent 1.5px
		),
		radial-gradient(
			circle at 22% 72%,
			rgb(147 211 255 / 0.42) 0 0.8px,
			transparent 1.5px
		),
		radial-gradient(
			circle at 38% 14%,
			rgb(255 255 255 / 0.42) 0 0.7px,
			transparent 1.4px
		),
		radial-gradient(
			circle at 64% 78%,
			rgb(74 171 255 / 0.5) 0 0.8px,
			transparent 1.5px
		),
		radial-gradient(
			circle at 82% 28%,
			rgb(173 221 255 / 0.4) 0 0.7px,
			transparent 1.4px
		),
		radial-gradient(
			circle at 94% 66%,
			rgb(57 163 255 / 0.42) 0 0.8px,
			transparent 1.5px
		),
		linear-gradient(180deg, #020810 0%, #03101c 58%, #02070d 100%);
	background-size:
		173px 157px,
		229px 211px,
		277px 251px,
		193px 181px,
		251px 223px,
		313px 271px,
		auto;
}

:global(.dark .hero-space--light) {
	display: none;
}

:global(.dark .hero-space--dark) {
	display: block;
}

.hero-space::after {
	position: absolute;
	inset: 0;
	content: '';
}

.hero-space--light::after {
	background:
		radial-gradient(
			ellipse 55% 30% at 50% 67%,
			rgb(0 158 241 / 0.12),
			transparent 78%
		),
		linear-gradient(
			90deg,
			rgb(255 255 255 / 0.78) 0%,
			transparent 22% 78%,
			rgb(255 255 255 / 0.78) 100%
		);
}

.hero-space--dark::after {
	background:
		radial-gradient(
			ellipse 55% 30% at 50% 67%,
			rgb(0 158 241 / 0.16),
			transparent 78%
		),
		linear-gradient(
			90deg,
			rgb(2 8 16 / 0.94) 0%,
			transparent 22% 78%,
			rgb(2 8 16 / 0.94) 100%
		);
}

.hero-orb {
	position: absolute;
	top: -29rem;
	left: 50%;
	width: min(78rem, 134vw);
	aspect-ratio: 1.55;
	transform: translateX(-50%);
	border-radius: 50%;
}

.hero-orb--light {
	background:
		radial-gradient(
			ellipse 66% 54% at 50% 88%,
			rgb(87 190 238 / 0.28),
			transparent 64%
		),
		radial-gradient(
			ellipse at 50% 104%,
			#caefff 0%,
			#dff5ff 35%,
			#edf9ff 63%,
			#f8fcff 88%
		);
	box-shadow:
		0 8px 5px -4px rgb(62 193 235 / 0.52),
		0 16px 18px -8px rgb(0 170 230 / 0.32),
		0 32px 56px -17px rgb(0 142 255 / 0.24),
		0 62px 120px -38px rgb(0 151 255 / 0.18);
}

.hero-orb--dark {
	background:
		radial-gradient(
			ellipse 66% 54% at 50% 88%,
			rgb(18 144 204 / 0.42),
			transparent 64%
		),
		radial-gradient(
			ellipse at 50% 104%,
			#0b4667 0%,
			#082b42 35%,
			#051726 63%,
			#020810 88%
		);
	box-shadow:
		0 8px 5px -4px rgb(144 240 255 / 0.9),
		0 16px 18px -8px rgb(0 194 255 / 0.72),
		0 32px 56px -17px rgb(0 142 255 / 0.58),
		0 62px 120px -38px rgb(0 151 255 / 0.42);
}

.hero-greeting {
	color: #16425b;
	background: rgb(255 255 255 / 0.68);
	border-color: rgb(20 145 199 / 0.2);
	box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.7);
	-webkit-backdrop-filter: blur(12px);
	backdrop-filter: blur(12px);
}

:deep(.hero-primary) {
	color: #03111c;
	background: linear-gradient(135deg, #eafaff 0%, #8be6ff 100%);
	border-color: rgb(201 247 255 / 0.9);
	box-shadow: 0 8px 28px rgb(0 176 255 / 0.2);
}

:deep(.hero-primary:hover) {
	background: linear-gradient(135deg, #fff 0%, #a9efff 100%);
}

:deep(.hero-secondary) {
	color: #16425b;
	background: rgb(255 255 255 / 0.66);
	border-color: rgb(20 145 199 / 0.24);
	-webkit-backdrop-filter: blur(12px);
	backdrop-filter: blur(12px);
}

:deep(.hero-secondary:hover) {
	color: #082f49;
	background: rgb(224 247 255 / 0.9);
	border-color: rgb(20 145 199 / 0.42);
}

:global(.dark .hero-greeting) {
	color: rgb(232 248 255 / 0.94);
	background: rgb(5 25 39 / 0.64);
	border-color: rgb(128 220 255 / 0.24);
	box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.05);
}

:global(.dark .hero-secondary) {
	color: rgb(231 248 255 / 0.94);
	background: rgb(5 24 38 / 0.68);
	border-color: rgb(125 218 255 / 0.28);
}

:global(.dark .hero-secondary:hover) {
	color: #fff;
	background: rgb(11 53 77 / 0.86);
	border-color: rgb(132 225 255 / 0.48);
}

@media (max-width: 767px) {
	.hero-orb {
		top: -15rem;
		width: 165vw;
		min-width: 40rem;
	}
}
</style>
