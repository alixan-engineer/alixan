<template>
	<footer class="space-y-8" id="footer">
		<div class="py-6 flex items-center justify-between border-y border-dashed">
			<div class="space-y-4">
				<Logo />
				<p class="text-base text-muted-foreground tracking-wide">
					{{ $t('footer.caption') }}
				</p>
			</div>

			<Button
				href="mailto:alixan.engineer@gmail.com"
				target="_blank"
				variant="ghost"
				class="max-md:hidden!"
			>
				alixan.engineer@gmail.com
			</Button>
		</div>

		<div class="site-footer__bottom">
			<p class="text-base font-medium text-muted-foreground text-center">
				{{ $t('footer.copyright') }}
			</p>
		</div>
	</footer>
</template>
