<script setup lang="ts">
import Layout from '@/components/ui/layout/Layout.vue';
import Scaffold from '@/components/ui/scaffold/Scaffold.vue';
import Sidebar from '@/components/ui/sidebar/Sidebar.vue';
import { useSidebar } from '@/composables/useSidebar';
import { House, Menu, ShoppingBag } from '@lucide/vue';

const sidebar = useSidebar();

const sections = [
	{
		label: 'Страницы',
		pages: [
			{
				id: '1',
				title: 'Резюме',
				icon: House,
			},
			{
				id: '',
				title: 'Мои проекты',
				icon: ShoppingBag,
			},
			{
				id: '',
				title: 'Коммерческие проекты',
				icon: ShoppingBag,
			},
			{
				id: '',
				title: 'Блог',
				icon: ShoppingBag,
			},
		],
	},
];

const selected = ref<string>(sections[0]!.pages[0]!.id);

const selectPage = (id: string) => {
	selected.value = id;
};
</script>

<template>
	<Layout>
		<template #sidebar>
			<Sidebar :sections="sections" :selected="selected" @select="selectPage">
				<template #logo>
					<Logo />
				</template>
			</Sidebar>
		</template>

		<template #scaffold>
			<Scaffold>
				<template #app-bar>
					<AppBar variant="compact" title="appBar.dashboard">
						<template #leading>
							<IconButton
								variant="ghost"
								color="default"
								@click="sidebar.toggle()"
							>
								<Menu />
							</IconButton>
						</template>
						<template #body>
							<NuxtPage />
						</template>
					</AppBar>
				</template>
				<template #body>
					<NuxtPage />
				</template>
			</Scaffold>
		</template>
	</Layout>
</template>
