import { BUTTONS, ICONS } from './mock';

import { ContainerMain, TitleSection } from '@/components/Common';

import { Button, Flex, Select, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

export const DigitalTwin = () => {
	const [selectedButton, setSelectedButton] = useState(BUTTONS[0].value);

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleButtonClick = (value: string) => setSelectedButton(value);

	return (
		<ContainerMain bgGradient={'linear(to-r, white, #D9E0FB)'}>
			<Stack spacing={12}>
				<TitleSection
					title="Digital Twin Monitoring"
					subtitle="Revolutionary View of Your Energy Resources"
					description="Enline's Digital Twin solution is a state-of-the-art technology that provides an in-depth understanding of energy assets. The solution offers real-time data and critical insights for monitoring various electrical, mechanical, and thermal variables as:"
				/>
				<Flex justifyContent={'space-between'} direction={['column', 'column', 'column', 'row']}>
					{isMobile ? (
						<Select
							value={selectedButton}
							onChange={(event) => handleButtonClick(event.target.value)}
							maxW={740}
							mr="-20px"
							mb={4}
							width={'60%'}
							bg={'#FAFAFF'}
							border={'1px solid #C8CCDD'}
							color={'#83919E'}
							fontSize={'0.8125rem'}
							fontWeight={500}
						>
							{BUTTONS.map((button) => (
								<option key={button.value} value={button.value}>
									{button.label}
								</option>
							))}
						</Select>
					) : (
						<Stack gap={2}>
							{BUTTONS.map((button) => (
								<Button
									key={button.value}
									display={'flex'}
									justifyContent={'flex-start'}
									rounded="full"
									fontWeight={700}
									fontSize={'sm'}
									px={2}
									h={'40px'}
									w={'220px'}
									colorScheme={selectedButton === button.value ? 'purple' : 'gray'}
									bg={selectedButton === button.value ? 'purple.500' : 'white'}
									color={selectedButton === button.value ? 'white' : 'gray.900'}
									_hover={{ bg: 'purple.500', color: 'white' }}
									leftIcon={
										<Flex
											bg={'gray.100'}
											w={'28px'}
											h={'28px'}
											rounded={'full'}
											alignItems={'center'}
											justifyContent={'center'}
											color={'gray.900'}
										>
											{ICONS[button.value]}
										</Flex>
									}
									onClick={() => handleButtonClick(button.value)}
								>
									{button.label}
								</Button>
							))}
						</Stack>
					)}
					<Flex maxW={740} mr={'-20px'} height={'fit-content'}>
						<Image src={require(`@/assets/img/screen_${selectedButton}.png`)} alt={selectedButton} />
					</Flex>
				</Flex>

				<Flex
					alignItems={'center'}
					bg={'gray.50'}
					p={'42px 24px 42px 34px'}
					h={'fit-content'}
					border={'1px solid #D8E1E9'}
					borderRadius={20}
					direction={['column', 'column', 'column', 'row']}
					gap={12}
				>
					<Text flex={3} fontSize={'sm'} color={'#011F3B'} lineHeight={'20px'} whiteSpace={'pre-line'}>
						By leveraging our advanced artificial intelligence algorithms and digital twin technology, Enline’s Digital Twin Monitoring
						offers you the ability to{' '}
						<Text as="span" color={'purple.500'} whiteSpace="nowrap" display="inline">
							predict faults and critical events
						</Text>
						, optimize energy assets, and ultimately improve the overall efficiency and reliability of your energy infrastructure.
					</Text>
					<Button flex={1} variant={'hero'} as={NextLink} href={'https://questionnaire.enline-transmission.com/'} target={'_blank'}>
						Schedule a meeting
					</Button>
				</Flex>
			</Stack>
		</ContainerMain>
	);
};
