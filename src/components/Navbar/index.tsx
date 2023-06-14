import { NAV_ITEMS } from './mock';
import { NavItem } from './types';

import { HamburgerIcon, CloseIcon, ChevronDownIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Grid
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const Navbar = () => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box position={'fixed'} zIndex={3} w={'100%'}>
			<Flex
				bg={useColorModeValue('gray.50', 'gray.800')}
				color={useColorModeValue('gray.500', 'white')}
				minH={'78px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				align={'center'}
				boxShadow={'md'}
			>
				<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Box
						as={NextLink}
						href={'/'}
						textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
						fontFamily={'heading'}
						color={useColorModeValue('gray.800', 'white')}
						width={{ base: '100px', lg: '100px', xl: '120px' }}
					>
						<Image src={require('@/assets/svg/brand_enline.svg')} alt={"Enline's brand"} />
					</Box>

					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				{/* <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
					<Button
						as={'a'}
						display={{ base: 'none', md: 'inline-flex' }}
						fontSize={'sm'}
						fontWeight={600}
						color={'white'}
						bg={'green.300'}
						href={'#'}
						_hover={{
							bg: 'green.400'
						}}
						rounded={'full'}
					>
						Preview Your Results
					</Button>
				</Stack> */}
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
};

const DesktopNav = () => {
	const router = useRouter();
	const [selected, setSelected] = useState(
		router.asPath === '/' ? 'Home' : '/' + router.asPath.slice(1).charAt(0).toUpperCase() + router.asPath.slice(2)
	);

	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkBackground = useColorModeValue('white', 'gray.900');
	const linkHoverColor = useColorModeValue('white', 'white');
	const linkHoverBackground = useColorModeValue('purple.500', 'gray.700');
	const popoverContentBgColor = useColorModeValue('white', 'gray.800');

	const handleSelected = (label: string) => {
		setSelected(label);
	};

	useEffect(() => {
		const path = router.asPath === '/' ? 'Home' : `/${router.asPath.slice(1).charAt(0).toUpperCase()}${router.asPath.slice(2)}`;
		setSelected(path);
	}, [router.asPath]);

	return (
		<Stack direction={'row'} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<Link
								py={2}
								px={{ base: 4, md: 2 }}
								href={navItem.href ?? '#'}
								fontSize={'sm'}
								fontWeight={500}
								color={
									navItem.href !== undefined
										? navItem.href === selected.toLocaleLowerCase() || router.asPath.startsWith(navItem.href.toLowerCase())
											? 'white'
											: navItem.href === '/solutions'
											? 'purple.500'
											: linkColor
										: linkColor
								}
								bg={
									navItem.href !== undefined
										? navItem.href === selected.toLocaleLowerCase() || router.asPath.startsWith(navItem.href.toLowerCase())
											? 'purple.500'
											: navItem.href === '/solutions'
											? 'purple.100'
											: linkBackground
										: linkBackground
								}
								_hover={
									navItem.label === '/solutions'
										? {
												textDecoration: 'none',
												color: 'gray.600',
												bg: 'purple.100'
										  }
										: {
												textDecoration: 'none',
												color: linkHoverColor,
												bg: linkHoverBackground
										  }
								}
								rounded={'full'}
								onClick={() => handleSelected(navItem.href ?? navItem.label)}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={'xl'}
								bg={popoverContentBgColor}
								p={4}
								rounded={'xl'}
								minW={'sm'}
								width={'fit-content'}
							>
								<Grid templateColumns={'repeat(auto-fit, minmax(220px, 1fr))'} maxW={'98vw'}>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
									<Box role={'group'} display={'block'} p={18} rounded={'md'} bg={'#EFEEFC'} m={2}>
										<Flex direction={'column'} align={'flex-start'} justifyContent={'space-between'} h={'full'}>
											<Text fontSize={'sm'}>
												<Text as={'span'} color={'purple.500'}>
													Explore Enline`s cutting-edge solutions
												</Text>{' '}
												designed to simplify energy infrastructure monitoring and maintenance.
											</Text>
											<Button
												as={'a'}
												href={'#'}
												bg={'#E8E7FF'}
												borderRadius={'full'}
												border={'1px solid'}
												borderColor={'white'}
												px={'16px'}
												py={'6px'}
												color={'purple.500'}
												fontSize={'sm'}
												rightIcon={<ArrowForwardIcon />}
											>
												Explore all solutions
											</Button>
										</Flex>
									</Box>
								</Grid>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel, icon }: NavItem) => {
	return (
		<Box role={'group'} display={'block'} p={18} rounded={'md'} bg={'#EFEEFC'} m={2}>
			<Flex direction={'column'} align={'flex-start'} gap={4}>
				<Flex color={'white'} rounded={'full'}>
					<Button
						display={'flex'}
						justifyContent={'flex-start'}
						rounded="full"
						size="lg"
						w={'full'}
						fontWeight="normal"
						px={2}
						color={'white'}
						bgGradient={'linear(to-r, #5F296D, #33296D)'}
						_hover={{ bgGradient: 'linear(to-r, #5F296D, #33296D)', color: 'white' }}
						leftIcon={<Image src={require(`@/assets/svg/${icon}.svg`)} alt={`${label} icon`} />}
					>
						{label}
					</Button>
				</Flex>
				<Text fontSize={'sm'}>{subLabel} </Text>
				<Button
					as={NextLink}
					href={href}
					bg={'#E8E7FF'}
					borderRadius={'full'}
					border={'1px solid'}
					borderColor={'white'}
					px={'16px'}
					py={'6px'}
					color={'purple.500'}
					fontSize={'sm'}
					rightIcon={<ArrowForwardIcon />}
				>
					Learn more
				</Button>
			</Flex>
		</Box>
	);
};

const MobileNav = () => {
	return (
		<Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? '#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none'
				}}
			>
				<Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
					{label}
				</Text>
				{children && <Icon as={ChevronDownIcon} transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={6} h={6} />}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
				<Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'}>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};
