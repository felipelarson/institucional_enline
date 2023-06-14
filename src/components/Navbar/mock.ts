import { NavItem } from './types';

export const NAV_ITEMS: Array<NavItem> = [
	// {
	// 	label: 'Home',
	// 	href: '/'
	// },
	{
		label: 'Company',
		href: '/company'
	},
	{
		label: 'Solutions',
		href: '/solutions',
		children: [
			{
				icon: 'icon_liveview',
				label: 'Enline LiveView',
				subLabel: 'Experience real-time data on your energy assets.',
				href: '/solutions/liveview'
			},
			{
				icon: 'icon_optimax',
				label: 'Enline OptiMax',
				subLabel: 'Achieve peak efficiency in your energy infrastructure.',
				href: '/solutions/optimax'
			},
			{
				icon: 'icon_predictpro',
				label: 'Enline PredictPro',
				subLabel: 'Harness the power of AI for forecasting potential issues.',
				href: '/solutions/predictpro'
			},
			{
				icon: 'icon_safeguard',
				label: 'Enline SafeGuard',
				subLabel: 'Implement strategies to minimize the risk of wildfires.',
				href: '/solutions/safeguard'
			},
			{
				icon: 'icon_smartdesign',
				label: 'Enline SmartDesign',
				subLabel: 'Utilize our advanced simulation tools to plan and design energy.',
				href: '/solutions/smartdesign'
			}
		]
	},
	{
		label: 'Customer Segments',
		href: '/customer'
	},
	{
		label: 'Technology',
		href: '/technology'
	},
	{
		label: 'Learn & Tutorials',
		href: '/learn'
	},
	{
		label: ' Updates',
		href: '/updates'
	}
	// {
	// 	label: 'Newsroom',
	// 	href: '/newsroom'
	// },
	// {
	// 	label: 'Careers',
	// 	href: '/careers'
	// }
];
