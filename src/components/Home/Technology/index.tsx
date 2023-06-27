import { TECHNOLOGY_DATA } from './technologyData';

import { BannerWithScreen, ContainerMain, TitleSection } from '@/components/Common';

import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Technology = () => {
	return (
		<ContainerMain bgGradient={'linear(to-br, white, #D9E0FB)'}>
			<Flex direction={'column'} gap={20}>
				<TitleSection
					title="Technology by Enline"
					subtitle="Innovative Energy Technology by Enline"
					description="Transforming the Energy Sector with Cutting-Edge Solutions"
				/>
				<Stack spacing={10}>
					{TECHNOLOGY_DATA.map((item, index) => (
						<BannerWithScreen key={index} title={item.title} description={item.description} image={item.image} link={item.link} />
					))}
				</Stack>
				<Flex w={'100%'} justifyContent={'center'}>
					<Flex
						justifyContent={'space-between'}
						alignItems={'center'}
						direction={['column', 'row']}
						bg={'gray.50'}
						p={'32px 24px 32px 34px'}
						h={['fit-content', 'fit-content', 'fit-content', 144]}
						border={'1px solid #D8E1E9'}
						borderRadius={20}
						w={['100%', '85%']}
						gap={8}
					>
						<Text fontSize={'14px'} lineHeight={'19.6px'} fontWeight={'400'} flex={2}>
							Experience the transformative power of Enline’s innovative technology. Dive deeper into our range of advanced solution.
						</Text>
						<Button as={NextLink} href={'/technology'} variant={'hero'} flex={1}>
							Technology by Enline
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</ContainerMain>
	);
};
