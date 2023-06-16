import bg from '@/assets/img/bg_footer.png';

import { Container, Link, SimpleGrid, Stack, Text, Button, Flex, Box, Heading, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';

export const Footer = () => {
	return (
		<Flex style={{ backgroundImage: `url(${bg.src})` }} bgSize="cover" bgPosition="center" color={'white'} minH={423} alignItems={'center'}>
			<Container as={Stack} maxW={'6xl'} pt={16} pb={10}>
				<SimpleGrid
					templateColumns={{ sm: '1fr', md: '1.65fr 1fr 1fr 1fr' }}
					spacing={16}
					borderBottom={'1px solid rgba(255,255,255, 0.2)'}
					pb={8}
				>
					<Stack spacing={6}>
						<Box as={NextLink} href={'/'}>
							<Image src={require('@/assets/svg/brand_enline_white.svg')} alt="Enline's brand" />
						</Box>

						<Box>
							<Image src={require('@/assets/img/startup.png')} alt="Enline's brand" height={87} />
						</Box>
					</Stack>
					<Stack align={'flex-start'} spacing={'16px'}>
						<Link href={'/company'}>
							<Heading fontSize={'14px'} fontWeight={700}>
								Company
							</Heading>
						</Link>
						<Link href={'/solutions'}>
							<Heading fontSize={'14px'} fontWeight={700}>
								Solution
							</Heading>
						</Link>
						<Link href={'/customer'}>
							<Heading fontSize={'14px'} fontWeight={700}>
								Customer Segments
							</Heading>
						</Link>
					</Stack>
					<Stack align={'flex-start'}>
						<Link href={'/learn'}>
							<Heading fontSize={'14px'} fontWeight={700}>
								Learn & Tutorials
							</Heading>
						</Link>
						<Link href={'/updates'}>
							<Heading fontSize={'14px'} fontWeight={700}>
								Updates
							</Heading>
						</Link>
						{/* <Link href={'/news'}>Newsroom</Link>
						<Link href={'/careers'}>Careers</Link> */}
					</Stack>
					<Stack align={'flex-end'} spacing={5}>
						<Button
							as={NextLink}
							href={'https://questionnaire.enline-transmission.com/'}
							target={'_blank'}
							size={'sm'}
							variant={'primary'}
							h={'30px'}
						>
							<Heading fontSize={'14px'} fontWeight={700}>
								Schedule a meeting
							</Heading>
						</Button>
						<Stack direction={'row'} gap={4} pr={'12px'}>
							<Box as={NextLink} href={'https://www.linkedin.com/company/gml-enline/mycompany/'} target="_blank">
								<Icon as={FiLinkedin} boxSize={7} />
							</Box>
							<Box as={NextLink} href={'https://www.youtube.com/@enlinesmartenergysolutions999'} target="_blank">
								<Icon as={FiYoutube} boxSize={7} />
							</Box>
							<Box as={NextLink} href={'https://www.instagram.com/enlinesmartsolutions/'} target="_blank">
								<Icon as={FiInstagram} boxSize={7} />
							</Box>
						</Stack>
					</Stack>
				</SimpleGrid>
				<Stack as={NextLink} href="/pdf/Ficha_do_Projeto_RHAQ_web.pdf" download={true} target="_blank" align={'center'} py={27}>
					<Image src={require('@/assets/img/norte2020.png')} alt="Enline's brand" height={87} />
				</Stack>
				<Text fontSize={'sm'} align={'center'} fontWeight={400} pb={'39px'}>
					© COPYRIGHT 2022 - ENLINE - TERMS AND CONDITIONS
				</Text>
			</Container>
		</Flex>
	);
};
