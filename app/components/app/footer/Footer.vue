<script setup lang="ts"></script>

<template>
	<footer class="border-t pt-12 pb-4 space-y-10">
		<div class="w-full max-w-container mx-auto">
			<div class="flex items-center gap-4">
				<div class="space-y-3">
					<Logo />
					<p class="text-base font-light text-muted-foreground">
						{{ $t('home.footer.line1') }}<br />
						{{ $t('home.footer.line2') }}
					</p>
				</div>
				<div class="flex-1" />
				<LangButton />
				<ThemeButton />
			</div>
		</div>

		<p class="text-lg text-muted-foreground text-center">© 2026 Alixan</p>
	</footer>
</template>
