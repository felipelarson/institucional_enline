import { BANNER_DATA } from './mock';

import { Box, Button, Card, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const Hero = () => {
	const bgButtonGradient = 'linear(to-r, #5F296D, #33296D)';
	return (
		<Grid templateColumns={{ md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)' }} gap={6} mt={'36px'}>
			{BANNER_DATA.map((item, index) => (
				<Card key={index} bgGradient={item.bgGradient} color={'white'} p={['24px', '48px']} borderRadius={'20px'}>
					<Stack gap={[6, 12]} justify={'flex-start'}>
						<Button
							as={NextLink}
							href={item.href}
							bgGradient={bgButtonGradient}
							color={'white'}
							_hover={{
								bgGradient: bgButtonGradient,
								cursor: 'pointer'
							}}
							rounded={'full'}
							size={'degrade'}
							w={['fit-content', '288px']}
							h={'fit-content'}
							justifyContent={'flex-start'}
							pl={'5px'}
							leftIcon={
								<Flex bg={'white'} w={'39px'} h={'39px'} rounded={'full'} alignItems={'center'} justifyContent={'center'}>
									<Image src={require(`@/assets/svg/${item.icon}.svg`)} alt="icon_liveview" />
								</Flex>
							}
							p={'8.4px 25.2px 8.4px 8.4px'}
						>
							<Text fontSize={'20px'}>{item.textButton}</Text>
						</Button>
						<Text color={'white'} fontSize={'14px'} fontWeight={400}>
							{item.description}
						</Text>
						<Stack>
							<Text fontSize={'14px'}>Created for: </Text>
							{item.list.map((item, index) => (
								<Box key={index} bg={'#06083A'} p={'10px'} border={'1px solid #5A296E'} borderRadius={'10px'} w={'fit-content'}>
									<Text fontSize={'12px'} color={'white'}>
										{item}
									</Text>
								</Box>
							))}
						</Stack>

						<Button
							as={NextLink}
							href={item.href}
							borderRadius={'full'}
							px={'16px'}
							py={'6px'}
							color={'white'}
							bg={'purple.500'}
							rightIcon={<FiArrowRight />}
							w={'fit-content'}
							size={'lg'}
							fontSize={'14px'}
							_hover={{
								bgGradient: 'purple.500'
							}}
						>
							Explore to know more
						</Button>
					</Stack>
				</Card>
			))}
			<Card bgGradient={'linear(161.72deg, #F2F7FF 0.8%, #D7DEFA 88.27%)'} color={'black'} p={['24px', '48px']} borderRadius={'20px'}>
				<Stack gap={8} justify={'center'} h={'100%'}>
					<Heading fontSize={['25px', '32px']} lineHeight={'100%'}>
						Discover how Enline can transform your TSO operations
					</Heading>
					<Heading color={'purple.500'} fontSize={['25px', '32px']} lineHeight={'100%'}>
						Request a demo today!
					</Heading>

					<Button
						as={NextLink}
						borderRadius={'full'}
						px={'16px'}
						py={'6px'}
						color={'white'}
						bg={'purple.500'}
						rightIcon={<FiArrowRight />}
						w={'fit-content'}
						size={'lg'}
						fontSize={'14px'}
						href={'https://questionnaire.enline-transmission.com/'}
						target={'_blank'}
					>
						Schedule a meeting
					</Button>
				</Stack>
			</Card>
		</Grid>
	);
};
