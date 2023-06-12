import Carousel from '../Carousel';

import { ContainerMain, TitleSection } from '@/components/Common';

import { Stack } from '@chakra-ui/react';
import Image from 'next/image';

export const ClientsGlobe = () => {
	return (
		<ContainerMain bgGradient={'radial( white, white, #D9E0FB)'}>
			<Stack spacing={12} position={'relative'}>
				<TitleSection
					title="Clients across the entire globe"
					subtitle="Innovative Solutions for a Worldwide Audience"
					description="Enline's cutting-edge technology provides tailored advantages to clients spanning the globe, enhancing efficiency and promoting sustainability in the energy sector across diverse regions and markets."
				/>
				<Image src={require('@/assets/svg/dot_map.svg')} width={1920} height={1080} alt="Clients across the entire globe" />
				<Carousel location="north" />
				<Carousel location="south" />
				<Carousel location="europe" />
				<Carousel location="australia" />
			</Stack>
		</ContainerMain>
	);
};
