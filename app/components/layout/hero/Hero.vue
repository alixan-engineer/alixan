<script setup lang="ts">
const stack = ['Nuxt', 'React', 'Angular', 'Flutter', 'NestJS', 'MongoDB'];
</script>

<template>
	<div
		class="w-full md:h-[calc(80vh-24px-56px)] max-md:h-220 flex items-center justify-between relative"
		id="hero"
	>
		<div class="space-y-7 max-w-3xl z-10">
			<p
				class="text-base font-medium text-muted-foreground fade [animation-delay:600ms] max-md:text-center"
			>
				{{ $t('hero.kicker') }}
			</p>

			<h1
				class="max-sm:text-5xl max-md:text-6xl md:text-7xl font-bold max-md:text-center fade-up [animation-delay:200ms]"
			>
				{{ $t('hero.nameFirst') }}<br />{{ $t('hero.nameLast') }}
			</h1>

			<p
				class="max-md:text-base md:text-lg font-medium uppercase text-muted-foreground max-md:text-center fade-up [animation-delay:400ms]"
			>
				• {{ $t('hero.role') }}
			</p>

			<p
				class="max-w-xl max-md:text-md md:text-lg font-medium text-muted-foreground max-md:leading-6 md:leading-8 max-md:text-center fade-up [animation-delay:800ms]"
			>
				{{ $t('hero.description') }}
			</p>

			<div
				class="flex items-center gap-4 max-md:justify-center fade-up [animation-delay:1000ms]"
			>
				<Button size="lg" color="secondary" variant="outlined" href="#projects">
					{{ $t('hero.primaryCta') }}
				</Button>
				<ContactButton />
			</div>

			<hr class="border-dashed fade [animation-delay:1200ms]" />

			<div
				class="flex items-center flex-wrap gap-4 max-md:justify-center fade-up [animation-delay:1200ms]"
			>
				<span
					v-for="item in stack"
					:key="item"
					class="text-sm font-medium text-muted-foreground uppercase tracking-wide"
				>
					{{ item }}
				</span>
			</div>
		</div>

		<Bot />
	</div>
</template>
