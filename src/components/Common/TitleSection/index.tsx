import { Heading, Stack, Text } from '@chakra-ui/react';

interface ITitleSectionProps {
	title: string;
	subtitle: string;
	description: string;
	dark?: boolean;
}

export const TitleSection = ({ title, subtitle, description, dark }: ITitleSectionProps) => {
	const colorTitle = dark ? 'orange.300' : 'purple.500';
	const colorSubtitle = dark ? 'white' : 'black';
	const colorText = dark ? 'white' : 'black';

	return (
		<Stack maxW={660} spacing={4}>
			<Heading as="h2" size={'sm'} color={colorTitle}>
				{title}
			</Heading>
			<Heading as="h1" size={'lg'} color={colorSubtitle}>
				{subtitle}
			</Heading>
			<Text color={colorText}>{description}</Text>
		</Stack>
	);
};
