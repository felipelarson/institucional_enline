export interface ICustomer {
	iconButton: any;
	altButton: string;
	textButton: string;
	description: string;
}

export interface ISlugData {
	urlBanner: string;
	titleBanner: string;
	descriptionBanner: string;
	imageBanner: any;
	customerSegments: ICustomer[];
	titleSchedule: string;
}
