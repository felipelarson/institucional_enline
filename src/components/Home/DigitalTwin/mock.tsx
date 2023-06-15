import Ampacity from '@/assets/svg/icon_ampacity.svg';
import Vegetation from '@/assets/svg/icon_vegetation.svg';

import Image from 'next/image';
import { FiCloudLightning, FiSettings, FiThermometer, FiWind, FiZap } from 'react-icons/fi';

export const BUTTONS = [
	{ label: 'Current', value: 'current' },
	{ label: 'Ampacity', value: 'ampacity' },
	{ label: 'Temperature', value: 'temperature' },
	{ label: 'Wind speed', value: 'wind_speed' },
	{ label: 'Weather resilience', value: 'weather_resilience' },
	{ label: 'Mechanical stress', value: 'mechanical_stress' },
	{ label: 'Vegetation growth', value: 'vegetation_growth' }
];

export const ICONS: any = {
	current: <FiZap />,
	ampacity: <Image src={Ampacity} alt="Ampacity" />,
	temperature: <FiThermometer />,
	wind_speed: <FiWind />,
	weather_resilience: <FiCloudLightning />,
	mechanical_stress: <FiSettings />,
	vegetation_growth: <Image src={Vegetation} alt="Vegetation" />
};
