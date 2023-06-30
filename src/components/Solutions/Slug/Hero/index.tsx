import { SLUG_DATA } from '@/pages/solutions/[slug]/mock';

import { Box, Button, Flex, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const SlugHero = () => {
	const router = useRouter();
	const { slug } = router.query as { slug: string };
	const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: false });

	const bgButtonGradient = 'linear(to-r, #5F296D, #33296D)';
	return (
		<>
			{isMobile ? (
				<Box
					bgGradient={'linear(106.68deg, #0E0E0F 5.44%, #33296D 106.62%)'}
					p={'1.54rem'}
					isolation={'isolate'}
					border={'1px solid #F1F6FF'}
					boxShadow={'0px 20px 40px rgba(8, 29, 71, 0.05)'}
					borderRadius={'20px'}
					width={'90%'}
					mt={'6rem'}
				>
					<Flex flex={1} position={'relative'} direction={'column'}>
						<Stack color={'white'} gap={[4, 6]} w={'100%'} mt={'50px'} alignItems={'center'}>
							<Button
								bgGradient={bgButtonGradient}
								color={'white'}
								rounded={'full'}
								size={'degrade'}
								w={'175px'}
								h={'43px'}
								justifyContent={'flex-start'}
								// pl={'5px'}
								leftIcon={
									<Flex bg={'white'} w={'29px'} h={'29px'} rounded={'full'} alignItems={'center'} justifyContent={'center'}>
										<Image src={SLUG_DATA[slug]?.hero.iconButton} alt="icon_liveview" />
									</Flex>
								}
								p={'8.4px 25.2px 8.4px 8.4px'}
							>
								<Text fontSize={'14px'}>{SLUG_DATA[slug]?.hero.textButton}</Text>
							</Button>
							<Heading as="h2" fontSize={'3xl'} fontWeight={'700'} textAlign={['center', 'center', 'left', 'left']}>
								<Text fontSize={'16px'}>
									{SLUG_DATA[slug]?.hero.title}
									<Text as={'span'} fontSize={'16px'} color={'purple.500'}>
										{SLUG_DATA[slug]?.hero.titleDestak}
									</Text>
								</Text>
							</Heading>
							<Text color={'white'} fontSize={'11px'} fontWeight={400}>
								{SLUG_DATA[slug]?.hero.description}
							</Text>
						</Stack>
						<Box flex={2} color={'white'}>
							<Image
								src={SLUG_DATA[slug]?.hero.imgScreen}
								alt={'Image career'}
								style={{
									position: 'absolute',
									top: '-19%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
									height: '10rem',
									width: '21rem'
								}}
							/>
						</Box>
					</Flex>
				</Box>
			) : (
				<Box
					bgGradient={'linear(106.68deg, #0E0E0F 5.44%, #33296D 106.62%)'}
					p={'48px'}
					isolation={'isolate'}
					border={'1px solid #F1F6FF'}
					boxShadow={'0px 20px 40px rgba(8, 29, 71, 0.05)'}
					borderRadius={'20px'}
					maxW={{ lg: '828px', xl: '930px' }}
				>
					<Flex flex={1} position={'relative'}>
						<Stack flex={1.8} color={'white'} gap={10}>
							<Button
								bgGradient={bgButtonGradient}
								color={'white'}
								rounded={'full'}
								size={'degrade'}
								// w={'288px'}
								w={'fit-content'}
								h={'83px'}
								justifyContent={'flex-start'}
								pl={'5px'}
								leftIcon={
									<Flex bg={'white'} rounded={'full'} alignItems={'center'} justifyContent={'center'}>
										<Image src={SLUG_DATA[slug]?.hero.iconButton} alt="icon_liveview" width={60} />
									</Flex>
								}
								p={'8.4px 25.2px 8.4px 13px'}
							>
								<Text fontSize={'30px'} px={3}>
									{SLUG_DATA[slug]?.hero.textButton}
								</Text>
							</Button>
							<Heading as="h2" fontSize={'3xl'} fontWeight={'700'} textAlign={['center', 'center', 'left', 'left']} w={'420px'}>
								<Text>
									{SLUG_DATA[slug]?.hero.title}
									<Text as={'span'} color={'purple.500'}>
										{SLUG_DATA[slug]?.hero.titleDestak}
									</Text>
								</Text>
							</Heading>
							<Text color={'white'} fontSize={'20px'} fontWeight={400} w={'356px'}>
								{SLUG_DATA[slug]?.hero.description}
							</Text>
						</Stack>
						<Box flex={2} color={'white'}>
							<Image
								src={SLUG_DATA[slug]?.hero.imgScreen}
								alt="image notebook"
								width={650}
								style={{
									position: 'absolute',
									top: '80%',
									left: '85%',
									transform: 'translate(-50%, -50%)'
								}}
							/>
						</Box>
					</Flex>
				</Box>
			)}
		</>
	);
};
