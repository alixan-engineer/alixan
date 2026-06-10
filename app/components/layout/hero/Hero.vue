<script setup lang="ts">
const stack = ['Nuxt', 'React', 'Angular', 'Flutter', 'NestJS', 'MongoDB'];
</script>

<template>
	<div
		class="w-full max-md:h-100 md:h-150 flex items-center justify-between"
		id="hero"
	>
		<div class="space-y-7 max-w-3xl">
			<p class="text-base font-medium text-muted-foreground">
				{{ $t('hero.kicker') }}
			</p>

			<h1 class="max-md:text-6xl md:text-7xl font-bold max-md:text-center">
				{{ $t('hero.nameFirst') }}<br />{{ $t('hero.nameLast') }}
			</h1>

			<p
				class="max-md:text-base md:text-lg font-medium uppercase text-muted-foreground max-md:text-center"
			>
				• {{ $t('hero.role') }}
			</p>

			<p
				class="max-md:text-md md:text-lg font-medium text-muted-foreground max-md:leading-6 md:leading-8 max-md:text-center"
			>
				{{ $t('hero.description') }}
			</p>

			<div class="flex items-center gap-4 max-md:justify-center">
				<Button size="lg" color="secondary" variant="outlined" href="#projects">
					{{ $t('hero.primaryCta') }}
				</Button>
				<ContactButton />
			</div>

			<hr class="border-dashed" />

			<div class="flex items-center gap-4 max-md:justify-center">
				<span
					v-for="item in stack"
					:key="item"
					class="text-sm font-medium text-muted-foreground uppercase tracking-wide"
				>
					{{ item }}
				</span>
			</div>
		</div>

		<Bot class="max-lg:hidden" />
	</div>
</template>
