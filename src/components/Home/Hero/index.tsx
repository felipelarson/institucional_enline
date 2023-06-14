import { ContainerMain } from '@/components/Common';

import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FiArrowDownCircle } from 'react-icons/fi';

export const Hero = () => {
	return (
		<Flex
			align="center"
			justify={{ base: 'flex-end' }}
			direction={{ base: 'column-reverse', md: 'row' }}
			bgGradient={'linear(to-tl,#D9E0FB, #FFFFFF)'}
			minH={'100vh'}
			position={'relative'}
		>
			<Image src={require(`@/assets/svg/bg-line.svg`)} alt={'bg-line'} fill={true} style={{ objectFit: 'cover' }} />

			<ContainerMain zIndex={2}>
				<Stack spacing={12} w={{ base: '80%', md: '80%' }} align={'flex-start'}>
					<Box boxShadow={'lg'} p={'36px'} border={'1px solid #D8E1E9'} bgGradient={'linear(to-r, white, gray.50)'} borderRadius={'md'}>
						<Heading as="h1" size="3xl" fontWeight="bold" textAlign={['center', 'center', 'left', 'left']}>
							Energy monitoring made <br />
							<Text as={'span'} color={'purple.500'}>
								{' '}
								simple and sensorless
							</Text>
						</Heading>
					</Box>
					<Text color="gray.500" fontSize="xl" textAlign={['center', 'center', 'left', 'left']} maxW={350}>
						Transform your energy infrastructure monitoring and maintenance with
						<Text as={'span'} color={'purple.500'} fontWeight={500}>
							{' '}
							Enline`s sensorless A.I.-driven digital twin solution
						</Text>
					</Text>
					<Stack spacing={6} direction={'column'}>
						<Button variant={'hero'} as={NextLink} href={'https://questionnaire.enline-transmission.com/'} target={'_blank'}>
							Schedule a meeting
						</Button>
						<Button
							size={'sm'}
							rightIcon={<FiArrowDownCircle />}
							variant={'secondary'}
							fontSize={'12px'}
							fontWeight={500}
							cursor={'initial'}
							_hover={{ bg: 'white' }}
						>
							Scroll down
						</Button>
					</Stack>
				</Stack>
			</ContainerMain>
			<Box
				position={'absolute'}
				top={0}
				right={0}
				w={{ base: '60%', sm: '100%', md: '60%' }}
				bgImage={`url('/gif/img_hero_enline.gif')`}
				bgSize={'cover'}
				bgRepeat={'no-repeat'}
				bgPos={'center'}
				height={'100%'}
				width={'full'}
				zIndex={1}
			/>
		</Flex>
	);
};
