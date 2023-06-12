import { CARDVALUES } from './mock';

import { CardCommon, ContainerMain, TitleSection } from '@/components/Common';

import { Grid, Stack } from '@chakra-ui/react';

export const ValuesEnline = () => {
	return (
		<ContainerMain>
			<Stack spacing={12}>
				<TitleSection
					title={'Transform Your Network, Optimize Performance, and Enhance Safety!'}
					subtitle={"Enline's values"}
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
