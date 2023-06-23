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
		<Card
			bgGradient={'linear(to-b, #F2F7FF, #D7DEFA)'}
			w={'full'}
			border={'1px solid #D8E1E9'}
			p={'36px'}
			position={'relative'}
			boxShadow={'0px 20px 40px rgba(8, 29, 71, 0.05)'}
		>
			<Image src={require(`@/assets/svg/bg-line.svg`)} alt={'bg-line'} fill={true} style={{ objectFit: 'cover' }} />
			<Stack gap={10}>
				<Stack>
					<Heading as={'h2'} lineHeight={'100%'} fontSize={['25px', '30px', '42px', '42px']}>
						{title}
					</Heading>
					{titleColor && (
						<Heading as={'h2'} color={'purple.500'} lineHeight={'100%'} fontSize={['25px', '30px', '42px', '42px']}>
							{titleColor}
						</Heading>
					)}
				</Stack>
				<Text color={'#83919E'} fontSize={['md', 'lg', 'xl']} maxW={'540px'}>
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
