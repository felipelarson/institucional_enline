import { ISlugData } from './types';

export const SLUG_DATA: { [key: string]: ISlugData } = {
	liveview: {
		hero: {
			iconButton: require('@/assets/svg/icon_liveview.svg'),
			textButton: 'Enline LiveView',
			title: 'Instant Asset Insight and Asset Visibility ',
			titleDestak: 'at Your Fingertips',
			description: 'Real-time monitoring without no hardware required',
			imgNotebook: require('@/assets/img/notebook.png'),
			imgScreen: require('@/assets/img/solution_liveview.png')
		},
		urlBanner: require('@/assets/img/banner_liveview.png'),
		description:
			'Enline LiveView brings the power of sensorless digital twin technology to monitor your energy assets in real-time. With no need for additional hardware or fieldwork, LiveView provides instant access to critical data, streamlining decision-making and improving operational efficiency.',
		cardList: [
			{
				icon: 'monitoring',
				title: 'Real-time monitoring',
				text: "Instantly access crucial information on your energy assets with Enline LiveView's sensorless digital twin technology, providing you with up-to-date data without the need for additional hardware or fieldwork."
			},
			{
				icon: 'monitoring',
				title: 'Enhanced Visualization',
				text: "Gain a comprehensive understanding of your energy infrastructure through Enline LiveView's intuitive and interactive visualizations, enabling you to quickly identify trends and potential issues."
			},
			{
				icon: 'solution',
				title: 'Seamless Integration',
				text: 'Effortlessly incorporate Enline LiveView into your existing energy management systems, benefiting from a plug-and-play solution that adapts to your current data and infrastructure requirements.'
			}
		],
		titleSection: 'Use cases',
		subtitleSection: 'Empowering Energy Management with Enline LiveView.',
		descriptionSection: 'Real-time Insights for Smarter Decisions and Enhanced Performance.',
		sectionList: [
			{
				title: "Make informed decisions and respond to issues quickly with Enline LiveView's real-time monitoring capabilities, keeping your energy infrastructure operating at peak performance.",
				text: "A hydroelectric plant utilized Enline LiveView to access real-time data on their turbines' performance. The immediate detection of a performance anomaly allowed the plant to address the issue promptly, avoiding potential damages and a costly shutdown, resulting in a 50% reduction in unplanned maintenance events.",
				reverse: false,
				textImage: '50% reduction in unplanned maintenance events',
				image: 'img_liveview_1'
			},
			{
				title: "Gain valuable insights and improve decision-making with Enline LiveView's interactive visualizations, making it easy to understand complex data and monitor your energy assets.",
				text: "A solar farm operator leveraged Enline LiveView's intuitive visualizations to monitor the performance of their solar panels. By quickly identifying underperforming panels, they were able to schedule targeted maintenance, increasing overall energy production by 10%.",
				reverse: true,
				textImage: 'Increasing overall energy production by 10%.',
				image: 'img_liveview_2'
			},
			{
				title: "Streamline your operations with Enline LiveView's seamless integration into existing energy management systems, eliminating the need for time-consuming and costly hardware upgrades.",
				text: "A regional DSO integrated Enline LiveView with their existing energy management system, allowing them to monitor and manage their substations alongside other energy assets. With Enline LiveView's seamless integration, the DSO was able to optimize performance and reduce operational costs by 20%.",
				reverse: false,
				textImage: 'Reduce operational costs by 20%.',
				image: 'img_liveview_3'
			}
		],
		cardCustomer: [
			{
				icons: 'tower',
				title: 'Transmission System Operators (TSOs)',
				subtitle: 'Enhance grid management with Enline’s cutting-edge solutions.',
				urlCustomer: '/customer/tso',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_predictpro.svg'),
				altSecondButton: 'icon_predictpro',
				textSecondButton: 'Enline PredictPro',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/predictpro'
			},
			{
				icons: 'electrical_box',
				title: 'Power Generation Companies',
				subtitle: 'Harness the power of data-driven insights to maximize efficiency.',
				urlCustomer: '/customer/power_generation',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_smartdesign.svg'),
				altSecondButton: 'icon_smartdesign',
				textSecondButton: 'Enline SmartDesign',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/smartdesign'
			},
			{
				icons: 'distribution',
				title: 'Distribution System Operators (DSOs)',
				subtitle: 'Streamline operations and optimize performance with Enline.',
				urlCustomer: '/customer/dso',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_optimax.svg'),
				altSecondButton: 'icon_optimax',
				textSecondButton: 'Enline OptiMax',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/optimax'
			}
		],
		titleCardCustomer: 'Discover how Enline can transform your TSO operations.',
		subtitleCardCustomer: 'Request a demo today!'
	},
	optimax: {
		hero: {
			iconButton: require('@/assets/svg/icon_optimax.svg'),
			textButton: 'Enline OptiMax',
			title: 'Maximize Your Energy ',
			titleDestak: 'Infrastructure’s Performance',
			description: 'Drive efficiency, reduce costs ',
			imgNotebook: require('@/assets/img/notebook.png'),
			imgScreen: require('@/assets/img/solution_optimax.png')
		},
		urlBanner: require('@/assets/img/banner_optimax.png'),
		description:
			'Enline OptiMax is designed to ensure your energy infrastructure operates at peak efficiency. By reducing energy losses and minimizing costs, OptiMax helps you optimize asset performance, enabling a more sustainable and cost-effective energy management approach.',
		cardList: [
			{
				icon: 'enhanced',
				title: 'Peak Efficiency',
				text: 'Leverage Enline OptiMax to unlock the full potential of your energy infrastructure, minimizing energy losses and reducing operational costs.'
			},
			{
				icon: 'realTime',
				title: 'Intelligent Optimization',
				text: 'Utilize advanced algorithms and AI-driven insights to identify areas of improvement, streamlining your energy systems for optimal performance.'
			},
			{
				icon: 'solution',
				title: 'Customized Strategies',
				text: "Benefit from Enline OptiMax's tailored approach, designing optimization plans that cater to your unique energy infrastructure and business objectives."
			}
		],
		titleSection: 'Use cases',
		subtitleSection: 'Empowering Energy Management with Enline OptiMax.',
		descriptionSection: 'Real-time Insights for Smarter Decisions and Enhanced Performance.',
		sectionList: [
			{
				title: 'Experience significant improvements in energy infrastructure efficiency with Enline OptiMax, which intelligently identifies and addresses areas for optimization.',
				text: 'A large manufacturing company implemented Enline OptiMax and saw a 20% increase in energy efficiency, leading to substantial cost savings and reduced environmental impact.',
				reverse: false,
				textImage: ' 20% increase in energy efficiency',
				image: 'img_optimax_1'
			},
			{
				title: 'Maximize the longevity of your energy assets with Enline OptiMax, ensuring that they perform at their full potential.',
				text: 'A power generation company utilized Enline OptiMax`s advanced analytics to optimize asset performance, resulting in a 25% extension of asset lifespan and a 15% reduction in maintenance costs.',
				reverse: true,
				textImage: '15% reduction in maintenance costs',
				image: 'img_optimax_2'
			},
			{
				title: 'Leverage Enline OptiMax`s ability to develop tailored optimization plans, addressing the unique challenges and requirements of your energy infrastructure',
				text: ' A regional distribution system operator (DSO) employed Enline OptiMax to create a customized strategy, which led to a 10% improvement in energy output and a 30% decrease in equipment downtime.',
				reverse: false,
				textImage: '30% decrease in equipment downtime',
				image: 'img_optimax_3'
			}
		],
		cardCustomer: [
			{
				icons: 'tower',
				title: 'Transmission System Operators (TSOs)',
				subtitle: 'Enhance grid management with Enline’s cutting-edge solutions.',
				urlCustomer: '/customer/tso',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_predictpro.svg'),
				altSecondButton: 'icon_predictpro',
				textSecondButton: 'Enline PredictPro',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/predictpro'
			},
			{
				icons: 'industry',
				title: 'Industry and Mining Companies',
				subtitle: 'Achieve maximum efficiency in your energy infrastructure.',
				urlCustomer: '/customer/industry',
				iconFirstButton: require('@/assets/svg/icon_optimax.svg'),
				altFirstButton: 'icon_optimax',
				textFirstButton: 'Enline OptiMax',
				iconSecondButton: require('@/assets/svg/icon_safeguard.svg'),
				altSecondButton: 'icon_safeguard',
				textSecondButton: 'Enline SafeGuard',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/safeguard'
			},
			{
				icons: 'distribution',
				title: 'Distribution System Operators (DSOs)',
				subtitle: 'Streamline operations and optimize performance with Enline.',
				urlCustomer: '/customer/dso',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_optimax.svg'),
				altSecondButton: 'icon_optimax',
				textSecondButton: 'Enline OptiMax',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/optimax'
			}
		],
		titleCardCustomer: 'Optimize your energy, boost efficiency and reduce costs.',
		subtitleCardCustomer: 'Start Maximizing Efficiency Now.'
	},
	predictpro: {
		hero: {
			iconButton: require('@/assets/svg/icon_predictpro.svg'),
			textButton: 'Enline PredictPro',
			title: 'AI-Driven Predictive Maintenance ',
			titleDestak: 'for Energy Assets',
			description: 'Stay ahead with proactive insights ',
			imgNotebook: require('@/assets/img/notebook.png'),
			imgScreen: require('@/assets/img/solution_predictpro.png')
		},
		urlBanner: require('@/assets/img/banner_predictpro.png'),
		description:
			'Enline PredictPro empowers your organization with advanced AI-driven predictive analytics, enabling you to forecast potential issues, optimize performance, and make informed decisions for proactive maintenance. Say goodbye to costly surprises and confidently manage your energy infrastructure.',
		cardList: [
			{
				icon: 'analytics',
				title: 'Advanced Predictive Analytics',
				text: "Harness the power of Enline PredictPro's AI-driven analytics to anticipate potential issues and optimize asset performance, enabling proactive decision-making for a more resilient energy infrastructure."
			},
			{
				icon: 'predictive',
				title: 'Precise Forecasting',
				text: "Utilize Enline PredictPro's cutting-edge forecasting capabilities to accurately predict energy demand and asset performance, allowing for strategic resource allocation and improved operational efficiency."
			},
			{
				icon: 'solution',
				title: 'Targeted Maintenance Planning',
				text: "Leverage Enline PredictPro's data-driven insights to develop customized maintenance schedules, extending asset lifespans, reducing downtime, and minimizing operational costs."
			}
		],
		titleSection: 'Use cases',
		subtitleSection: 'Empowering Energy Management with Enline PredictPro.',
		descriptionSection: 'Real-time Insights for Smarter Decisions and Enhanced Performance.',
		sectionList: [
			{
				title: 'Leverage the power of Enline PredictPro`s AI-driven algorithms to accurately forecast asset performance, enabling better planning and resource allocation.',
				text: 'A renewable energy provider utilized Enline PredictPro to improve the accuracy of their wind farm performance forecasts, leading to a 15% increase in energy output and optimized resource management.',
				reverse: false,
				textImage: '15% increase in energy output',
				image: 'img_predictivepro_1'
			},
			{
				title: 'Monitor the health of your energy assets continuously with Enline PredictPro, allowing you to address potential issues and extend asset lifespans.',
				text: 'A solar farm operator leveraged Enline LiveView`s intuitive visualizations to monitor the performance of their solar panels. By quickly identifying underperforming panels, they were able to schedule targeted maintenance, increasing overall energy production by 10%.',
				reverse: true,
				textImage: 'Increasing overall energy production by 10%.',
				image: 'img_predictivepro_2'
			},
			{
				title: 'Utilize Enline PredictPro`s advanced analytics to proactively identify risks and implement targeted mitigation strategies, ensuring a more reliable and secure energy infrastructure.',
				text: ' An industrial facility deployed Enline PredictPro to assess and address potential risks, leading to a 30% decrease in equipment failures and a more resilient energy network.',
				reverse: false,
				textImage: '30% decrease in equipment failures.',
				image: 'img_predictivepro_3'
			}
		],
		cardCustomer: [
			{
				icons: 'tower',
				title: 'Transmission System Operators (TSOs)',
				subtitle: 'Enhance grid management with Enline’s cutting-edge solutions.',
				urlCustomer: '/customer/tso',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_predictpro.svg'),
				altSecondButton: 'icon_predictpro',
				textSecondButton: 'Enline PredictPro',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/predictpro'
			},
			{
				icons: 'electrical_box',
				title: 'Power Generation Companies',
				subtitle: 'Harness the power of data-driven insights to maximize efficiency.',
				urlCustomer: '/customer/power_generation',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_smartdesign.svg'),
				altSecondButton: 'icon_smartdesign',
				textSecondButton: 'Enline SmartDesign',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/smartdesign'
			},
			{
				icons: 'distribution',
				title: 'Distribution System Operators (DSOs)',
				subtitle: 'Streamline operations and optimize performance with Enline.',
				urlCustomer: '/customer/dso',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_optimax.svg'),
				altSecondButton: 'icon_optimax',
				textSecondButton: 'Enline OptiMax',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/optimax'
			}
		],
		titleCardCustomer: 'Elevate Your Predictive Capabilities with Enline PredictPro.',
		subtitleCardCustomer: 'Request a demo today!'
	},
	safeguard: {
		hero: {
			iconButton: require('@/assets/svg/icon_safeguard.svg'),
			textButton: 'Enline SafeGuard',
			title: 'Comprehensive Risk Mitigation for ',
			titleDestak: 'Energy Networks',
			description: 'Protecting your assets, ensuring reliability',
			imgNotebook: require('@/assets/img/notebook.png'),
			imgScreen: require('@/assets/img/solution_safeguard.png')
		},
		urlBanner: require('@/assets/img/banner_safeguard.png'),
		description:
			'Enline SafeGuard provides robust risk mitigation strategies to reduce the risk of wildfires, equipment failure, and other hazards. By enhancing the safety and reliability of your energy network, SafeGuard ensures uninterrupted service and peace of mind for your organization.',
		cardList: [
			{
				icon: 'realTime',
				title: 'Real-Time Monitoring',
				text: "Utilize Enline SafeGuard's advanced monitoring and predictive capabilities to proactively identify and address potential hazards, ensuring a secure and reliable energy infrastructure."
			},
			{
				icon: 'risk',
				title: 'Vegetation and Wildfire Prevention',
				text: "Leverage Enline SafeGuard's state-of-the-art technology to monitor vegetation growth and assess wildfire risks, allowing for timely intervention and effective management of potential threats."
			},
			{
				icon: 'enhanced',
				title: 'Infrastructure Resilience',
				text: "Strengthen your energy network with Enline SafeGuard's comprehensive analysis of structural integrity and weather-related risks, fostering a resilient infrastructure capable of withstanding extreme events."
			}
		],
		titleSection: 'Use cases',
		subtitleSection: 'Empowering Energy Management with Enline SafeGuard.',
		descriptionSection: 'Real-time Insights for Smarter Decisions and Enhanced Performance.',
		sectionList: [
			{
				title: 'Benefit from Enline SafeGuard`s advanced monitoring and predictive analytics, which help you identify and address potential wildfire risks, safeguarding your energy infrastructure and surrounding communities.',
				text: 'A utility company implemented Enline SafeGuard to proactively monitor and mitigate wildfire risks. The system`s predictive analytics identified areas prone to ignition, enabling targeted vegetation management and reducing the likelihood of wildfires by 40%.',
				reverse: false,
				textImage: 'Reducing the likelihood of wildfires by 40%.',
				image: 'img_safeguard_1'
			},
			{
				title: 'Equipment Failure Mitigation: Leverage Enline SafeGuard to detect early signs of equipment failure and take preventive action, ensuring the safety and reliability of your energy infrastructure.',
				text: 'A regional DSO utilized Enline SafeGuard to detect early signs of equipment failure in their network. The system`s AI-driven analytics identified a potential transformer issue, allowing the DSO to perform maintenance and prevent a costly outage, reducing equipment downtime by 35%.',
				reverse: true,
				textImage: 'Reducing equipment downtime by 35%',
				image: 'img_safeguard_2'
			},
			{
				title: 'Enhanced Resilience to Extreme Weather: Strengthen your energy infrastructure`s ability to withstand and adapt to extreme weather events with Enline SafeGuard, minimizing the impact of potential hazards.',
				text: 'A TSO facing recurrent storm-related disruptions adopted Enline SafeGuard to enhance their network`s resilience to extreme weather. The system`s real-time monitoring and predictive capabilities allowed the TSO to identify and address vulnerabilities, reducing storm-related outages by 50%.',
				reverse: false,
				textImage: 'Reducing storm-related outages by 50%',
				image: 'img_safeguard_3'
			}
		],
		cardCustomer: [
			{
				icons: 'tower',
				title: 'Transmission System Operators (TSOs)',
				subtitle: 'Enhance grid management with Enline’s cutting-edge solutions.',
				urlCustomer: '/customer/tso',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_predictpro.svg'),
				altSecondButton: 'icon_predictpro',
				textSecondButton: 'Enline PredictPro',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/predictpro'
			},
			{
				icons: 'electrical_box',
				title: 'Power Generation Companies',
				subtitle: 'Harness the power of data-driven insights to maximize efficiency.',
				urlCustomer: '/customer/power_generation',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_smartdesign.svg'),
				altSecondButton: 'icon_smartdesign',
				textSecondButton: 'Enline SmartDesign',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/smartdesign'
			},
			{
				icons: 'distribution',
				title: 'Distribution System Operators (DSOs)',
				subtitle: 'Streamline operations and optimize performance with Enline.',
				urlCustomer: '/customer/dso',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_optimax.svg'),
				altSecondButton: 'icon_optimax',
				textSecondButton: 'Enline OptiMax',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/optimax'
			}
		],
		titleCardCustomer: 'Mitigate risks and ensure a safer, more reliable infrastructure.',
		subtitleCardCustomer: 'Secure Your Network Today.'
	},
	smartdesign: {
		hero: {
			iconButton: require('@/assets/svg/icon_smartdesign.svg'),
			textButton: 'Enline SmartDesign',
			title: 'Intelligent Energy Project ',
			titleDestak: 'Design & Simulation',
			description: 'Plan with precision, execute with confidence',
			imgNotebook: require('@/assets/img/notebook.png'),
			imgScreen: require('@/assets/img/solution_smartdesign.png')
		},
		urlBanner: require('@/assets/img/banner_smartdesign.png'),
		description:
			'Enline SmartDesign offers advanced simulation tools for planning and designing energy projects with confidence. By considering millions of possible scenarios, SmartDesign helps you make data-driven decisions, streamline project execution, and reduce uncertainties in your energy infrastructure investments.',
		cardList: [
			{
				icon: 'realTime',
				title: 'Advanced Simulation Tools',
				text: "Harness the power of Enline SmartDesign's cutting-edge simulation capabilities to model and test various energy infrastructure scenarios, ensuring well-informed project planning and design."
			},
			{
				icon: 'risk',
				title: 'Data-Driven Decision Making',
				text: "Benefit from Enline SmartDesign's comprehensive data analysis, providing valuable insights and actionable recommendations for the development of efficient, cost-effective, and sustainable energy solutions."
			},
			{
				icon: 'enhanced',
				title: 'Streamlined Project Execution',
				text: "Optimize your energy project's design and implementation process with Enline SmartDesign, reducing time-to-market and ensuring smooth execution in alignment with your specific requirements and objectives."
			}
		],
		titleSection: 'Use cases',
		subtitleSection: 'Empowering Energy Management with Enline SmartDesign.',
		descriptionSection: 'Real-time Insights for Smarter Decisions and Enhanced Performance.',
		sectionList: [
			{
				title: 'Optimized Project Planning: Utilize Enline SmartDesign`s advanced simulation tools to create efficient and cost-effective energy project plans, maximizing return on investment.',
				text: 'A renewable energy developer leveraged Enline SmartDesign to optimize the layout of a solar farm project. The simulation tools evaluated millions of scenarios, identifying the most efficient design and increasing the project`s energy production by 20%.',
				reverse: false,
				textImage: 'Increasing the project`s energy production by 20%',
				image: 'img_smartdesign_1'
			},
			{
				title: 'Reduced Uncertainty in Decision-making: Benefit from Enline SmartDesign`s comprehensive analysis, which considers various factors such as geography, weather, and technology, providing you with the necessary insights to make informed decisions.',
				text: 'A wind farm operator employed Enline SmartDesign to assess the feasibility of a new wind turbine installation. The platform`s detailed analysis enabled the operator to choose the most suitable turbine model and location, reducing uncertainty and increasing annual energy production by 15%.',
				reverse: true,
				textImage: 'Annual energy production by 15%.',
				image: 'img_smartdesign_2'
			},
			{
				title: 'Accelerated Project Execution: Streamline your energy project development process with Enline SmartDesign, minimizing delays and ensuring timely completion.',
				text: 'An engineering firm working on a hydroelectric project utilized Enline SmartDesign to optimize their project timeline. The platform`s advanced planning capabilities enabled the firm to identify potential bottlenecks, resulting in a 25% reduction in project completion time and minimized costs.',
				reverse: false,
				textImage: '25% reduction in project completion time',
				image: 'img_smartdesign_3'
			}
		],
		cardCustomer: [
			{
				icons: 'tower',
				title: 'Transmission System Operators (TSOs)',
				subtitle: 'Enhance grid management with Enline’s cutting-edge solutions.',
				urlCustomer: '/customer/tso',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_predictpro.svg'),
				altSecondButton: 'icon_predictpro',
				textSecondButton: 'Enline PredictPro',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/predictpro'
			},
			{
				icons: 'electrical_box',
				title: 'Power Generation Companies',
				subtitle: 'Harness the power of data-driven insights to maximize efficiency.',
				urlCustomer: '/customer/power_generation',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_smartdesign.svg'),
				altSecondButton: 'icon_smartdesign',
				textSecondButton: 'Enline SmartDesign',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/smartdesign'
			},
			{
				icons: 'distribution',
				title: 'Distribution System Operators (DSOs)',
				subtitle: 'Streamline operations and optimize performance with Enline.',
				urlCustomer: '/customer/dso',
				iconFirstButton: require('@/assets/svg/icon_liveview.svg'),
				altFirstButton: 'icon_liveview',
				textFirstButton: 'Enline LiveView',
				iconSecondButton: require('@/assets/svg/icon_optimax.svg'),
				altSecondButton: 'icon_optimax',
				textSecondButton: 'Enline OptiMax',
				urlFirstButton: '/solutions/liveview',
				urlSecondButton: '/solutions/optimax'
			}
		],
		titleCardCustomer: 'Plan for success with advanced simulation tools.',
		subtitleCardCustomer: 'Begin Your Smart Design Journey Now.'
	}
};
