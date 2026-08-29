<script setup lang="ts">
const props = defineProps<{
	close: () => void;
}>();

const list = [
	{
		icon: '/img/contacts/wa.svg',
		link: 'https://wa.me/alixan.engineer',
		label: '@alixan.engineer',
	},
	{
		link: 'https://t.me/alixan_engineer',
		icon: '/img/contacts/tg.svg',
		label: '@alixan_engineer',
	},
	{
		link: 'mailto:alixan.engineer@gmail.com',
		icon: '/img/contacts/gmail.svg',
		label: 'alixan.engineer@gmail.com',
	},
] as const;
</script>

<template>
	<div class="size-full flex flex-col gap-6 px-6 py-8">
		<p class="text-2xl font-semibold text-center">
			{{ $t('home.cta.dialog.title') }}
		</p>

		<div class="flex-1" />

		<div class="space-y-5">
			<a
				v-for="(item, i) in list"
				:key="i"
				:href="item.link"
				target="_blank"
				class="w-full p-4 flex items-center gap-5 cursor-pointer rounded-2xl border bg-card"
			>
				<img
					:src="item.icon"
					:alt="$t('home.cta.dialog.contactIconAlt')"
					loading="lazy"
					class="size-11 object-contain"
				/>
				<span class="text-xm font-medium">{{ item.label }}</span>
			</a>
		</div>

		<div class="flex-1" />

		<Button variant="filled" color="primary" @click="props.close()">
			{{ $t('home.cta.dialog.close') }}
		</Button>
	</div>
</template>
