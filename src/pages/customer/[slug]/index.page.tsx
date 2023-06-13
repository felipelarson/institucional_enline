import { SLUG_DATA } from './mock';

import { ContainerMain, TitleSection } from '@/components/Common';

import { Box, Button, Card, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FiArrowRight } from 'react-icons/fi';

export default function Slug() {
	const router = useRouter();
	const { slug } = router.query as { slug: string };
	const bgButtonGradient = 'linear(to-r, #5F296D, #33296D)';

	return (
		<>
			<ContainerMain bg={'#F1F6FF'}>
				<Stack gap={20}>
					<Image src={SLUG_DATA[slug]?.urlBanner} alt={`Banner ${slug}`} />

					<Flex border={'1px solid'} borderColor={'gray.200'} mt={24} p={'48px'} borderRadius={'20px'} gap={16} alignItems={'center'}>
						<Stack flex={1} gap={4}>
							<Heading as={'h2'} fontSize={'lg'}>
								{SLUG_DATA[slug]?.titleBanner}
							</Heading>

							<Text fontSize={'lg'}>{SLUG_DATA[slug]?.descriptionBanner}</Text>
						</Stack>
						<Box w={'full'} h={'full'} flex={1}>
							<Image src={SLUG_DATA[slug]?.imageBanner} alt="" />
						</Box>
					</Flex>
				</Stack>
			</ContainerMain>
			<ContainerMain bgGradient={'linear(293.83deg, #D9E0FB 0%, #FFFFFF 100%)'}>
				<Stack gap={20}>
					<TitleSection
						title={'Customer Segments'}
						subtitle="Product suitability & application:"
						description="Empowering Success with Tailored Solutions."
					/>

					<Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={4}>
						{SLUG_DATA[slug]?.customerSegments.map((item, index) => (
							<Card
								key={index}
								h={'250px'}
								bgGradient={'linear(106.68deg, #0E0E0F 5.44%, #33296D 106.62%)'}
								padding={'30px'}
								borderRadius={'20px'}
							>
								<Stack gap={4}>
									<Button
										bgGradient={bgButtonGradient}
										_hover={{ bg: bgButtonGradient }}
										size={'degrade'}
										justifyContent={'flex-start'}
										pl={'5px'}
										w={'200px'}
										leftIcon={
											<Flex bg={'white'} w={'30px'} h={'30px'} rounded={'full'} alignItems={'center'} justifyContent={'center'}>
												<Image src={item.iconButton} alt={item.altButton} />
											</Flex>
										}
										as={NextLink}
										href={item.urlButton}
									>
										{item.textButton}
									</Button>
									<Text color={'white'}>{item.description}</Text>
									<Button
										h={'40px'}
										w={'180px'}
										variant={'primary'}
										rightIcon={<FiArrowRight />}
										as={NextLink}
										href={item.urlButton}
									>
										<Text fontSize={'xs'}>Explore to know more</Text>
									</Button>
								</Stack>
							</Card>
						))}
					</Grid>

					<Flex
						justifyContent={'space-between'}
						alignItems={'center'}
						bgGradient={'linear(161.72deg, #F2F7FF 0.8%, #D7DEFA 88.27%)'}
						px={16}
						h={144}
						gap={16}
						border={'1px solid #D8E1E9'}
						borderRadius={20}
					>
						<Stack>
							<Heading fontWeight={'bold'} as={'h2'} fontSize={'3xl'}>
								{SLUG_DATA[slug]?.titleSchedule}
							</Heading>
							<Text color={'purple.500'}>Request a demo today!</Text>
						</Stack>
						<Button
							size="xl"
							w={'205px'}
							variant={'primary'}
							as={NextLink}
							href={'https://questionnaire.enline-transmission.com/'}
							target={'_blank'}
						>
							<Heading fontWeight={'bold'} as={'h2'} fontSize={'xl'}>
								Schedule a meeting
							</Heading>
						</Button>
					</Flex>
				</Stack>
			</ContainerMain>
		</>
	);
}
