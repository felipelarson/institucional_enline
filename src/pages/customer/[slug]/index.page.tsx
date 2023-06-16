import { SLUG_DATA } from './mock';

import { ContainerMain, TitleSection } from '@/components/Common';

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
				<Breadcrumb spacing="2px" separator={<ChevronRightIcon color="gray.500" />} mb={4} color={'gray'} fontWeight={700} fontSize={'12px'}>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink href="/customer">Customer Segments</BreadcrumbLink>
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
				<Stack gap={[10, 20]}>
					<Box
						bgGradient={'linear(106.68deg, #0E0E0F 5.44%, #5C296D 106.62%)'}
						p={'48px'}
						border={'1px solid #F1F6FF'}
						boxShadow={'0px 20px 40px rgba(8, 29, 71, 0.05)'}
						borderRadius={'20px'}
						position={'relative'}
					>
						<Image src={require(`@/assets/svg/bg_line_brand.svg`)} alt={`Banner ${slug}`} fill={true} style={{ objectFit: 'cover' }} />
						<Stack color={'white'} gap={'48px'}>
							<Box
								w={'67px'}
								h={'67px'}
								bg={'white'}
								border={'1.5px solid #DDF3F9'}
								boxShadow={'0px 20px 40px rgba(8, 29, 71, 0.05)'}
								rounded={'full'}
								zIndex={1}
							>
								<Flex alignItems={'center'} justifyContent={'center'} w={'100%'} h={'100%'}>
									<Image src={SLUG_DATA[slug]?.bannerInitial.icon} alt={`Banner ${slug}`} style={{ objectFit: 'contain' }} />
								</Flex>
							</Box>
							<Heading as={'h2'} fontSize={'32px'} fontWeight={700} lineHeight={'100%'} maxW={'470px'}>
								{SLUG_DATA[slug]?.bannerInitial.title}
							</Heading>
							<Text fontSize={'20px'} fontWeight={400} lineHeight={'25px'}>
								{SLUG_DATA[slug]?.bannerInitial.subtitle}
							</Text>
						</Stack>
					</Box>

					<Flex
						border={'1px solid'}
						borderColor={'gray.200'}
						mt={24}
						p={'48px'}
						borderRadius={'20px'}
						gap={16}
						alignItems={'center'}
						direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
					>
						<Stack flex={1} gap={4}>
							<Heading as={'h2'} fontSize={['md', 'md', 'lg', 'lg']}>
								{SLUG_DATA[slug]?.titleBanner}
							</Heading>

							<Text fontSize={['md', 'md', 'md', 'lg']}>{SLUG_DATA[slug]?.descriptionBanner}</Text>
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
						px={'48px'}
						py={'60px'}
						h={'fit-content'}
						gap={16}
						border={'1px solid #D8E1E9'}
						borderRadius={20}
						direction={['column', 'column', 'column', 'row']}
					>
						<Stack>
							<Heading fontWeight={'bold'} as={'h2'} fontSize={['xl', '3xl']}>
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
							<Heading fontWeight={'bold'} as={'h2'} fontSize={['md', 'xl']}>
								Schedule a meeting
							</Heading>
						</Button>
					</Flex>
				</Stack>
			</ContainerMain>
		</>
	);
}
