import { CarouselMap, ContainerMain, TitleSection } from '@/components/Common';

import { Stack, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';

export const ClientsGlobe = () => {
	const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
	return (
		<ContainerMain bgGradient={'radial( white, white, #D9E0FB)'}>
			<Stack spacing={12} position={'relative'}>
				<TitleSection
					title="Clients across the entire globe"
					subtitle="Innovative Solutions for a Worldwide Audience"
					description="Enline's cutting-edge technology provides tailored advantages to clients spanning the globe, enhancing efficiency and promoting sustainability in the energy sector across diverse regions and markets."
				/>
				<Image src={require('@/assets/svg/dot_map.svg')} width={1920} height={1080} alt="Clients across the entire globe" />
				{isMobile ? (
					<CarouselMap location="theWorld" />
				) : (
					<>
						<CarouselMap location="north" />
						<CarouselMap location="south" />
						<CarouselMap location="europe" />
						<CarouselMap location="australia" />
					</>
				)}
			</Stack>
		</ContainerMain>
	);
};
