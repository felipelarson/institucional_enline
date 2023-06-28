import { Banner, ContainerMain } from '@/components/Common';
import { CardCustomer } from '@/components/Customer';

export default function CustomerIndexPage() {
	return (
		<ContainerMain bg={'#F1F6FF'} p={[0, '16px 100px']}>
			<Banner
				title={'Tailored Solutions for the'}
				titleColor={' Energy Sector'}
				description={'Explore how Enline`s technology delivers customized benefits to a wide range of industries and customer types,'}
				descriptionColor={'driving efficiency and sustainability across the energy sector.'}
			/>
			<CardCustomer />
		</ContainerMain>
	);
}
