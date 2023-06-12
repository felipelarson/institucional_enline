import { CardProps } from '@chakra-ui/react';

export interface ICardCommonprops extends CardProps {
	title: string;
	text: string;
	icons?: string;
	number?: number;
	button?: string;
	flex?: number;
}
