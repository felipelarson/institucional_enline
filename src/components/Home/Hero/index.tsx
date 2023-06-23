import { HeroMobile } from '../HeroMibile';

import { ContainerMain } from '@/components/Common';

import { Box, Button, Flex, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FiArrowDownCircle } from 'react-icons/fi';

export const Hero = () => {
	const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
	return (
		<>
			{isMobile ? (
				<HeroMobile />
			) : (
				<Flex
					align="center"
					justify={{ base: 'flex-end' }}
					direction={{ base: 'column-reverse', md: 'row' }}
					bgGradient={'linear(to-tl,#D9E0FB, #FFFFFF)'}
					minH={'100vh'}
					position={'relative'}
				>
					<Image
						src={require(`@/assets/svg/bg-line.svg`)}
						alt={'bg-line'}
						style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, height: '90%', width: '100%' }}
					/>

					<ContainerMain zIndex={2}>
						<Stack spacing={12} w={{ base: '80%', md: '80%' }} align={'flex-start'}>
							<Box
								boxShadow={'0px 20px 40px rgba(8, 29, 71, 0.05)'}
								p={'36px'}
								border={'1px solid #D8E1E9'}
								bgGradient={'linear(131.85deg, #FFFFFF 0.5%, #EBF3FF 100.67%)'}
								borderRadius={'5px'}
							>
								<Heading
									as={'h2'}
									fontSize={'42px'}
									fontWeight="bold"
									textAlign={['center', 'center', 'left', 'left']}
									lineHeight={'100%'}
								>
									Energy monitoring made <br />
									<Text as={'span'} color={'purple.500'}>
										{' '}
										simple and sensorless
									</Text>
								</Heading>
							</Box>
							<Text color="gray.500" fontSize={'18px'} textAlign={['center', 'center', 'left', 'left']} maxW={350} lineHeight={'140%'}>
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
					<video
						autoPlay
						muted
						loop
						playsInline
						style={{
							position: 'absolute',
							top: 0,
							left: '40%',
							width: '100%',
							height: '100%',
							zIndex: 1,
							objectFit: 'cover'
						}}
					>
						<source src="/gif/enline-bg.mp4" type="video/mp4" />
					</video>
				</Flex>
			)}
		</>
	);
};
