import { faq } from './faq';

import { PlusSquareIcon } from '@chakra-ui/icons';
import { Heading, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react';

export const FAQ = () => {
	return (
		<Stack id="faq">
			<Text as={'b'} fontSize={'lg'} color={'#6D63EB'}>
				FAQ
			</Text>
			<Heading fontSize={'3xl'}>Frequently Asked Questions (FAQs)</Heading>
			<Text fontSize={'lg'} pb={5} color={'#011F3B'}>
				We`ve curated this list to provide you with quick and accurate information, helping you navigate and make the most of our innovative
				energy management technology. If you have further questions or need personalized assistance, please don`t hesitate to reach out to our
				support team.
			</Text>
			{faq.map((item, index) => (
				<Stack key={index} spacing={3}>
					<Text mt={5} fontSize={'lg'} color={'#011F3B'}>
						{item.question}
					</Text>
					<List spacing={10} pb={5}>
						<ListItem key={index} fontSize={'sm'} color={'#011F3B'}>
							<ListIcon
								as={PlusSquareIcon}
								color="purple.500"
								bg={'purple.500'}
								borderRadius={'2px'}
								w={'10px'}
								h={'10px'}
								verticalAlign={'center'}
							/>
							{item.answer}
						</ListItem>
					</List>
				</Stack>
			))}
		</Stack>
	);
};
