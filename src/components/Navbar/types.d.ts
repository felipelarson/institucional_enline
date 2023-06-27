export interface NavItem {
	label: string;
	subLabel?: string;
	children?: NavItem[];
	href?: string | undefined;
	icon?: any;
}
