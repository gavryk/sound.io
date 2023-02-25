export interface PlayerSliceProp {
	songs: SongProp[];
	currentIndex: number;
	isActive: boolean;
	isPlaying: boolean;
	activeSong: SongProp;
	genresFilter: FilterProp;
}

export type SongProp = {
	title: string;
	subtitle: string;
	images: SongImagesProps;
	key: string;
};

export type SongImagesProps = {
	background: string;
	coverart: string;
	coverarthq: string;
	joecolor: string;
};

export type FilterProp = {
	title: string;
	value: string;
};
