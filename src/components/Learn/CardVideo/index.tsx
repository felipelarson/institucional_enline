import { CARD_VIDEO_DATA } from './cardVideoData';

import { Heading, Stack, Text, AspectRatio, Box } from '@chakra-ui/react';

export const CardVideo = () => {
	return (
		<Stack flex={2} gap={'0'}>
			{CARD_VIDEO_DATA.map((card, index) => (
				<Box key={index} border={'1px solid'} borderColor={'gray.200'} py={14} px={10} id={card.id} borderRight={'none'} margin={'0'}>
					<Heading mb={'24px'} fontSize={'3xl'}>
						{card.heading}
					</Heading>
					<Text fontSize={'sm'} mb={'39px'}>
						{card.description}
					</Text>
					<AspectRatio maxW="560px" maxH="315px" ratio={1} borderRadius={'lg'} overflow={'hidden'}>
						<iframe title="enline" src={card.videoUrl} allowFullScreen />
					</AspectRatio>
				</Box>
			))}
		</Stack>
	);
};
