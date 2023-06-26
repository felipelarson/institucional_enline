import { RELEASE_VERSIONS_DATA } from './releaseVersionsData';

import { PlusSquareIcon } from '@chakra-ui/icons';
import { Heading, List, ListIcon, ListItem, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

export const Version = () => {
	const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
	return (
		<Stack flex={2}>
			<Stack border={'1px solid'} borderColor={'gray.200'} borderRight={'none'} py={14} px={isMobile ? '' : 10} id="ems_v2">
				<Heading fontSize={'3xl'}>EMS v 2.0</Heading>
				<UpdateList />
			</Stack>
			<Stack border={'1px solid'} borderColor={'gray.200'} borderRight={'none'} py={14} px={isMobile ? '' : 10} id="ems_v1">
				<Heading>EMS v 1.0</Heading>
				<UpdateList />
			</Stack>
		</Stack>
	);
};

const UpdateList = () => {
	return (
		<>
			{RELEASE_VERSIONS_DATA.map((update, index) => (
				<Stack key={index} spacing={2}>
					<Text as={'b'} mt={3} fontSize={'lg'}>
						{update.heading}
					</Text>
					<List>
						{update.list.map((item, index) => (
							<ListItem key={index} fontSize={'sm'} mb={2} ml={3}>
								<ListIcon
									as={PlusSquareIcon}
									color="purple.500"
									bg={'purple.500'}
									borderRadius={'2px'}
									w={'10px'}
									h={'10px'}
									verticalAlign={'super'}
								/>
								{item}
							</ListItem>
						))}
					</List>
				</Stack>
			))}
		</>
	);
};
