<script setup lang="ts"></script>

<template>
	<footer class="border-t md:pt-12 max-md:pt-8 pb-4 px-4 space-y-10">
		<div class="w-full max-w-container mx-auto">
			<div class="flex items-center gap-4 max-md:flex-col">
				<div class="space-y-3">
					<Logo />
					<p
						class="md:text-base max-md:text-md font-normal text-muted-foreground"
					>
						{{ $t('home.footer.line1') }}<br />
						{{ $t('home.footer.line2') }}
					</p>
				</div>
				<div class="flex-1" />
				<div class="max-md:w-full flex gap-4">
					<LangButton class="max-md:w-full" />
					<ThemeButton class="max-md:w-full" />
				</div>
			</div>
		</div>

		<p class="md:text-lg max-md:text-md text-muted-foreground text-center">
			© 2026 Alixan
		</p>
	</footer>
</template>
