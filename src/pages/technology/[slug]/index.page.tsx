import { TECHNOLOGY_DATA } from './technologyData';

import { CardCommon, ContainerMain, ListUseCases } from '@/components/Common';

import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Grid, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function SlugTechnology() {
	const router = useRouter();
	const { slug } = router.query as { slug: string };
	const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: false });

	const bgButtonGradient = 'linear(to-r, #5F296D, #33296D)';

	return (
		<>
			<ContainerMain bg={'#F1F6FF'}>
				<Breadcrumb spacing="2px" separator={<ChevronRightIcon color="gray.500" />} mb={0} color={'gray'} fontWeight={700} fontSize={'12px'}>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink href="/technology">Technology</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href="#">
							{slug
								?.split('_')
								.map((item) => item.charAt(0).toUpperCase() + item.slice(1))
								.join(' ')}
						</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>

				<Stack gap={20}>
					{isMobile ? (
						<Box
							bgGradient={'linear(106.68deg, #0E0E0F 5.44%, #33296D 106.62%)'}
							p={'1.54rem'}
							isolation={'isolate'}
							border={'1px solid #F1F6FF'}
							boxShadow={'0px 20px 40px rgba(8, 29, 71, 0.05)'}
							borderRadius={'20px'}
							width={'90%'}
							mt={'11rem'}
						>
							<Flex flex={1} position={'relative'} direction={'column'}>
								<Stack color={'white'} gap={[4, 6]} justify={'center'} w={'100%'} mt={'50px'}>
									<Text fontSize={'0.64rem'} lineHeight={'140%'} fontWeight={400} color={'#FFAE33'}>
										{TECHNOLOGY_DATA[slug]?.titleBannerMobile}
									</Text>
									<Heading as={'h2'} fontSize={'1.024rem'} lineHeight={'100%'}>
										{TECHNOLOGY_DATA[slug]?.subtitleBannerMobile}
									</Heading>
									<Text fontSize={'0.64rem'} fontWeight={400} lineHeight={'140%'}>
										{TECHNOLOGY_DATA[slug]?.descriptionBannerMobile}
									</Text>
									F
								</Stack>
								<Box flex={2} color={'white'}>
									<Image
										src={TECHNOLOGY_DATA[slug]?.urlBannerMobile}
										alt={'Image career'}
										style={{
											position: 'absolute',
											top: '-40%',
											left: '50%',
											transform: 'translate(-50%, -50%)',
											height: '12rem',
											width: '21rem'
										}}
									/>
								</Box>
							</Flex>
						</Box>
					) : (
						<Flex width={'108%'} ml={'-4%'}>
							<Image src={TECHNOLOGY_DATA[slug]?.urlBanner} alt={`Banner ${slug}`} />
						</Flex>
					)}
					<Text maxW={'80%'} fontSize={'18px'} fontWeight={400}>
						{TECHNOLOGY_DATA[slug]?.description}
					</Text>

					<Grid templateColumns={'repeat(auto-fit, minmax(200px, 1fr))'} gap={10}>
						{TECHNOLOGY_DATA[slug]?.cardList.map((item: { icon: string; title: string; text: string }, index: number) => (
							<CardCommon key={index} icons={item.icon} title={item.title} text={item.text} boxShadow={'none'} />
						))}
					</Grid>
					<Box bg={'white'} border={'1px solid #D8E1E9'} w={'100%'} p={'32px 24px'} borderRadius={'5px'}>
						<Flex direction={['column', 'row']} gap={10}>
							<Box bg={'#F1F6FF'} p={'24px'}>
								<Stack gap={6}>
									<Heading size={'md'}>{TECHNOLOGY_DATA[slug]?.titleBanner}</Heading>
									<Text fontSize={'14px'} fontWeight={400}>
										{TECHNOLOGY_DATA[slug]?.descriptionBanner}
									</Text>
								</Stack>
							</Box>
							<Stack px={'24px'}>
								<Text fontSize={'12px'} color={'#83919E'} fontWeight={700}>
									Integrated with
								</Text>
								{TECHNOLOGY_DATA[slug]?.buttonList.map((item: { title: string; link: string; urlButton: string }, index: number) => (
									<Button
										key={index}
										bgGradient={bgButtonGradient}
										_hover={{ bg: bgButtonGradient }}
										size={'degrade'}
										justifyContent={'flex-start'}
										pl={'5px'}
										w={'200px'}
										leftIcon={
											<Flex bg={'white'} w={'30px'} h={'30px'} rounded={'full'} alignItems={'center'} justifyContent={'center'}>
												<Image src={item.link} alt={item.title} />
											</Flex>
										}
										as={NextLink}
										href={item.urlButton}
									>
										{item.title}
									</Button>
								))}
							</Stack>
						</Flex>
					</Box>
				</Stack>
			</ContainerMain>
			<ContainerMain bgGradient={'linear(293.83deg, #D9E0FB 0%, #FFFFFF 100%)'}>
				<Stack>
					{TECHNOLOGY_DATA[slug]?.sectionList.map(
						(item: { reverse: boolean; title: string; text: string; textImage: string; titleCardBanner: string }, index: number) => {
							return (
								<Stack key={index} gap={20}>
									<ListUseCases
										reverse={item.reverse}
										title={item.title}
										text={item.text}
										textImage={item.textImage}
										image={slug}
									/>{' '}
									<Flex w={'100%'} align={'center'} justify={'center'}>
										<Flex
											justifyContent={'space-between'}
											alignItems={'center'}
											bgGradient={'linear(161.72deg, #F2F7FF 0.8%, #D7DEFA 88.27%)'}
											p={'44px'}
											border={'1px solid #D8E1E9'}
											borderRadius={20}
											maxW={'861px'}
											direction={['column', 'row']}
											gap={10}
										>
											<Stack>
												<Heading as={'h2'} fontWeight={700} fontSize={['25px', '32px']} lineHeight={'100%'} maxW={'510px'}>
													{item.titleCardBanner}
												</Heading>
												<Text color={'purple.500'}>Book a demo today!</Text>
											</Stack>
											<Button
												size="xl"
												variant={'primary'}
												as={NextLink}
												href={'https://questionnaire.enline-transmission.com/'}
												target={'_blank'}
											>
												Schedule a meeting
											</Button>
										</Flex>
									</Flex>
								</Stack>
							);
						}
					)}
				</Stack>
			</ContainerMain>
		</>
	);
}
