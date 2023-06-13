import bg from '@/assets/img/bg_footer.png';

import { Container, Link, SimpleGrid, Stack, Text, Button, Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';

export const Footer = () => {
	return (
		<Flex style={{ backgroundImage: `url(${bg.src})` }} bgSize="cover" bgPosition="center" color={'white'} minH={423} alignItems={'center'}>
			<Container as={Stack} maxW={'6xl'} py={10}>
				<SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8} borderBottom={'1px solid'} pb={8}>
					<Stack spacing={6}>
						<Box as={NextLink} href={'/'}>
							<Image src={require('@/assets/svg/brand_enline_white.svg')} alt="Enline's brand" />
						</Box>

						<Box as={NextLink} href="/pdf/Ficha_do_Projeto_RHAQ_web.pdf" download={true} target="_blank">
							<Image src={require('@/assets/img/startup.png')} alt="Enline's brand" height={87} />
						</Box>
					</Stack>
					<Stack align={'flex-start'}>
						<Link href={'/company'}>Company</Link>
						<Link href={'/solutions'}>Solution</Link>
						<Link href={'/customer'}>Customer Segments</Link>
					</Stack>
					<Stack align={'flex-start'}>
						<Link href={'/learn'}>Learn & Tutorials</Link>
						<Link href={'/updates'}>Updates</Link>
						{/* <Link href={'/news'}>Newsroom</Link>
						<Link href={'/careers'}>Careers</Link> */}
					</Stack>
					<Stack align={'center'} spacing={6}>
						<Button
							as={NextLink}
							href={'https://questionnaire.enline-transmission.com/'}
							target={'_blank'}
							size={'sm'}
							variant={'primary'}
						>
							Schedule a meeting
						</Button>
						<Stack direction={'row'} spacing={6}>
							<Box as={NextLink} href={'https://www.linkedin.com/company/gml-enline/mycompany/'} target="_blank">
								<FiLinkedin />
							</Box>
							<Box as={NextLink} href={'https://www.youtube.com/@enlinesmartenergysolutions999'} target="_blank">
								<FiYoutube />
							</Box>
							<Box as={NextLink} href={'https://www.instagram.com/enlinesmartsolutions/'} target="_blank">
								<FiInstagram />
							</Box>
						</Stack>
					</Stack>
				</SimpleGrid>
				<Text fontSize={'sm'} align={'center'} fontWeight={400}>
					© COPYRIGHT 2022 - ENLINE - TERMS AND CONDITIONS
				</Text>
			</Container>
		</Flex>
	);
};
