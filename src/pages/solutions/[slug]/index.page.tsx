import { SLUG_DATA } from './mock';

import { CardCommon, ContainerMain, ListUseCases, TitleSection } from '@/components/Common';
import { SlugHero } from '@/components/Solutions/Slug/Hero';

import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Card, Flex, Grid, Heading, Stack, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
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
				<Breadcrumb spacing="2px" separator={<ChevronRightIcon color="gray.500" />} color={'gray'} fontWeight={700} fontSize={'12px'}>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
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
				<Stack gap={[4, 8, 12, 24]} mt={'20px'}>
					<SlugHero />
					<Text maxW={['100%', '80%']} fontSize={['14px', '18px']} fontWeight={400} pt={['12px', '24px']}>
						{SLUG_DATA[slug]?.description}
					</Text>

					<Grid templateColumns={'repeat(auto-fit, minmax(200px, 1fr))'} gap={[5, 10]}>
						{SLUG_DATA[slug]?.cardList.map((item, index) => (
							<CardCommon key={index} icons={item.icon} title={item.title} text={item.text} />
						))}
					</Grid>
				</Stack>
			</ContainerMain>
			<ContainerMain bgGradient={'linear(293.83deg, #D9E0FB 0%, #FFFFFF 100%)'} position={'relative'} zIndex={1}>
				<Image
					src={require(`@/assets/svg/bg-line.svg`)}
					alt={'bg-line'}
					style={{
						objectFit: 'cover',
						objectPosition: 'center',
						zIndex: -1,
						position: 'absolute',
						top: 0,
						left: 0,
						height: '45%',
						width: '100%'
					}}
				/>
				<Stack gap={28}>
					<TitleSection
						title={SLUG_DATA[slug]?.titleSection as string}
						subtitle={SLUG_DATA[slug]?.subtitleSection as string}
						description={SLUG_DATA[slug]?.descriptionSection as string}
					/>
					{SLUG_DATA[slug]?.sectionList.map((item, index) => {
						return (
							<ListUseCases
								key={index}
								reverse={item.reverse}
								title={item.title}
								text={item.text}
								textImage={item.textImage}
								image={item.image}
							/>
						);
					})}
				</Stack>
			</ContainerMain>
			<ContainerMain bg={'#F1F6FF'}>
				<Stack gap={20}>
					<TitleSection
						title={'Customer Segments'}
						subtitle={'Solutions suitability & application:'}
						description={'Empowering Success with Tailored Solutions'}
					/>
					{/* start card */}
					<Grid templateColumns={['repeat(auto-fit, minmax(238px, 1fr))', 'repeat(auto-fit, minmax(338px, 1fr))']} gap={[3, 6]}>
						{SLUG_DATA[slug]?.cardCustomer.map((item, index) => (
							<Card key={index} px={4} py={5} bg={'white'} border={'1px solid #D8E1E9'} borderRadius={5} boxShadow={'none'}>
								<Stack bg={'#F1F6FF'} p={4} borderRadius={5} mb={6} h={'250px'} justifyContent={'space-between'}>
									<Box
										bg={'white'}
										h={50}
										w={50}
										rounded={'full'}
										border={'1px solid #D8E1E9'}
										boxShadow={'0px 20px 40px rgba(8, 29, 71, 0.05)'}
									>
										<Flex justifyContent={'center'} alignItems={'center'} h={'100%'}>
											<Image src={require(`@/assets/svg/icon_${item.icons}.svg`)} alt={item.icons} />
										</Flex>
									</Box>
									<Heading as="h2" size={'md'} fontSize={'lg'}>
										{item.title}
									</Heading>
									<Text>{item.subtitle}</Text>
								</Stack>
								<Stack gap={6}>
									<Stack justifyContent={'flex-start'}>
										<Text fontSize={'12px'} color={'gray.500'} fontWeight={'bold'}>
											Suggest Solutions:
										</Text>
										<Button
											as={NextLink}
											href={item.urlFirstButton}
											bgGradient={bgButtonGradient}
											_hover={{ bg: bgButtonGradient }}
											size={'degrade'}
											justifyContent={'flex-start'}
											pl={'5px'}
											w={'200px'}
											leftIcon={
												<Flex
													bg={'white'}
													w={'30px'}
													h={'30px'}
													rounded={'full'}
													alignItems={'center'}
													justifyContent={'center'}
												>
													<Image src={item.iconFirstButton} alt={item.altFirstButton} />
												</Flex>
											}
										>
											{item.textFirstButton}
										</Button>
										<Button
											as={NextLink}
											href={item.urlSecondButton}
											bgGradient={bgButtonGradient}
											_hover={{ bg: bgButtonGradient }}
											size={'degrade'}
											justifyContent={'flex-start'}
											pl={'5px'}
											w={'200px'}
											leftIcon={
												<Flex
													bg={'white'}
													w={'30px'}
													h={'30px'}
													rounded={'full'}
													alignItems={'center'}
													justifyContent={'center'}
												>
													<Image src={item.iconSecondButton} alt={item.altSecondButton} />
												</Flex>
											}
										>
											{item.textSecondButton}
										</Button>
									</Stack>
									<hr />
									<Button
										as={NextLink}
										href={item.urlCustomer}
										bg={'white'}
										border={'1px solid'}
										borderColor={'purple.500'}
										rounded={'full'}
										rightIcon={<FiArrowRight />}
										size={'lg'}
										color={'purple.500'}
									>
										<Heading fontWeight={'bold'} as={'h2'} fontSize={'sm'}>
											Explore to know more
										</Heading>
									</Button>
								</Stack>
							</Card>
						))}
					</Grid>
					{/* end card */}
					<Flex w={'100%'} justifyContent={'center'} alignItems={'center'}>
						<Flex
							justifyContent={'space-between'}
							alignItems={'center'}
							bgGradient={'linear(161.72deg, #F2F7FF 0.8%, #D7DEFA 88.27%)'}
							px={['24px', '48px']}
							py={['30px', '60px']}
							border={'1px solid #D8E1E9'}
							borderRadius={20}
							w={['100%', '85%']}
							direction={['column', 'row']}
							gap={10}
						>
							<Stack maxW={['100%', '67%']} justifyContent={['center', 'flex-start']}>
								<Heading as={'h2'} fontWeight={'bold'} fontSize={['25px', '32px']} lineHeight={'100%'}>
									{SLUG_DATA[slug]?.titleCardCustomer}
								</Heading>
								<Text color={'purple.500'} fontWeight={'400'} fontSize={'18px'} lineHeight={'150%'}>
									{SLUG_DATA[slug]?.subtitleCardCustomer}
								</Text>
							</Stack>
							<Button
								size={'xl'}
								variant={'primary'}
								as={NextLink}
								href={'https://questionnaire.enline-transmission.com/'}
								target={'_blank'}
							>
								<Heading as={'h2'} fontWeight={'bold'} fontSize={'18px'}>
									Schedule a meeting
								</Heading>
							</Button>
						</Flex>
					</Flex>
				</Stack>
			</ContainerMain>
		</>
	);
}
