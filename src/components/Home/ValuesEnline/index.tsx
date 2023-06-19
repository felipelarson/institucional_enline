import { CARDVALUES } from './mock';

import { CardCommon, ContainerMain, TitleSection } from '@/components/Common';

import { Grid, Stack } from '@chakra-ui/react';
import Image from 'next/image';

export const ValuesEnline = () => {
	return (
		<ContainerMain bg={'#F1F6FF'} position={'relative'}>
			<Image
				src={require(`@/assets/svg/bg-line.svg`)}
				alt={'bg-line'}
				style={{ objectFit: 'cover', position: 'absolute', height: '90%', width: '100%', top: 0, left: 0 }}
			/>
			<Stack spacing={12}>
				<TitleSection
					title={"Enline's values"}
					subtitle={'Transform Your Network, Optimize Performance, and Enhance Safety!'}
					description={
						'Discover the capabilities of Enline’s digital twin technology, designed to transform the way you monitor, maintain, and optimize your energy assets.'
					}
				/>

				<Grid templateColumns={'repeat(auto-fit, minmax(300px, 1fr))'} gap={10}>
					{CARDVALUES.map((item, index) => (
						<CardCommon key={index} icons={item.icon} title={item.title} text={item.text} />
					))}
				</Grid>
			</Stack>
		</ContainerMain>
	);
};
