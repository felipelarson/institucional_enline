import { CARDSTART } from './mock';

import { CardCommon, ContainerMain, TitleSection } from '@/components/Common';

import { Flex, Stack } from '@chakra-ui/react';

export const HowToStart = () => {
	return (
		<ContainerMain bgGradient={'linear(to-r, black, purple.900)'}>
			<Stack spacing={20}>
				<TitleSection
					title={'How to start'}
					subtitle={'Effortless Implementation, Powerful Results'}
					description={
						'Get started with just a few simple steps and experience the transformative impact on your energy infrastructure management.'
					}
					dark
				/>
				<Flex justifyContent={'space-between'} gap={3} direction={['column', 'column', 'column', 'row']}>
					{CARDSTART.map((item, index) => (
						<CardCommon key={index} title={item.title} text={item.text} number={item.number} button={item?.button} flex={1} />
					))}
				</Flex>
			</Stack>
		</ContainerMain>
	);
};
