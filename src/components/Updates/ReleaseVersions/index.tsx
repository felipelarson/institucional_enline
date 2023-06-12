import { RELEASE_VERSIONS_DATA } from './releaseVersionsData';

import { PlusSquareIcon } from '@chakra-ui/icons';
import { Heading, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react';

export const Version = () => {
	return (
		<Stack flex={2}>
			<Stack border={'1px solid'} borderColor={'gray.200'} borderRight={'none'} py={14} px={10} id="ems_v2">
				<Heading fontSize={'3xl'}>EMS v 2.0</Heading>
				<UpdateList />
			</Stack>
			<Stack border={'1px solid'} borderColor={'gray.200'} borderRight={'none'} py={14} px={10} id="ems_v1">
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
				<Stack key={index} spacing={10}>
					<Text as={'b'} mt={5} fontSize={'lg'}>
						{update.heading}
					</Text>
					<List spacing={10}>
						{update.list.map((item, index) => (
							<ListItem key={index} fontSize={'sm'}>
								<ListIcon
									as={PlusSquareIcon}
									color="purple.500"
									bg={'purple.500'}
									borderRadius={'2px'}
									w={'10px'}
									h={'10px'}
									verticalAlign={'center'}
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
