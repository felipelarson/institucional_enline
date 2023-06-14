import { Card, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface IBannerProps {
	title: string;
	titleColor?: string;
	description: string;
	descriptionColor?: string;
}

export const Banner = ({ title, titleColor, description, descriptionColor }: IBannerProps) => {
	return (
		<Card bgGradient={'linear(to-b, #F2F7FF, #D7DEFA)'} w={'full'} border={'1px solid #D8E1E9'} p={'36px'} position={'relative'}>
			<Image src={require(`@/assets/svg/bg-line.svg`)} alt={'bg-line'} fill={true} style={{ objectFit: 'cover' }} />
			<Stack gap={10}>
				<Stack>
					<Heading>{title}</Heading>
					{titleColor && <Heading color={'purple.500'}>{titleColor}</Heading>}
				</Stack>
				<Text color={'#83919E'} fontSize={['md', 'lg', 'xl']}>
					{description}
					{descriptionColor && (
						<Text as="span" color={'purple.500'}>
							{' '}
							{descriptionColor}
						</Text>
					)}
				</Text>
			</Stack>
		</Card>
	);
};
