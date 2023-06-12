import { Box, Button, Card, CardBody, CardHeader, Divider, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export const TableReleaseVersions = () => {
	return (
		<Box flex={1} mt={20}>
			<Card variant={'outline'} bg={'#F1F6FF'}>
				{/* <Card variant={'outline'} bg={'#F1F6FF'} position={'fixed'} minW={'310px'} zIndex={1}> */}
				<CardHeader>
					<Text as={'b'} fontSize="sm">
						Release versions
					</Text>
				</CardHeader>
				<Divider />
				<CardBody>
					{/* {CARD_VIDEO_DATA.map((card, index) => (
            <Text key={index} p={2} fontSize={'xs'} color={'gray.600'}>
              <Link  href={`#${card.id}`}>{card.heading}</Link>
            </Text>
          ))} */}
					<Text p={2} fontSize={'xs'} color={'gray.600'}>
						<Button as={NextLink} href={'#ems_v2'}>
							EMS V2.0
						</Button>
					</Text>
					<Text p={2} fontSize={'xs'} color={'gray.600'}>
						<Button as={NextLink} href={'#ems_v1'}>
							EMS V1.0
						</Button>
					</Text>
				</CardBody>
			</Card>
		</Box>
	);
};
