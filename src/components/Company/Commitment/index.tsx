import { ContainerMain, TitleSection } from '@/components/Common';

import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export const Commitment = () => {
	return (
		<ContainerMain>
			<TitleSection
				title="Commitment to Sustainability"
				subtitle="Enline's Pledge for a Greener Future"
				description="Empowering Sustainable Energy Solutions and Tackling Climate Change Challenges."
			/>
			<Flex mt={20} gap={[5, 10]} flexWrap={'wrap'}>
				<Box bg={'white'} w={['40%', '40%', 230]} p={'10px'} borderRadius={'10px'}>
					<Image src={require('@/assets/img/pledge_goals.png')} alt="Pledge Goals" width={180} />
				</Box>
				<Box bg={'white'} w={['40%', '40%', 200]} p={'10px'} borderRadius={'10px'}>
					<Image src={require('@/assets/img/pledge_clean_energy.png')} alt="Pledge clean energyh" width={180} />
				</Box>
				<Box bg={'white'} w={['40%', '40%', 200]} p={'10px'} borderRadius={'10px'}>
					<Image src={require('@/assets/img/pledge_industry.png')} alt="Pledge industry" width={180} />
				</Box>
				<Box bg={'white'} w={['40%', '40%', 200]} p={'10px'} borderRadius={'10px'}>
					<Image src={require('@/assets/img/pledge_sustainable.png')} alt="Pledge sustainable" width={180} />
				</Box>
			</Flex>
		</ContainerMain>
	);
};
