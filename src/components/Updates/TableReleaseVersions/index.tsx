import { Box, Button, Card, CardBody, CardHeader, Divider, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export const TableReleaseVersions = () => {
	return (
		<Box flex={1} mt={5} position={'fixed'} top={['70px', '465px']} right={['', '', '30px', '30px', '185px']} w={'345px'} zIndex={1}>
			<Card variant={'outline'} bg={'#F1F6FF'} boxShadow={'0px 20px 40px rgba(8, 29, 71, 0.05)'} borderRadius={'5px'}>
				<CardHeader>
					<Text as={'b'} fontSize="sm">
						Release versions
					</Text>
				</CardHeader>
				<Divider />
				<CardBody>
					<Button
						as={NextLink}
						href={'#ems_v2'}
						w={'100%'}
						px={3}
						borderRadius={5}
						justifyContent={'flex-start'}
						fontSize={'xs'}
						fontWeight={'medium'}
						color={'gray.500'}
						bg={'#F1F6FF'}
						_hover={{ color: '#6D63EB', bg: 'white' }}
						_focus={{ color: '#6D63EB', bg: 'white' }}
					>
						EMS V2.0
					</Button>

					<Button
						as={NextLink}
						href={'#ems_v1'}
						w={'100%'}
						px={3}
						borderRadius={5}
						justifyContent={'flex-start'}
						fontSize={'xs'}
						fontWeight={'medium'}
						color={'gray.500'}
						bg={'#F1F6FF'}
						_hover={{ color: '#6D63EB', bg: 'white' }}
						_focus={{ color: '#6D63EB', bg: 'white' }}
					>
						EMS V1.0
					</Button>
				</CardBody>
			</Card>
		</Box>
	);
};
