export interface SettingsSliceTypes {
	links: LinkProp[];
	sidebarActive: boolean;
	isLoaded: 'loading' | 'success' | 'error';
}

export type LinkProp = {
	name: string;
	to: string;
	icon: string;
};
