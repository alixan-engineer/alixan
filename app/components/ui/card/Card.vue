<script setup lang="ts">
interface CardProps {
	image?: string;
	imageAlt?: string;
	title: string;
	description?: string;
	button?: string;
	buttonHref?: string;
}

withDefaults(defineProps<CardProps>(), {
	image: undefined,
	imageAlt: '',
	description: undefined,
	button: undefined,
	buttonHref: undefined,
});

const emit = defineEmits<{
	onTap: [];
}>();
</script>

<template>
	<article class="flex flex-col border rounded-4xl">
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
			<Button
				v-if="button"
				variant="filled"
				color="secondary"
				class="w-full"
				:href="buttonHref"
				:target="buttonHref ? '_blank' : undefined"
				rel="noreferrer"
				@click="buttonHref ? undefined : emit('onTap')"
			>
				{{ $t(button) }}
				<template #trailing>
					<slot name="trailing" />
				</template>
			</Button>
		</div>
	</article>
</template>
