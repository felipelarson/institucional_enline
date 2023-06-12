import bg from '@/assets/img/bg_footer.png';

import { chakra, Container, Link, SimpleGrid, Stack, Text, VisuallyHidden, useColorModeValue, Button, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { ReactNode } from 'react';
import { FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export const Footer = () => {
	return (
		<Flex style={{ backgroundImage: `url(${bg.src})` }} bgSize="cover" bgPosition="center" color={'white'} minH={423} alignItems={'center'}>
			<Container as={Stack} maxW={'6xl'} py={10}>
				<SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8} borderBottom={'1px solid'} pb={8}>
					<Stack spacing={6}>
						<Image src={require('@/assets/svg/brand_enline_white.svg')} alt="Enline's brand" />
						<Image src={require('@/assets/img/startup.png')} alt="Enline's brand" height={87} />
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
					<Stack align={'center'}>
						<Button size={'sm'} variant={'primary'}>
							Schedule a meeting
						</Button>
						<Stack direction={'row'} spacing={6}>
							<SocialButton label={'Linkedin'} href={'#'}>
								<FiLinkedin />
							</SocialButton>
							<SocialButton label={'YouTube'} href={'#'}>
								<FiYoutube />
							</SocialButton>
							<SocialButton label={'Instagram'} href={'#'}>
								<FiInstagram />
							</SocialButton>
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
