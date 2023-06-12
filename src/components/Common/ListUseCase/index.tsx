import { IListUseCases } from './types';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const ListUseCases = ({ reverse, title, text, textImage, image }: IListUseCases) => {
	const imageList: { [key: string]: string } = {
		dlr: require('@/assets/img/screen_dlr.png'),
		landslide: require('@/assets/img/screen_landslide_tech.png'),
		sensorless: require('@/assets/img/screen_sensorless_tech.png'),
		vegetation_monitoring: require('@/assets/img/screen_sensorless_tech.png'),
		img_liveview_1: require('@/assets/img/img_liveview_1.png'),
		img_liveview_2: require('@/assets/img/img_liveview_2.png'),
		img_liveview_3: require('@/assets/img/img_liveview_3.png'),
		img_optimax_1: require('@/assets/img/img_optimax_1.png'),
		img_optimax_2: require('@/assets/img/img_optimax_2.png'),
		img_optimax_3: require('@/assets/img/img_optimax_3.png'),
		img_predictivepro_1: require('@/assets/img/img_predictivepro_1.png'),
		img_predictivepro_2: require('@/assets/img/img_predictivepro_2.png'),
		img_predictivepro_3: require('@/assets/img/img_predictivepro_3.png'),
		img_safeguard_1: require('@/assets/img/img_safeguard_1.png'),
		img_safeguard_2: require('@/assets/img/img_safeguard_2.png'),
		img_safeguard_3: require('@/assets/img/img_safeguard_3.png'),
		img_smartdesign_1: require('@/assets/img/img_smartdesign_1.png'),
		img_smartdesign_2: require('@/assets/img/img_smartdesign_2.png'),
		img_smartdesign_3: require('@/assets/img/img_smartdesign_3.png')
	};

	return (
		<Flex flexDirection={reverse ? 'row-reverse' : 'row'} gap={10}>
			<Stack flex={1} gap={10}>
				<Text fontSize={'18px'}>{title}</Text>
				<Box bg={'white'} p={10} borderRadius={'5px'} boxShadow={'sm'}>
					<Text fontSize={'14px'}>{text}</Text>
				</Box>
			</Stack>
			<Flex flex={1} justifyContent={'center'} alignItems={'center'} width={'full'} position={'relative'}>
				<Image src={imageList[image as keyof typeof imageList]} alt={''} height={296} />
				<Box
					position={'absolute'}
					bottom={'-30%'}
					left={reverse ? '20%' : 'auto'}
					right={'-40%'}
					transform={'translate(-50%, -50%)'}
					bg={'purple.500'}
					p={'24px'}
					border={'1px solid'}
					borderColor={'white'}
					borderRadius={'10px'}
					width={'320px'}
				>
					<Text fontSize={'18px'} fontWeight={600} color={'white'}>
						{textImage}
					</Text>
				</Box>
			</Flex>
		</Flex>
	);
};
