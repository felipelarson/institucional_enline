import { ICardCommonprops } from './types';

import IconAnalytics from '@/assets/svg/icon_analytics.svg';
import IconEnhanced from '@/assets/svg/icon_enhanced.svg';
import IconGuard from '@/assets/svg/icon_guard.svg';
import IconMonitoring from '@/assets/svg/icon_monitoring.svg';
import IconPredictive from '@/assets/svg/icon_predictive.svg';
import IconRealTime from '@/assets/svg/icon_real_time.svg';
import IconRisk from '@/assets/svg/icon_risk.svg';
import IconSolution from '@/assets/svg/icon_solution.svg';

import { Card, CardHeader, CardBody, Flex, Box, Heading, Text, CardFooter, Button, Stack } from '@chakra-ui/react';
import Image from 'next/image';

export const CardCommon = ({ title, text, icons, number, button, ...props }: ICardCommonprops) => {
	const ICONS: any = {
		risk: IconRisk,
		realTime: IconRealTime,
		predictive: IconPredictive,
		enhanced: IconEnhanced,
		solution: IconSolution,
		monitoring: IconMonitoring,
		analytics: IconAnalytics,
		guard: IconGuard
	};

	return (
		<Card bg={'white'} border={'1px solid #D8E1E9'} {...props}>
			<CardHeader>
				<Stack gap={4}>
					{icons && <Image src={ICONS[icons]} alt={title} width={50} height={50} />}
					{number && (
						<Box borderRadius="full" bg="black" w="50px" h="50px" display="flex" alignItems={'center'} justifyContent={'center'}>
							{number && (
								<Heading size={'sm'} color={'white'}>
									{number}
								</Heading>
							)}
						</Box>
					)}
					<Flex flex={1} alignItems={'center'} flexWrap={'wrap'}>
						<Box>
							{number ? (
								<Heading size={'sm'} color={'purple.500'}>
									{title}
								</Heading>
							) : (
								<Heading size={'md'}>{title}</Heading>
							)}
						</Box>
					</Flex>
				</Stack>
			</CardHeader>
			<CardBody>
				<Text fontSize={'sm'}>{text}</Text>
			</CardBody>
			{button && (
				<CardFooter>
					<Button height={'55px'} variant={'primary'} flex={1}>
						{button}
					</Button>
				</CardFooter>
			)}
		</Card>
	);
};
