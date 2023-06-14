import { CARD_VIDEO_DATA } from '@/components/Learn/CardVideo/cardVideoData';

import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export const TableContent = () => {
	return (
		<Box flex={1} mt={5}>
			<Card variant={'outline'} bg={'#F1F6FF'}>
				{/* <Card variant={'outline'} bg={'#F1F6FF'} position={'fixed'} minW={'300px'} zIndex={1}></Card> */}
				<CardHeader p={3}>
					<Text as={'b'} fontSize="sm">
						Table of content
					</Text>
				</CardHeader>
				<Divider />
				<CardBody ml={-1} px={5}>
					{CARD_VIDEO_DATA.map((card, index) => (
						<Button
							as={NextLink}
							href={`#${card.id}`}
							key={index}
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
							{card.heading}
						</Button>
					))}
				</CardBody>
				<Divider />
				<CardFooter p={3}>
					<Button
						as={NextLink}
						href={'#faq'}
						w={'100%'}
						px={-2}
						// ml={1}
						borderRadius={5}
						justifyContent={'flex-start'}
						bg={'#F1F6FF'}
						_hover={{ color: '#6D63EB' }}
						_focus={{ color: '#6D63EB' }}
					>
						<Text as={'b'} fontSize="sm">
							Frequently Asked Questions (FAQs)
						</Text>
					</Button>
				</CardFooter>
			</Card>
		</Box>
	);
};
