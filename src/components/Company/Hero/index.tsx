import { BoxClient } from '../BoxClient';
import { BoxWithImage } from '../BoxWithImage';

import { Banner, ContainerMain, TitleSection } from '@/components/Common';

import { Stack } from '@chakra-ui/react';

export const Hero = () => {
	return (
		<ContainerMain p={[0, '16px 100px']}>
			<Stack spacing={[10, 20]}>
				<Banner
					title={'Pioneers in Energy'}
					titleColor={'Optimization'}
					description={'Empowering the Energy Sector with Innovative Solutions'}
					descriptionColor={'and a Commitment to Sustainability.'}
				/>
				<BoxWithImage />
				<TitleSection
					title={'Awards and Recognitions'}
					subtitle={'Celebrating Excellence in Energy Innovation'}
					description={'A Testament to Our Dedication and Impact in the Energy Sector.'}
				/>
				<BoxClient />
			</Stack>
		</ContainerMain>
	);
};
