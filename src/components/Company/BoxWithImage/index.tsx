import { BOXIMAGE_DATA } from './mock';

import { AspectRatio, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const BoxWithImage = () => {
	return (
		<Flex
			border={'1px solid'}
			borderColor={'gray.200'}
			mt={20}
			p={'48px'}
			borderRadius={'20px'}
			gap={10}
			flexDir={['column', 'column', 'column', 'row']}
		>
			<Stack flex={1} gap={6}>
				<Text fontWeight={700} fontSize={'18px'}>
					{BOXIMAGE_DATA[0].title}
				</Text>
				{BOXIMAGE_DATA[0].list.map((item, index) => (
					<Text key={index} fontSize={'14px'}>
						<Text as={'span'} fontWeight={'bold'}>
							{item.titleDescription}
						</Text>{' '}
						{item.description}
					</Text>
				))}
			</Stack>
			<AspectRatio ratio={4 / 3} flex={1} maxW={'100%'}>
				<Image
					src={require('@/assets/img/img_company.png')}
					alt={BOXIMAGE_DATA[0].title}
					style={{ objectFit: 'cover', borderRadius: '20px', objectPosition: 'center' }}
				/>
			</AspectRatio>
		</Flex>
	);
};
