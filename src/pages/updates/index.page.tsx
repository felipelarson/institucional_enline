import { Banner, ContainerMain } from '@/components/Common';
import { Version, TableReleaseVersions } from '@/components/Updates';

import { Flex } from '@chakra-ui/react';

export default function updates() {
	return (
		<ContainerMain bg={'#F1F6FF'}>
			<Banner
				title={'Stay up-to-date with the'}
				titleColor={'latest developments'}
				description={'Our Learn & Tutorials section is designed to provide you with easy-to-follow guides, informative answers,'}
				descriptionColor={'and practical tips to optimize your experience with Enline.'}
			/>
			<Flex mt={20} gap={10}>
				<Version />
				<TableReleaseVersions />
			</Flex>
		</ContainerMain>
	);
}
