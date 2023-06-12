import { TECHNOLOGY_DATA } from './technologyData';

import { CardCommon, ContainerMain, ListUseCases } from '@/components/Common';

import { Box, Button, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function SlugTechnology() {
	const router = useRouter();
	const { slug } = router.query as { slug: string };

	const bgButtonGradient = 'linear(to-r, #5F296D, #33296D)';

	return (
		<>
			<ContainerMain bg={'#F1F6FF'}>
				<Stack gap={20}>
					<Flex width={'108%'} ml={'-4%'}>
						<Image src={TECHNOLOGY_DATA[slug]?.urlBanner} alt={`Banner ${slug}`} />
					</Flex>
					<Text maxW={'80%'} fontSize={'18px'} fontWeight={400}>
						{TECHNOLOGY_DATA[slug]?.description}
					</Text>

					<Grid templateColumns={'repeat(auto-fit, minmax(200px, 1fr))'} gap={10}>
						{TECHNOLOGY_DATA[slug]?.cardList.map((item: { icon: string; title: string; text: string }, index: number) => (
							<CardCommon key={index} icons={item.icon} title={item.title} text={item.text} />
						))}
					</Grid>
					<Box bg={'white'} border={'1px solid #D8E1E9'} w={'100%'} p={'32px 24px'} borderRadius={'5px'}>
						<Flex>
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
								{TECHNOLOGY_DATA[slug]?.buttonList.map((item: { title: string; link: string }, index: number) => (
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
										>
											<Stack>
												<Heading as={'h2'} fontWeight={700} fontSize={'32px'} lineHeight={'100%'} maxW={'510px'}>
													{item.titleCardBanner}
												</Heading>
												<Text color={'purple.500'}>Book a demo today!</Text>
											</Stack>
											<Button size="xl" variant={'primary'}>
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