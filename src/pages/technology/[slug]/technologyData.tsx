interface ITechnologyData {
	urlBanner: string;
	urlBannerMobile: string;
	titleBannerHero: string;
	subtitleBannerHero: string;
	descriptionBannerHero: string;
	urlImageBannerHero: string;
	description: string;
	cardList: {
		icon: string;
		title: string;
		text: string;
	}[];
	titleBanner: string;
	descriptionBanner: string;
	buttonList: {
		title: string;
		link: string;
		urlButton: string;
	}[];
	sectionList: {
		title: string;
		text: string;
		reverse: boolean;
		textImage: string;
		titleCardBanner: string;
	}[];
}

export const TECHNOLOGY_DATA: { [key: string]: ITechnologyData } = {
	dlr: {
		urlBanner: require('@/assets/img/banner_title_dlr.png'),
		urlBannerMobile: require('@/assets/img/screen_dlr_tech.png'),
		titleBannerHero: 'Dynamic Line Rating (DLR)',
		subtitleBannerHero: 'Unlock the Full Potential of Your Power Lines',
		descriptionBannerHero: "Enhance Grid Efficiency, Reliability, and Capacity with Enline's Dynamic Line Rating Solutions.",
		urlImageBannerHero: require('@/assets/img/screen_dlr_tech.png'),
		description:
			"Dynamic Line Rating (DLR) is a cutting-edge technology that enables power grid operators to optimize the capacity and performance of their transmission lines. By providing real-time monitoring and data-driven insights, Enline's DLR solutions help improve grid reliability, reduce congestion, and maximize the utilization of existing assets.",
		cardList: [
			{
				icon: 'monitoring',
				title: 'Increased Transmission Capacity',
				text: 'DLR adjusts the line ratings based on real-time weather conditions, allowing for higher utilization of existing power lines.'
			},
			{
				icon: 'realTime',
				title: 'Improved Grid Reliability',
				text: 'Monitor and analyze transmission lines in real-time, reducing the risk of overloading and avoiding potential outages.'
			},
			{
				icon: 'predictive',
				title: 'Reduced COPEX Costs',
				text: 'Efficiently manage power flows and eliminate the need for costly infrastructure upgrades.'
			}
		],
		titleBanner: "Enline's DLR Solutions",
		descriptionBanner:
			"Our Dynamic Line Rating solutions are seamlessly integrated with Enline's suite of advanced energy management products, including Enline LiveView, Enline PredictPro, and Enline OptiMax. Together, these tools provide comprehensive monitoring, predictive analytics, and optimization strategies to ensure efficient power transmission and distribution.",
		buttonList: [
			{
				title: 'Enline LiveView',
				link: require(`@/assets/svg/icon_liveview.svg`),
				urlButton: '/solutions/liveview'
			},
			{
				title: 'Enline PredictPro',
				link: require(`@/assets/svg/icon_predictpro.svg`),
				urlButton: '/solutions/predictpro'
			},
			{
				title: 'Enline OptiMax',
				link: require(`@/assets/svg/icon_optimax.svg`),
				urlButton: '/solutions/optimax'
			}
		],
		sectionList: [
			{
				title: "A leading utility company implemented Enline's Dynamic Line Rating solution, enabling them to maximize transmission capacity during periods of high demand.",
				text: 'By leveraging real-time weather data and advanced analytics, the utility was able to avoid costly infrastructure upgrades and reduce transmission line congestion. As a result, they achieved a 20% increase in transmission capacity and a 15% reduction in operational costs.',
				reverse: false,
				textImage: '20% increase in transmission capacity',
				titleCardBanner: "Discover how Enline's Dynamic Line Rating can transform your power grid operations"
			}
		]
	},
	landslide: {
		urlBanner: require('@/assets/img/banner_title_landslide.png'),
		urlBannerMobile: require('@/assets/img/screen_landslide.png'),
		titleBannerHero: 'Landslide Detection',
		subtitleBannerHero: 'Enhance Safety with Real-time Monitoring',
		descriptionBannerHero: "Mitigate Geotechnical Hazards with Enline's Advanced Landslide Detection Solutions.",
		urlImageBannerHero: require('@/assets/img/screen_landslide.png'),
		description:
			"Landslide detection is an essential technology that allows infrastructure managers to safeguard their assets in regions prone to geotechnical hazards. Enline's landslide detection solutions provide real-time monitoring and data-driven insights to promptly identify potential threats, enhancing safety, reducing risk, and maximizing asset protection.",
		cardList: [
			{
				icon: 'realTime',
				title: 'Real-time Threat Detection',
				text: "Enline's solutions monitor geological conditions in real-time, providing immediate alerts in the event of potential landslides."
			},
			{
				icon: 'guard',
				title: 'Increased Safety',
				text: 'Our technology reduces the risk of accidents and equipment damage by providing timely alerts, thereby enhancing the safety of your operations.'
			},
			{
				icon: 'enhanced',
				title: 'Cost-Effective Risk Management',
				text: 'Avoid costly repairs and downtime by proactively managing geotechnical risks with our advanced detection system.'
			}
		],
		titleBanner: "Enline's Landslide Detection Solutions",
		descriptionBanner:
			"Our landslide detection solutions are a part of Enline's suite of advanced infrastructure management tools, including Enline LiveView, Enline PredictPro, and Enline SafeGuard. Together, these tools provide comprehensive monitoring, predictive analytics, and risk management strategies to ensure the safety and integrity of your assets.",
		buttonList: [
			{
				title: 'Enline LiveView',
				link: require(`@/assets/svg/icon_liveview.svg`),
				urlButton: '/solutions/liveview'
			},
			{
				title: 'Enline PredictPro',
				link: require(`@/assets/svg/icon_predictpro.svg`),
				urlButton: '/solutions/predictpro'
			},
			{
				title: 'Enline SafeGuard',
				link: require(`@/assets/svg/icon_safeguard.svg`),
				urlButton: '/solutions/safeguard'
			}
		],
		sectionList: [
			{
				title: "A leading railway company implemented Enline's Landslide Detection solution, enabling them to monitor potential geotechnical hazards along their rail network.",
				text: 'By leveraging real-time data and advanced analytics, the company was able to promptly respond to potential landslides, avoiding costly repairs and service disruptions. As a result, they achieved a 30% reduction in geotechnical-related incidents and a 20% reduction in associated costs.',
				reverse: false,
				textImage: '30% reduction in geotechnical-related incidents',
				titleCardBanner: "Discover how Enline's Landslide Detection enhance safety and reliability in your operations."
			}
		]
	},
	sensorless: {
		urlBanner: require('@/assets/img/banner_title_sensorless.png'),
		urlBannerMobile: require('@/assets/img/screen_sensorless.png'),
		titleBannerHero: 'Sensorless Monitoring',
		subtitleBannerHero: 'Revolutionizing Asset Monitoring',
		descriptionBannerHero: "Embrace the Future of Asset Management with Enline's Sensorless Monitoring Solutions.",
		urlImageBannerHero: require('@/assets/img/screen_sensorless.png'),
		description:
			"Sensorless technology is a groundbreaking advancement in the field of asset monitoring, offering a maintenance-free and cost-effective approach to managing your critical infrastructure. Enline's sensorless monitoring solutions provide real-time data and insights without the need for physical sensors, streamlining operations and reducing maintenance costs.",
		cardList: [
			{
				icon: 'solution',
				title: 'Maintenance-Free Monitoring',
				text: 'Eliminate the need for additional hardware or fieldwork, reducing operational costs and simplifying asset management.'
			},
			{
				icon: 'enhanced',
				title: 'Enhanced Asset Performance',
				text: 'Utilize data-driven insights to optimize asset performance, extend asset lifespans, and boost overall efficiency.'
			},
			{
				icon: 'guard',
				title: 'Increased Reliability and Safety',
				text: 'Proactively identify potential risks and implement preventive measures to ensure the safety and reliability of your infrastructure.'
			}
		],
		titleBanner: "Enline's Sensorless Solutions",
		descriptionBanner:
			"Enline's sensorless innovative technology is seamlessly integrated with our suite of advanced energy management products, including Enline LiveView, Enline PredictPro, and Enline OptiMax. Combined, these tools offer comprehensive monitoring, predictive analytics, and optimization strategies for efficient asset management.",
		buttonList: [
			{
				title: 'Enline LiveView',
				link: require(`@/assets/svg/icon_liveview.svg`),
				urlButton: '/solutions/liveview'
			},
			{
				title: 'Enline PredictPro',
				link: require(`@/assets/svg/icon_predictpro.svg`),
				urlButton: '/solutions/predictpro'
			},
			{
				title: 'Enline OptiMax',
				link: require(`@/assets/svg/icon_optimax.svg`),
				urlButton: '/solutions/optimax'
			}
		],
		sectionList: [
			{
				title: "A global energy company adopted Enline's sensorless monitoring solution to manage their vast network of energy assets.",
				text: 'The maintenance-free approach eliminated the need for physical sensors and fieldwork, resulting in a 40% reduction in operational costs. Real-time data collection and analytics allowed the company to optimize asset performance, leading to a 10% increase in overall efficiency and a 25% extension of asset lifespans.',
				reverse: false,
				textImage: '25% extension of asset lifespans',
				titleCardBanner: "Discover how Enline's Sensorless Monitoring enhance safety and reliability in your operations."
			}
		]
	},
	vegetation_monitoring: {
		urlBanner: require('@/assets/img/banner_title_vegetation.png'),
		urlBannerMobile: require('@/assets/img/screen_vegetation.png'),
		titleBannerHero: 'Vegetation Monitoring',
		subtitleBannerHero: 'Protect Your Power Grid from Vegetation Threats',
		descriptionBannerHero: "Enhance Grid Reliability and Safety with Enline's Advanced Vegetation Monitoring Solutions.",
		urlImageBannerHero: require('@/assets/img/screen_vegetation.png'),
		description:
			"Vegetation growth around power lines poses significant risks to grid reliability and safety. Enline's Vegetation Monitoring technology offers a comprehensive approach to detecting, analyzing, and managing vegetation encroachment on your power infrastructure. Our advanced solutions provide real-time insights and predictive analytics to help you maintain a safe and efficient energy network.",
		cardList: [
			{
				icon: 'solution',
				title: 'Reduced Outages',
				text: 'Proactively monitor and manage vegetation growth around power lines, minimizing the risk of outages caused by tree contacts.'
			},
			{
				icon: 'enhanced',
				title: 'Cost-effective Maintenance',
				text: 'Optimize vegetation management operations with data-driven insights, minimizing maintenance costs and resource requirements.'
			},
			{
				icon: 'guard',
				title: 'Streamlined Regulatory Compliance',
				text: 'Stay ahead of regulatory requirements by maintaining a safe clearance distance between power lines and vegetation.'
			}
		],
		titleBanner: "Enline's Vegetation Monitoring Solutions",
		descriptionBanner:
			"Our Vegetation Monitoring solutions are designed to work seamlessly with Enline's suite of advanced energy management products, including Enline LiveView, Enline PredictPro, and Enline OptiMax. These tools offer comprehensive monitoring, predictive analytics, and optimization strategies to ensure a safe and reliable power grid.",
		buttonList: [
			{
				title: 'Enline LiveView',
				link: require(`@/assets/svg/icon_liveview.svg`),
				urlButton: '/solutions/liveview'
			},
			{
				title: 'Enline PredictPro',
				link: require(`@/assets/svg/icon_predictpro.svg`),
				urlButton: '/solutions/predictpro'
			},
			{
				title: 'Enline SafeGuard',
				link: require(`@/assets/svg/icon_safeguard.svg`),
				urlButton: '/solutions/safeguard'
			}
		],
		sectionList: [
			{
				title: "A regional utility company implemented Enline's Vegetation Monitoring technology to proactively manage vegetation growth around their power lines.",
				text: "The advanced analytics and real-time insights provided by Enline's solution enabled the utility to optimize maintenance operations and significantly reduce the risk of outages caused by tree contacts. As a result, the company experienced a 30% decrease in vegetation-related outages and a 20% reduction in maintenance costs.",
				reverse: false,
				textImage: '20% reduction in maintenance costs',
				titleCardBanner: "Discover how Enline's Vegetation Monitoring enhance safety and reliability in your operations."
			}
		]
	}
};
