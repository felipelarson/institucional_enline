import { BOXCLIENT_DATA } from './mock';

import { Flex, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';

export const BoxClient = () => {
	const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
	return (
		<Flex flexWrap={'wrap'} gap={{ base: '16px', sm: '32px', md: '32px', lg: '32px' }}>
			{BOXCLIENT_DATA.map((item, index) => (
				<Flex
					key={index}
					maxW={isMobile ? '100%' : '223px'}
					w={isMobile ? '100%' : 'auto'}
					p={'16px'}
					bg={'white'}
					borderRadius={'8px'}
					align={'center'}
					justify={'center'}
					h={'96px'}
				>
					<Image src={item.image} alt={item.alt} style={{ objectFit: 'contain', width: item.width }} />
				</Flex>
			))}
		</Flex>
	);
};
