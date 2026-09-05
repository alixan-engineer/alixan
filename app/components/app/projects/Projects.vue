<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import { commercialProjects } from '~/config/projects';

const localePath = useLocalePath();
</script>

<template>
	<Section>
		<div class="space-y-1.5">
			<SectionSubtitle>{{ $t('home.projects.eyebrow') }}</SectionSubtitle>
			<SectionTitle>{{ $t('home.projects.title') }}</SectionTitle>
		</div>

		<swiper-container
			free-mode
			slides-per-view="auto"
			:space-between="24"
			class="w-full h-auto cursor-grab"
		>
			<swiper-slide
				v-for="item in commercialProjects"
				:key="item.slug"
				class="w-70 h-130"
			>
				<Card
					:image="item.image"
					:image-alt="`home.projects.items.${item.slug}.title`"
					:title="`home.projects.items.${item.slug}.title`"
					:description="`home.projects.items.${item.slug}.description`"
					button="home.projects.role"
					:button-to="localePath(`/projects/${item.slug}`)"
				>
					<template #trailing>
						<ArrowRight />
					</template>
				</Card>
			</swiper-slide>
		</swiper-container>
	</Section>
</template>
