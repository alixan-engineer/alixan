<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

interface CardProps {
	image?: string;
	imageAlt?: string;
	title: string;
	description?: string;
	button?: string;
	href?: string;
	buttonHref?: string;
	buttonTo?: RouteLocationRaw;
}

withDefaults(defineProps<CardProps>(), {
	image: undefined,
	imageAlt: '',
	description: undefined,
	button: undefined,
	href: undefined,
	buttonHref: undefined,
	buttonTo: undefined,
});

const emit = defineEmits<{
	onTap: [];
}>();
</script>

<template>
	<article class="relative size-full flex flex-col border rounded-4xl">
		<a
			v-if="href"
			:href="href"
			:aria-label="$t(title)"
			target="_blank"
			rel="noreferrer"
			class="absolute inset-0 z-10 rounded-4xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
		/>
		<img
			v-if="image"
			:src="image"
			:alt="$t(imageAlt)"
			loading="lazy"
			class="w-full h-62 object-cover rounded-4xl border-b"
		/>
		<div class="flex-1 flex flex-col justify-between gap-6 px-5 py-6">
			<div class="space-y-4">
				<h3 class="text-2xl font-semibold leading-6">
					{{ $t(title) }}
				</h3>
				<p v-if="description" class="text-base text-muted-foreground">
					{{ $t(description) }}
				</p>
			</div>
			<span
				v-if="button && href"
				class="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-secondary bg-secondary px-4 text-base font-medium text-secondary-foreground [&_svg]:size-6"
			>
				{{ $t(button) }}
				<slot name="trailing" />
			</span>
			<Button
				v-else-if="button"
				variant="filled"
				color="secondary"
				class="w-full"
				:href="buttonHref"
				:to="buttonTo"
				:target="buttonHref && !buttonTo ? '_blank' : undefined"
				:rel="buttonHref && !buttonTo ? 'noreferrer' : undefined"
				@click="buttonHref || buttonTo ? undefined : emit('onTap')"
			>
				{{ $t(button) }}
				<template #trailing>
					<slot name="trailing" />
				</template>
			</Button>
		</div>
	</article>
</template>
