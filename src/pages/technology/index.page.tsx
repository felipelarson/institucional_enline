import { Banner, ContainerMain } from '@/components/Common';
import { MainTechnology } from '@/components/Technology';

export default function technology() {
	return (
		<ContainerMain bg={'#F1F6FF'}>
			<Banner
				title={'Innovative Energy'}
				titleColor={'Technology by Enline'}
				description={'Transforming the Energy Sector with'}
				descriptionColor={'Cutting-Edge Solutions.'}
			/>
			<MainTechnology />
		</ContainerMain>
	);
}
