import { CareerData } from './careersData';

import { ContainerMain } from '@/components/Common';

import { Box, Button, Card, Flex, Grid, Heading, Link, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';

export default function CareersDetails() {
	const router = useRouter();
	const { id } = router.query;

	const content = CareerData.find((item: { id: number }) => item.id === Number(id));

	return (
		<>
			<ContainerMain bg={'#F1F6FF'}>
				<Stack gap={5}>
					<Button
						bg={'white'}
						borderRadius={'20px'}
						px={'16px'}
						py={'6px'}
						maxW={'148px'}
						fontSize={'xs'}
						fontWeight={500}
						color={'purple.500'}
						onClick={() => router.push(`/careers`)}
					>
						<FiArrowLeft />
						Back to Careers
					</Button>
					<Heading as={'h2'} fontSize={'42px'} fontWeight={600}>
						{content?.title}
					</Heading>
					<Text maxW={'50%'} fontSize={'sm'} fontWeight={400} lineHeight={'100%'}>
						Position: {content?.subtitle.position}
					</Text>
					<Text maxW={'50%'} fontSize={'sm'} fontWeight={400} pb={14} lineHeight={'100%'}>
						Type: {content?.subtitle.type}
					</Text>
				</Stack>
			</ContainerMain>
			<ContainerMain position={'relative'} bgGradient={'linear(180deg, #FFFFFF 30.2%, #F1F6FF 96.8%)'}>
				<Image
					src={require(`@/assets/svg/bg-line.svg`)}
					alt={'bg-line'}
					style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, height: '55%', width: '100%' }}
				/>

				<Stack spacing={12} w={{ base: '80%', md: '80%' }} align={'flex-start'} borderLeft={'1px solid #D8E1E9'} p={'36px'}>
					<Text fontSize={'md'} fontWeight={700} lineHeight={'140%'} color={'#011F3B'}>
						Overview
					</Text>

					<UnorderedList>
						{content?.experience.map((item, index) => (
							<Text key={index} ml={'16px'} fontSize={'sm'} lineHeight={'180%'}>
								{item}
							</Text>
						))}
					</UnorderedList>
					<Text fontSize={'md'} fontWeight={700} lineHeight={'140%'} color={'#011F3B'}>
						Your Role
					</Text>
					<UnorderedList>
						{content?.otherExperience.map((item, index) => (
							<ListItem key={index} ml={'16px'} fontSize={'sm'} lineHeight={'180%'}>
								{item}
							</ListItem>
						))}
					</UnorderedList>
					<Text fontSize={'md'} fontWeight={700} lineHeight={'140%'} color={'#011F3B'}>
						Essential Qualities for Success
					</Text>
					<UnorderedList>
						{content?.essentialQualities?.map((item, index) => (
							<ListItem key={index} ml={'16px'} fontSize={'sm'} lineHeight={'180%'}>
								{item}
							</ListItem>
						))}
					</UnorderedList>
					<Text fontSize={'md'} fontWeight={700} lineHeight={'140%'} color={'#011F3B'}>
						About Enline...
					</Text>
					<UnorderedList>
						{content?.about?.map((item, index) => (
							<ListItem key={index} ml={'16px'} fontSize={'sm'} lineHeight={'180%'}>
								{item}
							</ListItem>
						))}
					</UnorderedList>
					<UnorderedList>
						{content?.local.map((item, index) => (
							<Text key={index} ml={'16px'} fontSize={'sm'} lineHeight={'180%'}>
								{item}
							</Text>
						))}
					</UnorderedList>
				</Stack>
				<Grid templateColumns={'repeat(auto-fit, minmax(200px, 1fr))'} gap={5} mt={12}>
					<Card bg={'white'} border={'1px solid #D8E1E9'} px={'24px'} py={'32px'} boxShadow={'none'}>
						<Stack gap={6}>
							<Image src={require('@/assets/svg/icon_mail.svg')} alt={'icon mail'} width={50} height={50} />
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
							<Image src={require('@/assets/svg/icon_point.svg')} alt={'icon point'} width={50} height={50} />
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
							<Image src={require('@/assets/svg/icon_phone.svg')} alt={'icon phone'} width={50} height={50} />
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
			</ContainerMain>
		</>
	);
}
