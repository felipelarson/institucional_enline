import { Banner, ContainerMain } from '@/components/Common';
import { Hero } from '@/components/Solutions';

export default function Solutions() {
	return (
		<ContainerMain bg={'#F1F6FF'} p={[0, '16px 100px']}>
			<Banner
				title="Unlock the Power of Your"
				titleColor="Energy Infrastructure"
				description="Explore Enline’s cutting-edge solutions designed to simplify energy infrastructure monitoring and maintenance,"
				descriptionColor="while delivering unparalleled efficiency and sustainability."
			/>
			<Hero />
		</ContainerMain>
	);
}
