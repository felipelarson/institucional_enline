import { Banner, ContainerMain } from '@/components/Common';
import { CardVideo, TableContent } from '@/components/Learn';
import { FAQ } from '@/components/Learn/FAQ';

import { Flex } from '@chakra-ui/react';

export default function learn() {
	return (
		<>
			<ContainerMain bg={'#F1F6FF'}>
				<Banner
					title={'Expand Your Knowledge and'}
					titleColor={"Maximize Enline's Potential"}
					description={'Our Learn & Tutorials section is designed to provide you with easy-to-follow guides, informative answers,'}
					descriptionColor={'and practical tips to optimize your experience with Enline.'}
				/>
				<Flex mt={20} gap={10}>
					<CardVideo />
					<TableContent />
				</Flex>
			</ContainerMain>
			<ContainerMain background={'linear-gradient(293.83deg, #D9E0FB 0%, #FFFFFF 100%)'}>
				<FAQ />
			</ContainerMain>
		</>
	);
}
