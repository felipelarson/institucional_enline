import { ContainerMain } from '@/components/Common';

import { Box, Card, CardBody, CardHeader, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FiMail } from 'react-icons/fi';

export const Contact = () => {
	return (
		<ContainerMain bg={'#F1F6FF'} p={['0', '16px']}>
			<Stack width={['100%', '70%']}>
				<Grid templateColumns={'repeat(auto-fit, minmax(330px, 1fr))'} gap={4} w={'100%'}>
					<Card bg={'white'} border={'1px solid #D8E1E9'} px={'24px'} py={'32px'} boxShadow={'none'}>
						<CardHeader>
							<Stack gap={4}>
								<Image src={require('@/assets/svg/icon_point.svg')} alt={'icon point'} width={50} height={50} />
								<Flex flex={1} alignItems={'center'} flexWrap={'wrap'}>
									<Box>
										<Heading fontSize={'18px'}>Meet our team</Heading>
									</Box>
								</Flex>
							</Stack>
						</CardHeader>
						<CardBody>
							<Stack gap={4}>
								<Box>
									<Text fontSize={'14px'}>Mirandela - Portugal</Text>
									<Text fontSize={'14px'}>São Paulo - Brasil</Text>
									<Text fontSize={'14px'}>Erlangen - Germany</Text>
									<Text fontSize={'14px'}>Lima - Peru</Text>
								</Box>
							</Stack>
						</CardBody>
					</Card>

					<Card bg={'white'} border={'1px solid #D8E1E9'} px={'24px'} py={'32px'} boxShadow={'none'}>
						<CardHeader>
							<Stack gap={6}>
								<Image src={require('@/assets/svg/icon_phone.svg')} alt={''} width={50} height={50} />

								<Flex flex={1} alignItems={'center'} flexWrap={'wrap'}>
									<Box>
										<Heading size={'md'}>Call us</Heading>
									</Box>
								</Flex>
							</Stack>
						</CardHeader>
						<CardBody>
							<Flex alignItems={'center'} gap={4}>
								<Image src={require('@/assets/svg/flag_peru.svg')} alt={'flag peru'} width={36} />
								<Text fontSize={'14px'}>PE +51 968 550 821</Text>
							</Flex>
							<Flex alignItems={'center'} gap={4}>
								<Image src={require('@/assets/svg/flag_brazil.svg')} alt={'flag brazil'} width={36} />
								<Text fontSize={'14px'}>BR +55 11986597516</Text>
							</Flex>
							<Flex alignItems={'center'} gap={4}>
								<Image src={require('@/assets/svg/flag_portugal.svg')} alt={'flag portugal'} width={36} />
								<Text fontSize={'14px'}>PT +351 910 622 515</Text>
							</Flex>
							<Flex alignItems={'center'} gap={4}>
								<Image src={require('@/assets/svg/flag_germany.svg')} alt={'flag germany'} width={36} />
								<Text fontSize={'14px'}>DE +49 176 2125 1343</Text>
							</Flex>
							<Flex alignItems={'center'} gap={4}>
								<FiMail size={'24px'} />
								<Text as={'a'} fontSize={'14px'} href={'mailto:info@enline-transmission.com'}>
									info@enline-transmission.com
								</Text>
							</Flex>
						</CardBody>
					</Card>
				</Grid>
			</Stack>
		</ContainerMain>
	);
};
