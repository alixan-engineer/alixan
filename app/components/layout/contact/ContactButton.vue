<script setup lang="ts">
import ContactDrawer from './ContactDrawer.vue';

const drawer = useDrawer();

const openDrawer = () => {
	drawer.open(ContactDrawer, {
		width: '340px',
		height: '140px',
		position: 'bottom',
	});
};
</script>

<template>
	<Button size="lg" variant="outlined" color="secondary" @click="openDrawer">
		{{ $t('hero.secondaryCta') }}
	</Button>
</template>
