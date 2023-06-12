import { CARD_VIDEO_DATA } from '@/components/Learn/CardVideo/cardVideoData';

import { Box, Card, CardBody, CardFooter, CardHeader, Divider, Link, Text } from '@chakra-ui/react';

export const TableContent = () => {
	return (
		<Box flex={1} mt={5}>
			<Card variant={'outline'} bg={'#F1F6FF'}>
				{/* <Card variant={'outline'} bg={'#F1F6FF'} position={'fixed'} minW={'300px'} zIndex={1}></Card> */}
				<CardHeader>
					<Text as={'b'} fontSize="sm">
						Table of content
					</Text>
				</CardHeader>
				<Divider />
				<CardBody>
					{CARD_VIDEO_DATA.map((card, index) => (
						<Text key={index} p={2} fontSize={'xs'} color={'gray.600'}>
							<Link href={`#${card.id}`}>{card.heading}</Link>
						</Text>
					))}
				</CardBody>
				<Divider />
				<CardFooter>
					<Text as={'b'} fontSize="sm">
						<Link href={'#faq'}>Frequently Asked Questions (FAQs)</Link>
					</Text>
				</CardFooter>
			</Card>
		</Box>
	);
};
