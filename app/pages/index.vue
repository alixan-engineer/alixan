<template>
	<Scaffold>
		<template #app-bar>
			<Header />
		</template>

		<template #body>
			<Hero />
			<main class="max-w-section mx-auto">
				<AboutMe />
				<Skills />
				<Startups />
				<Projects />
				<FAQ />
				<CTA />
			</main>
			<Footer />
		</template>
	</Scaffold>
</template>
