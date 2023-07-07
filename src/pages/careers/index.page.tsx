import { SLUG_DATA } from './careersData';

import { ContainerMain } from '@/components/Common';

import { Box, Button, Card, Flex, Grid, Heading, Link, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Careers() {
	const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: false });
	const mTop = isMobile ? '144px' : '0';
	return (
		<>
			<ContainerMain bg={'#F1F6FF'} p={[0, '16px 100px']}>
				<Stack gap={10} mt={mTop}>
					{isMobile ? (
						<Box
							bgGradient={'linear(106.68deg, #0E0E0F 5.44%, #33296D 106.62%)'}
							p={'1.54rem'}
							isolation={'isolate'}
							border={'1px solid #F1F6FF'}
							boxShadow={'0px 20px 40px rgba(8, 29, 71, 0.05)'}
							borderRadius={'20px'}
							width={['100%', '90%']}
						>
							<Flex flex={1} position={'relative'} direction={'column'}>
								<Stack color={'white'} gap={[4, 6]} justify={'center'} w={'100%'} mt={'50px'}>
									<Heading as={'h2'} fontSize={'1.024rem'} lineHeight={'100%'}>
										Drive Innovation and Shape{' '}
										<Heading as={'span'} color={'purple.500'} fontSize={'1.024rem'}>
											the Future of Energy
										</Heading>
									</Heading>
									<Text fontSize={'0.64rem'} fontWeight={400} lineHeight={'140%'}>
										If you share our vision and are eager to make a difference, we invite you to explore our exciting career
										opportunities.
									</Text>
									F
								</Stack>
								<Box flex={2} color={'white'}>
									<Image
										src={require('@/assets/img/img_careers.png')}
										alt={'Image career'}
										style={{
											position: 'absolute',
											top: '-25%',
											left: '50%',
											transform: 'translate(-50%, -50%)',
											height: '9rem',
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
							width={'90%'}
						>
							<Flex flex={1} position={'relative'}>
								<Stack flex={1.8} color={'white'} gap={10}>
									<Heading as={'h2'} fontSize={'42px'} lineHeight={'100%'}>
										Drive Innovation and Shape{' '}
										<Heading as={'span'} color={'purple.500'} fontSize={'42px'}>
											the Future of Energy
										</Heading>
									</Heading>
									<Text fontSize={'20px'} fontWeight={400} lineHeight={'25px'}>
										If you share our vision and are eager to make a difference, we invite you to explore our exciting career
										opportunities.
									</Text>
								</Stack>
								<Box flex={2} color={'white'}>
									<Image
										src={require('@/assets/img/img_careers.png')}
										alt={'Image career'}
										style={{
											position: 'absolute',
											top: '80%',
											left: '85%',
											transform: 'translate(-50%, -50%)',
											height: '297px',
											width: '581px'
										}}
									/>
								</Box>
							</Flex>
						</Box>
					)}

					<Text maxW={['100%', '70%']} fontSize={'sm'} fontWeight={400} pb={6} lineHeight={'140%'} pt={'60px'}>
						{SLUG_DATA?.description}
					</Text>

					<Grid templateColumns={'repeat(auto-fit, minmax(200px, 1fr))'} gap={5}>
						<Card bg={'white'} border={'1px solid #D8E1E9'} px={'24px'} py={'32px'} boxShadow={'none'}>
							<Stack gap={6}>
								<Image src={require('@/assets/svg/icon_mail.svg')} alt={''} width={50} height={50} />
								<Flex flex={1} alignItems={'center'} flexWrap={'wrap'}>
									<Box>
										<Heading size={'md'}>Email us your CV</Heading>
									</Box>
								</Flex>
								<Text fontSize={'14px'} lineHeight={'140%'}>
									We&apos;re growing fast with 50+ open roles.
								</Text>
								<Text fontSize={'14px'} lineHeight={'140%'} color={'purple.500'}>
									<Link as={NextLink} href="mailto:careers@enline-transmission.com">
										careers@enline-transmission.com
									</Link>
									<br />
									<Link as={NextLink} href="mailto:info@enline-transmission.com">
										info@enline-transmission.com
									</Link>
								</Text>
							</Stack>
						</Card>
						<Card bg={'white'} border={'1px solid #D8E1E9'} px={'24px'} py={'32px'} boxShadow={'none'}>
							<Stack gap={6}>
								<Image src={require('@/assets/svg/icon_point.svg')} alt={''} width={50} height={50} />
								<Flex flex={1} alignItems={'center'} flexWrap={'wrap'}>
									<Box>
										<Heading size={'md'}>Meet our team</Heading>
									</Box>
								</Flex>
								<Text fontSize={'14px'} lineHeight={'140%'}>
									Come meet our friendly team at HQ.
								</Text>
								<Text fontSize={'14px'} lineHeight={'140%'} color={'purple.500'}>
									Mirandela(Portugal), São Paulo(Brazil), Erlangen(Germany), Lima(Peru)
								</Text>
							</Stack>
						</Card>
						<Card bg={'white'} border={'1px solid #D8E1E9'} px={'24px'} py={'32px'} boxShadow={'none'}>
							<Stack gap={6}>
								<Image src={require('@/assets/svg/icon_phone.svg')} alt={''} width={50} height={50} />
								<Flex flex={1} alignItems={'center'} flexWrap={'wrap'}>
									<Box>
										<Heading size={'md'}>Call us</Heading>
									</Box>
								</Flex>
								<Text fontSize={'14px'} lineHeight={'140%'}>
									Hear more about our open roles.
								</Text>
								<Text fontSize={'14px'} lineHeight={'140%'} color={'purple.500'}>
									+55 11986597516
								</Text>
							</Stack>
						</Card>
					</Grid>
				</Stack>
			</ContainerMain>
			<ContainerMain bgGradient={'linear(293.83deg, #D9E0FB 0%, #FFFFFF 100%)'} p={['0', '16px 100px']}>
				<Stack gap={[10, 20]}>
					<Stack gap={3}>
						<Heading as={'h2'}>Opportunity Awaits: Explore Our Current Job Openings</Heading>
						<Text fontSize={'sm'} fontWeight={400} lineHeight={'140%'} maxW={['100%', '50%']}>
							Learn about our company culture, and find out why Enline is the perfect place to grow your career.
						</Text>
					</Stack>
					<Grid templateColumns={'repeat(auto-fit, minmax(330px, 1fr))'} gap={5}>
						{SLUG_DATA?.cardCareer.map((job: any, index: number) => (
							<Card
								key={index}
								bg={'#FAFAFF'}
								px={'24px'}
								py={'32px'}
								border={'1px solid #D8E1E9'}
								boxShadow={'none'}
								borderRadius="5px"
							>
								<Stack gap={6}>
									<Box bg={'#F1F6FF'} borderRadius={'5px'} p={'24px'}>
										<Text fontSize={'md'} lineHeight={'140%'} fontWeight={700}>
											{job.title}
										</Text>
										<Text fontSize={'sm'} lineHeight={'140%'} fontWeight={400}>
											{job.subtitle}
										</Text>
									</Box>
									<hr />
									<Button
										as={NextLink}
										rounded="full"
										size="lg"
										px={6}
										colorScheme={'white'}
										bg={'white'}
										color={'purple.500'}
										_hover={{ bg: 'purple.600', color: 'white' }}
										rightIcon={<FiArrowRight />}
										href={job.link}
										maxW={'290px'}
										border={'1px solid'}
										borderColor={'purple.500'}
									>
										<Heading as={'h2'} fontSize={'sm'} fontWeight={700} lineHeight={'18px'}>
											Explore to know more
										</Heading>
									</Button>
								</Stack>
							</Card>
						))}
					</Grid>
				</Stack>
			</ContainerMain>
		</>
	);
}
