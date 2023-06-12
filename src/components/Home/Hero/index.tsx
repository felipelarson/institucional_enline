import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FiArrowDownCircle } from 'react-icons/fi';

export const Hero = () => {
	return (
		<Flex
			align="center"
			justify={{ base: 'flex-end' }}
			direction={{ base: 'column-reverse', md: 'row' }}
			bgGradient={'linear(to-tl,#D9E0FB, #FFFFFF)'}
			minH={'100%'}
			position={'relative'}
		>
			<Stack
				spacing={12}
				w={{ base: '80%', md: '80%' }}
				align={'flex-start'}
				pos={'absolute'}
				top={['8%', '8%', '20%', '20%']}
				left={'10%'}
				maxW={1400}
				zIndex={2}
			>
				<Box boxShadow={'lg'} p={'36px'} border={'1px solid #D8E1E9'} bgGradient={'linear(to-r, white, gray.50)'} borderRadius={'md'}>
					<Heading as="h1" size="3xl" fontWeight="bold" textAlign={['center', 'center', 'left', 'left']}>
						<Text>Energy monitoring made</Text> <br />
						<Text as={'span'} color={'purple.500'}>
							simple and sensorless
						</Text>
					</Heading>
				</Box>
				<Text color="gray.500" fontSize="xl" textAlign={['center', 'center', 'left', 'left']} maxW={350}>
					Transform your energy infrastructure monitoring and maintenance with
					<Text as={'span'} color={'purple.500'} fontWeight={500}>
						Enline’s sensorless A.I.-driven digital twin solution
					</Text>
				</Text>
				<Stack spacing={6} direction={'column'}>
					<Button size="xl" variant={'primary'}>
						<Text>Schedule a meeting</Text>
					</Button>
					<Button size="sm" rightIcon={<FiArrowDownCircle />} variant={'secondary'}>
						<Text>Scroll down</Text>
					</Button>
				</Stack>
			</Stack>
			<Box
				w={{ base: '65%', sm: '100%', md: '65%' }}
				bgImage={`url('/gif/img_hero_enline.gif')`}
				bgSize={'cover'}
				bgRepeat={'no-repeat'}
				bgPos={'center'}
				height={'3xl'}
				width={'full'}
				zIndex={1}
			/>
		</Flex>
	);
};
