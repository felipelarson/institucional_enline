import { CARD_CUSTUMER } from './cardCustomerData';

import { Box, Stack, Card, Flex, Heading, Text, Button, Grid } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const CardCustomer = () => {
	const bgButtonGradient = 'linear(to-r, #5F296D, #33296D)';

	return (
		<Grid gap={[4, 8]} templateColumns={'repeat(auto-fit, minmax(330px, 1fr))'} mt={[10, 20]}>
			{CARD_CUSTUMER.map((item, index) => (
				<Card key={index} px={4} py={5} bg={'white'} border={'1px solid #D8E1E9'} borderRadius={5}>
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
							<Text color={'gray.500'} fontWeight={'bold'}>
								Suggest Solutions:
							</Text>
							<Button
								bgGradient={bgButtonGradient}
								_hover={{ bg: bgButtonGradient }}
								size={'degrade'}
								justifyContent={'flex-start'}
								pl={'5px'}
								w={'200px'}
								leftIcon={
									<Flex bg={'white'} w={'30px'} h={'30px'} rounded={'full'} alignItems={'center'} justifyContent={'center'}>
										<Image src={item.iconFirstButton} alt={item.altFirstButton} />
									</Flex>
								}
								as={NextLink}
								href={item.urlFirstButton}
							>
								{item.textFirstButton}
							</Button>
							<Button
								bgGradient={bgButtonGradient}
								_hover={{ bg: bgButtonGradient }}
								size={'degrade'}
								justifyContent={'flex-start'}
								pl={'5px'}
								w={'200px'}
								leftIcon={
									<Flex bg={'white'} w={'30px'} h={'30px'} rounded={'full'} alignItems={'center'} justifyContent={'center'}>
										<Image src={item.iconSecondButton} alt={item.altSecondButton} />
									</Flex>
								}
								as={NextLink}
								href={item.urlSecondButton}
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
	);
};
