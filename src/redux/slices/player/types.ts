//Slice State
export interface PlayerSliceProp {
	songs: SongProp[];
	currentIndex: number;
	isActive: boolean;
	isPlaying: boolean;
	activeSong: SongProp;
	genresFilter: FilterProp;
}
//Single Song
export type SongProp = {
	title: string;
	subtitle: string;
	hub?: SongHubProps;
	images: SongImagesProps;
	key: string;
};
//Song Hub Props
export type SongHubProps = {
	type: string;
	image: string;
	actions: HubActions[];
};
//Song Hub Actions
export type HubActions = {
	name: string;
	type: string;
	id?: string;
	uri?: string;
};
//Song Images Props
export type SongImagesProps = {
	background: string;
	coverart: string;
	coverarthq: string;
	joecolor: string;
};
//Filter Props
export type FilterProp = {
	title: string;
	value: string;
};
//Unknown
export type ArtistSong = {
	attributes?: SongAttributes;
};

export interface SongAttributes {
	albumName?: string;
	name: string;
	artistName: string;
	artwork: Artwork;
	url: string;
	previews?: Preview[];
}

export interface Artwork {
	height: number;
	url: string;
	width: number;
}

export interface Preview {
	url: string;
}
