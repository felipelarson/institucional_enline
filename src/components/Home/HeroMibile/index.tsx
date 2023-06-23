import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FiArrowDownCircle } from 'react-icons/fi';

export const HeroMobile = () => {
	return (
		<Flex direction={'column-reverse'} h={'calc(100vh - 100px)'}>
			<Stack w={'100%'} align={'center'}>
				<Box
					boxShadow={'0px 20px 40px rgba(8, 29, 71, 0.05)'}
					p={'2.25rem 1.5rem'}
					border={'1px solid #D8E1E9'}
					bgGradient={'linear(131.85deg, #FFFFFF 0.5%, #EBF3FF 100.67%)'}
					borderRadius={'5px'}
					position={'relative'}
					top={'-4.5rem'}
					left={0}
					width={'90%'}
				>
					<Heading as={'h2'} fontSize={'1.5625rem'} fontWeight="bold" textAlign={'center'} lineHeight={'100%'}>
						Energy monitoring made <br />
						<Text as={'span'} color={'purple.500'}>
							{' '}
							simple and sensorless
						</Text>
					</Heading>
				</Box>
				<Stack spacing={6} justify={'center'} align={'center'} w={'100%'} position={'relative'} top={'-2.5rem'}>
					<Text color="gray.500" fontSize={'0.9375rem'} textAlign={'center'} maxW={350} lineHeight={'140%'}>
						Transform your energy infrastructure monitoring and maintenance with
						<Text as={'span'} color={'purple.500'} fontWeight={500}>
							{' '}
							Enline`s sensorless A.I.-driven digital twin solution
						</Text>
					</Text>
					<Stack spacing={6} direction={'column'} justify={'center'} align={'center'}>
						<Button variant={'hero'} as={NextLink} href={'https://questionnaire.enline-transmission.com/'} target={'_blank'}>
							Schedule a meeting
						</Button>
						<Button
							size={'sm'}
							rightIcon={<FiArrowDownCircle />}
							variant={'secondary'}
							fontSize={'12px'}
							fontWeight={500}
							cursor={'initial'}
							_hover={{ bg: 'white' }}
						>
							Scroll down
						</Button>
					</Stack>
				</Stack>
			</Stack>
			<video autoPlay muted loop playsInline style={{ objectFit: 'cover', height: '23rem' }}>
				<source src="/gif/enline-bg.mp4" type="video/mp4" />
			</video>
		</Flex>
	);
};
