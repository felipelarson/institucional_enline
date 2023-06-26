interface ITechnologyData {
	urlBanner: string;
	urlBannerMobile: string;
	titleBannerMobile: string;
	subtitleBannerMobile: string;
	descriptionBannerMobile: string;
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
		titleBannerMobile: 'Dynamic Line Rating(DLR)',
		subtitleBannerMobile: 'Unlock the Full Potential of Your Power Lines',
		descriptionBannerMobile: "Enhance Grid Efficiency, Reliability, and Capacity with Enline's Dynamic Line Rating Solutions.",
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
		titleBanner: "Discover how Enline's Dynamic Line Rating can transform your power grid operations",
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
		titleBannerMobile: 'Landslide Detection',
		subtitleBannerMobile: 'Enhance Safety with Real-time Monitoring',
		descriptionBannerMobile: "Mitigate Geotechnical Hazards with Enline's Advanced Landslide Detection Solutions.",
		description:
			"Our Dynamic Line Rating solutions are seamlessly integrated with Enline's suite of advanced energy management products, including Enline LiveView, Enline PredictPro, and Enline OptiMax. Together, these tools provide comprehensive monitoring, predictive analytics, and optimization strategies to ensure efficient power transmission and distribution.",
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
				title: "Make informed decisions and respond to issues quickly with Enline LiveView's real-time monitoring capabilities, keeping your energy infrastructure operating at peak performance.",
				text: "A hydroelectric plant utilized Enline LiveView to access real-time data on their turbines' performance. The immediate detection of a performance anomaly allowed the plant to address the issue promptly, avoiding potential damages and a costly shutdown, resulting in a 50% reduction in unplanned maintenance events.",
				reverse: false,
				textImage: '50% reduction in unplanned maintenance events',
				titleCardBanner: "Discover how Enline's Landslide Detection enhance safety and reliability in your operations."
			}
		]
	},
	sensorless: {
		urlBanner: require('@/assets/img/banner_title_sensorless.png'),
		urlBannerMobile: require('@/assets/img/screen_sensorless.png'),
		titleBannerMobile: 'Sensorless Monitoring',
		subtitleBannerMobile: 'Revolutionizing Asset Monitoring',
		descriptionBannerMobile: "Embrace the Future of Asset Management with Enline's Sensorless Monitoring Solutions.",
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
				title: "Make informed decisions and respond to issues quickly with Enline LiveView's real-time monitoring capabilities, keeping your energy infrastructure operating at peak performance.",
				text: "A hydroelectric plant utilized Enline LiveView to access real-time data on their turbines' performance. The immediate detection of a performance anomaly allowed the plant to address the issue promptly, avoiding potential damages and a costly shutdown, resulting in a 50% reduction in unplanned maintenance events.",
				reverse: false,
				textImage: '50% reduction in unplanned maintenance events',
				titleCardBanner: "Discover how Enline's Landslide Detection enhance safety and reliability in your operations."
			}
		]
	},
	vegetation_monitoring: {
		urlBanner: require('@/assets/img/banner_title_vegetation.png'),
		urlBannerMobile: require('@/assets/img/screen_vegetation.png'),
		titleBannerMobile: 'Vegetation Monitoring',
		subtitleBannerMobile: 'Protect Your Power Grid from Vegetation Threats',
		descriptionBannerMobile: "Enhance Grid Reliability and Safety with Enline's Advanced Vegetation Monitoring Solutions.",
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
				title: 'Enline OptiMax',
				link: require(`@/assets/svg/icon_optimax.svg`),
				urlButton: '/solutions/optimax'
			}
		],
		sectionList: [
			{
				title: "Make informed decisions and respond to issues quickly with Enline LiveView's real-time monitoring capabilities, keeping your energy infrastructure operating at peak performance.",
				text: "A hydroelectric plant utilized Enline LiveView to access real-time data on their turbines' performance. The immediate detection of a performance anomaly allowed the plant to address the issue promptly, avoiding potential damages and a costly shutdown, resulting in a 50% reduction in unplanned maintenance events.",
				reverse: false,
				textImage: '50% reduction in unplanned maintenance events',
				titleCardBanner: "Discover how Enline's Landslide Detection enhance safety and reliability in your operations."
			}
		]
	}
};
