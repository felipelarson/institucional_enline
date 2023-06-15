export interface ICustomer {
	iconButton: any;
	altButton: string;
	textButton: string;
	description: string;
	urlButton: string;
}

export interface ISlugData {
	bannerInitial: IBannerInitial;
	urlBanner: string;
	titleBanner: string;
	descriptionBanner: string;
	imageBanner: any;
	customerSegments: ICustomer[];
	titleSchedule: string;
}

export interface IBannerInitial {
	icon: string;
	title: string;
	subtitle: string;
}
