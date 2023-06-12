export interface ICard {
	icon: any;
	title: string;
	text: string;
}

export interface ICardCustomer {
	icons: string;
	title: string;
	subtitle: string;
	urlCustomer: string;
	iconFirstButton: any;
	altFirstButton: string;
	textFirstButton: string;
	iconSecondButton: any;
	altSecondButton: string;
	textSecondButton: string;
}

export interface ISlugData {
	urlBanner: any;
	description: string;
	cardList: ICard[];
	titleSection: string;
	subtitleSection: string;
	descriptionSection: string;
	sectionList: ISection[];
	cardCustomer: ICardCustomer[];
	titleCardCustomer: string;
	subtitleCardCustomer: string;
}

export interface ISection {
	title: string;
	text: string;
	reverse?: boolean;
	textImage?: string;
	image?: string;
}
