import { IBannerWithScreenProps } from './types';

import { AspectRatio, Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const BannerWithScreen = ({ title, description, image, link }: IBannerWithScreenProps) => {
	return (
		<Box position={'relative'} w={'100%'} h={'fit-content'}>
			<Image src={require(`@/assets/svg/bg_line_brand.svg`)} alt={'bg-line'} fill={true} style={{ objectFit: 'cover' }} />
			<Flex
				bgGradient={'linear(to-r, #0E0E0F, #33296D)'}
				color={'white'}
				borderRadius={'2xl'}
				p={['20px', '20px', '20px 20px 20px 70px', '20px 20px 20px 70px']}
				direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
				w={'100%'}
				h={'100%'}
			>
				<Flex gap={20} alignItems={'center'} w={'100%'} direction={['column', 'column', 'column', 'row']}>
					<Stack flex={1} gap={'25px'}>
						<Heading as={'h2'} size={'lg'} color={'#FFAE33'}>
							{title}
						</Heading>
						<Text fontSize={'14px'} fontWeight={400} maxW={'360px'}>
							{description}
						</Text>
						<Button
							as={NextLink}
							rounded="full"
							size="lg"
							fontWeight="normal"
							px={6}
							colorScheme={'white'}
							bg={'white'}
							color={'purple.500'}
							_hover={{ bg: 'purple.600', color: 'white' }}
							rightIcon={<FiArrowRight />}
							href={link}
							maxW={'290px'}
						>
							<Text fontSize={'14px'} fontWeight={700}>
								Explore to know more
							</Text>
						</Button>
					</Stack>

					<AspectRatio ratio={1.704 / 1} flex={1} position={'relative'} display={['none', 'none', 'block', 'block']}>
						<Image src={require(`@/assets/img/${image}.png`)} alt={image} fill />
					</AspectRatio>
				</Flex>
			</Flex>
		</Box>
	);
};
