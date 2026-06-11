<template>
	<Card
		class="max-w-5xl mx-auto max-md:-mt-67.5 fade-up [animation-delay:1400ms]"
		id="cv"
	>
		<div class="space-y-10">
			<h5 class="text-h5-uppercase">{{ $t('about.eyebrow') }}</h5>

			<h1 class="text-h1 text-balance">{{ $t('about.title') }}</h1>

			<div
				class="grid max-md:grid-cols-1 md:grid-cols-3 gap-6 text-base text-muted-foreground font-medium md:text-center"
			>
				<p>{{ $t('about.paragraph1') }}</p>
				<p>{{ $t('about.paragraph2') }}</p>
				<p>{{ $t('about.paragraph3') }}</p>
			</div>

			<CVButton />
		</div>
	</Card>
</template>
