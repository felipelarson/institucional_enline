import { CARDCUSTUMER } from './mock';

import { ContainerMain, TitleSection } from '@/components/Common';

import { Box, Button, Card, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const Customer = () => {
	const bgButtonGradient = 'linear(to-r, #5F296D, #33296D)';

	return (
		<ContainerMain bgGradient={'linear(to-br, white, #D9E0FB)'}>
			<Flex direction={'column'} gap={12}>
				<TitleSection
					title="Customer Segments"
					subtitle="Tailored Solutions for the Energy Sector"
					description="Explore how Enline`s technology delivers customized benefits to a wide range of industries and customer types, driving efficiency and sustainability across the energy sector."
				/>

				<Flex gap={4} direction={['column', 'column', 'column', 'row']}>
					{CARDCUSTUMER.map((item, index) => (
						<Card key={index} px={4} py={5} bg={'white'} border={'1px solid #D8E1E9'} borderRadius={5} boxShadow={'none'}>
							<Stack bg={'#F1F6FF'} p={4} borderRadius={5} mb={6} h={'200px'} justifyContent={'space-between'}>
								<Box bg={'white'} h={50} w={50} rounded={'full'} border={'1px solid #D8E1E9'}>
									<Flex justifyContent={'center'} alignItems={'center'} h={'100%'}>
										<Image src={require(`@/assets/svg/icon_${item.icons}.svg`)} alt={item.icons} />
									</Flex>
								</Box>
								<Text fontSize={'lg'} fontWeight={700} lineHeight={'140%'} maxW={'240px'}>
									{item.title}
								</Text>
								<Text fontSize={'sm'} fontWeight={400} lineHeight={'140%'} maxW={'240px'}>
									{item.subtitle}
								</Text>
							</Stack>
							<Stack gap={6}>
								<Stack justifyContent={'flex-start'}>
									<Text color={'gray.500'} fontSize={'12px'} lineHeight={'140%'} fontWeight={'bold'}>
										Suggest Solutions:
									</Text>
									<Button
										as={NextLink}
										href={item.url}
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
									>
										{item.textFirstButton}
									</Button>
									<Button
										as={NextLink}
										href={item.urlSecondary}
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
				</Flex>
				<Flex w={'100%'} justifyContent={'center'}>
					<Flex
						justifyContent={'space-between'}
						alignItems={'center'}
						direction={['column', 'column', 'column', 'row']}
						bg={'gray.50'}
						p={'32px 24px 32px 34px'}
						h={['fit-content', 'fit-content', 'fit-content', 144]}
						border={'1px solid #D8E1E9'}
						borderRadius={20}
						w={['100%', '85%']}
						gap={8}
					>
						<Text fontSize={'14px'} lineHeight={'19.6px'} fontWeight={'400'}>
							Explore our customer segments and see how Enline`s innovative technology is driving efficiency and sustainability across
							diverse industries.
						</Text>
						<Button as={NextLink} href={'/customer'} size="xl" variant={'primary'}>
							Customer segments
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</ContainerMain>
	);
};
