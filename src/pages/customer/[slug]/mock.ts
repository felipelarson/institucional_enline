import { ISlugData } from "./types";

export const SLUG_DATA: { [key: string]: ISlugData } = {
  tso: {
    urlBanner: require("@/assets/img/banner_tso.png"),
    titleBanner:
      "As a TSO, managing a complex and dynamic power grid is a critical responsibility.",
    descriptionBanner:
      "Enline`s suite of products provides real-time monitoring, predictive analytics, and asset optimization to help you ensure grid stability and resilience, even amidst the challenges of integrating renewable energy sources and adapting to climate change.",
    imageBanner: require("@/assets/img/screen_landslide.png"),
    customerSegments: [
      {
        iconButton: require("@/assets/svg/icon_predictpro.svg"),
        altButton: "icon_predictpro",
        textButton: "Enline PredictPro",
        description: "Enline PredictPro for data-driven decision-making.",
      },
      {
        iconButton: require("@/assets/svg/icon_optimax.svg"),
        altButton: "icon_optimax",
        textButton: "Enline OptiMax",
        description: "Enline OptiMax to boost efficiency and minimize costs.",
      },
      {
        iconButton: require("@/assets/svg/icon_liveview.svg"),
        altButton: "icon_liveview",
        textButton: "Enline LiveView",
        description: "Enline LiveView for real-time monitoring.",
      },
    ],
    titleSchedule: "Discover how Enline can transform your TSO operations.",
  },
  dso: {
    urlBanner: require("@/assets/img/banner_dso.png"),
    titleBanner:
      "DSOs are responsible for maintaining a reliable and efficient distribution network.",
    descriptionBanner:
      "Enline`s innovative solutions empower you to monitor and manage your assets effectively, reduce energy losses, and optimize investments to ensure a secure energy supply for your customers.",
    imageBanner: require("@/assets/img/screen_dso.png"),
    customerSegments: [
      {
        iconButton: require("@/assets/svg/icon_predictpro.svg"),
        altButton: "icon_predictpro",
        textButton: "Enline PredictPro",
        description: "Enline PredictPro for forecasting potential issues.",
      },
      {
        iconButton: require("@/assets/svg/icon_optimax.svg"),
        altButton: "icon_optimax",
        textButton: "Enline OptiMax",
        description:
          "Enline OptiMax to enhance the performance of your distribution network.",
      },
      {
        iconButton: require("@/assets/svg/icon_liveview.svg"),
        altButton: "icon_liveview",
        textButton: "Enline LiveView",
        description: "Enline LiveView for real-time monitoring.",
      },
    ],
    titleSchedule: "Learn how Enline can elevate your DSO performance",
  },
  power_generation: {
    urlBanner: require("@/assets/img/banner_power_generation.png"),
    titleBanner:
      "In an increasingly competitive energy market, power generation companies must continuously improve their operations to stay ahead.",
    descriptionBanner:
      "Enline`s advanced solutions provide real-time monitoring and data analysis, enabling you to optimize production, reduce operational costs, and extend the lifespan of your assets.",
    imageBanner: require("@/assets/img/screen_power_generation.png"),
    customerSegments: [
      {
        iconButton: require("@/assets/svg/icon_predictpro.svg"),
        altButton: "icon_predictpro",
        textButton: "Enline PredictPro",
        description: "Enline PredictPro for data-driven decision-making.",
      },
      {
        iconButton: require("@/assets/svg/icon_optimax.svg"),
        altButton: "icon_optimax",
        textButton: "Enline OptiMax",
        description: "Enline OptiMax to boost efficiency and minimize costs.",
      },
      {
        iconButton: require("@/assets/svg/icon_liveview.svg"),
        altButton: "icon_liveview",
        textButton: "Enline LiveView",
        description: "Enline LiveView for real-time monitoring.",
      },
    ],
    titleSchedule:
      "Find out how Enline can boost your power generation efficiency",
  },
  risk_management: {
    urlBanner: require("@/assets/img/banner_risk_management.png"),
    titleBanner:
      "Effective risk management is crucial for energy companies and their insurers.",
    descriptionBanner:
      "Enline`s technology delivers real-time monitoring, predictive analytics, and risk mitigation strategies to help you identify and address potential threats, protect your assets, and minimize losses.",
    imageBanner: require("@/assets/img/screen_risk_management.png"),
    customerSegments: [
      {
        iconButton: require("@/assets/svg/icon_predictpro.svg"),
        altButton: "icon_predictpro",
        textButton: "Enline PredictPro",
        description: "Enline PredictPro for proactive risk assessment.",
      },
      {
        iconButton: require("@/assets/svg/icon_safeguard.svg"),
        altButton: "icon_safeguard",
        textButton: "Enline SafeGuard",
        description:
          "Minimize hazards and safeguard your energy infrastructure.",
      },
      {
        iconButton: require("@/assets/svg/icon_liveview.svg"),
        altButton: "icon_liveview",
        textButton: "Enline LiveView",
        description: "Enline LiveView for asset monitoring.",
      },
    ],
    titleSchedule:
      "Uncover how Enline can redefine risk management for your business",
  },
  renewable_energy: {
    urlBanner: require("@/assets/img/banner_renewable_energy.png"),
    titleBanner:
      "Renewable energy providers play a crucial role in building a sustainable future.",
    descriptionBanner:
      "Enline`s technology equips you with the tools needed to monitor and optimize the performance of your renewable assets, such as solar and wind farms. Our solutions enable you to maximize efficiency, reduce operational costs, and enhance the integration of renewables into the grid.",
    imageBanner: require("@/assets/img/screen_renewable_energy.png"),
    customerSegments: [
      {
        iconButton: require("@/assets/svg/icon_predictpro.svg"),
        altButton: "icon_predictpro",
        textButton: "Enline PredictPro",
        description: "Enline PredictPro for data-driven decision-making.",
      },
      {
        iconButton: require("@/assets/svg/icon_optimax.svg"),
        altButton: "icon_optimax",
        textButton: "Enline OptiMax",
        description: "Enline OptiMax  to optimize renewable asset performance.",
      },
      {
        iconButton: require("@/assets/svg/icon_liveview.svg"),
        altButton: "icon_liveview",
        textButton: "Enline LiveView",
        description: "Enline LiveView for real-time monitoring.",
      },
    ],
    titleSchedule: "Explore how Enline can advance your renewable energy goals",
  },
  energy_research: {
    urlBanner: require("@/assets/img/banner_energy_research.png"),
    titleBanner:
      "As an R&D institution, you strive to advance the state of the art in energy technology.",
    descriptionBanner:
      "Enline`s solutions provide you with access to a wealth of real-time data and insights, empowering your research teams to make informed decisions and uncover new opportunities in the energy sector.",
    imageBanner: require("@/assets/img/screen_energy_research.png"),
    customerSegments: [
      {
        iconButton: require("@/assets/svg/icon_predictpro.svg"),
        altButton: "icon_predictpro",
        textButton: "Enline PredictPro",
        description: "Enline PredictPro  for predictive analytics research",
      },
      {
        iconButton: require("@/assets/svg/icon_optimax.svg"),
        altButton: "icon_optimax",
        textButton: "Enline OptiMax",
        description:
          "Enline OptiMax  for testing and optimizing energy systems.",
      },
      {
        iconButton: require("@/assets/svg/icon_liveview.svg"),
        altButton: "icon_liveview",
        textButton: "Enline LiveView",
        description: "Enline LiveView for data collection.",
      },
    ],
    titleSchedule: "Unleash the potential of Enline for your R&D projects",
  },
  electric_mobility: {
    urlBanner: require("@/assets/img/banner_electric_mobility.png"),
    titleBanner:
      "As EV adoption accelerates, reliable and efficient charging infrastructure is essential.",
    descriptionBanner:
      "Enline`s cutting-edge solutions enable you to monitor, maintain, and optimize your EV charging assets, ensuring seamless operations and the highest levels of customer satisfaction.",
    imageBanner: require("@/assets/img/screen_electric_mobility.png"),
    customerSegments: [
      {
        iconButton: require("@/assets/svg/icon_predictpro.svg"),
        altButton: "icon_predictpro",
        textButton: "Enline PredictPro",
        description: "Enline PredictPro for data-driven decision-making.",
      },
      {
        iconButton: require("@/assets/svg/icon_optimax.svg"),
        altButton: "icon_optimax",
        textButton: "Enline OptiMax",
        description: "Enline OptiMax to boost efficiency and minimize costs.",
      },
      {
        iconButton: require("@/assets/svg/icon_liveview.svg"),
        altButton: "icon_liveview",
        textButton: "Enline LiveView",
        description: "Enline LiveView for real-time collection.",
      },
    ],
    titleSchedule: "Learn how Enline can supercharge your EV infrastructure",
  },
  industry: {
    urlBanner: require("@/assets/img/banner_industrial.png"),
    titleBanner:
      "In the demanding world of industry and mining, efficient energy management is crucial for operational success.",
    descriptionBanner:
      "Enline`s innovative solutions offer real-time monitoring and data analysis, empowering you to optimize energy usage, minimize costs, and enhance the sustainability of your operations.",
    imageBanner: require("@/assets/img/screen_industry_operation.png"),
    customerSegments: [
      {
        iconButton: require("@/assets/svg/icon_predictpro.svg"),
        altButton: "icon_predictpro",
        textButton: "Enline PredictPro",
        description: "Enline PredictPro for proactive risk management.",
      },
      {
        iconButton: require("@/assets/svg/icon_optimax.svg"),
        altButton: "icon_optimax",
        textButton: "Enline OptiMax",
        description:
          "Enline OptiMax to achieve maximum efficiency in your energy infrastructure.",
      },
      {
        iconButton: require("@/assets/svg/icon_liveview.svg"),
        altButton: "icon_liveview",
        textButton: "Enline LiveView",
        description: "Enline LiveView for continuous monitoring.",
      },
    ],
    titleSchedule:
      "Discover how Enline can transform your industry and mining energy management",
  },
  operations: {
    urlBanner: require("@/assets/img/banner_operations.png"),
    titleBanner:
      "As the energy sector evolves, Operations & Maintenance (O&M) companies must adapt their services to deliver exceptional results.",
    descriptionBanner:
      "Enline`s cutting-edge solutions provide real-time monitoring and data analysis, enabling you to optimize maintenance activities, reduce operational costs, and prolong the lifespan of energy assets.",
    imageBanner: require("@/assets/img/screen_operation_maintenance.png"),
    customerSegments: [
      {
        iconButton: require("@/assets/svg/icon_predictpro.svg"),
        altButton: "icon_predictpro",
        textButton: "Enline PredictPro",
        description: "Enline PredictPro for proactive maintenance planning.",
      },
      {
        iconButton: require("@/assets/svg/icon_optimax.svg"),
        altButton: "icon_optimax",
        textButton: "Enline OptiMax",
        description:
          "Enline OptiMax to ensure peak performance of energy assets.",
      },
      {
        iconButton: require("@/assets/svg/icon_liveview.svg"),
        altButton: "icon_liveview",
        textButton: "Enline LiveView",
        description: "Enline LiveView for round-the-clock monitoring.",
      },
    ],
    titleSchedule: "Explore how Enline can elevate your O&M services",
  },
};
