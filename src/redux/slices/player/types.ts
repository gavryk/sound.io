export interface PlayerSliceProp {
	songs: SongProp[];
	genresFilter: FilterProp;
}

export type SongProp = {
	title: string;
	key: string;
};

export type FilterProp = {
	title: string;
	value: string;
};
