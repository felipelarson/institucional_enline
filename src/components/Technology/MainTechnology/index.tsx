import { TECHNOLOGY_DATA } from './mock';

import { BannerWithScreen } from '@/components/Common';

import { Stack } from '@chakra-ui/react';

export const MainTechnology = () => {
	return (
		<Stack gap={10} align={'center'} justify={'center'} mt={20}>
			{TECHNOLOGY_DATA.map((item, index) => (
				<BannerWithScreen key={index} title={item.title} description={item.description} image={item.image} link={item.link} />
			))}
		</Stack>
	);
};
