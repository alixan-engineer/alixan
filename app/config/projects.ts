interface ProjectTopic {
	id: string;
}

export interface CommercialProject {
	slug: string;
	image: string;
	screenshots: string[];
	topics: ProjectTopic[];
}

export const commercialProjects: CommercialProject[] = [
	{
		slug: 'kks',
		image: '/img/projects/kks.webp',
		screenshots: [
			`/overview/kks/1.webp`,
			`/overview/kks/2.webp`,
			`/overview/kks/3.webp`,
		],
		topics: [{ id: 'billing' }, { id: 'architecture' }, { id: 'integration' }],
	},
	{
		slug: 'halyk',
		image: '/img/projects/halyk.svg',
		screenshots: [],
		topics: [{ id: 'products' }, { id: 'stability' }, { id: 'workflow' }],
	},
	{
		slug: 'alser',
		image: '/img/projects/alser.webp',
		screenshots: [
			`/overview/alser/1.webp`,
			`/overview/alser/2.webp`,
			`/overview/alser/3.webp`,
		],
		topics: [{ id: 'storefront' }, { id: 'operations' }, { id: 'leadership' }],
	},
	{
		slug: 'anticor',
		image: '/img/projects/anticor.webp',
		screenshots: [
			`/overview/anticor/1.webp`,
			`/overview/anticor/2.webp`,
			`/overview/anticor/3.webp`,
		],
		topics: [{ id: 'portal' }, { id: 'modules' }, { id: 'maintenance' }],
	},
	{
		slug: 'ryware',
		image: '/img/projects/ryware.webp',
		screenshots: [],
		topics: [{ id: 'refactoring' }, { id: 'performance' }, { id: 'delivery' }],
	},
];
