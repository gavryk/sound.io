//Slice State
export interface PlayerSliceProp {
	songs: SongProp[];
	currentIndex: number;
	isActive: boolean;
	isPlaying: boolean;
	activeSong: SongProp;
	genresFilter: FilterProp;
	searchResult: SearchResultProp;
}
//Single Song
export type SongProp = {
	title: string;
	subtitle: string;
	hub?: SongHubProps;
	images: SongImagesProps;
	key: string;
	artists?: SongArtistsProp[];
};

//Song Artists Prop
export type SongArtistsProp = {
	alias: string;
	id: string;
	adamid: string;
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

export interface SearchResultProp {
	tracks: SearchTrackProp;
	artists?: SearchArtistProp;
}

export type SearchTrackProp = {
	hits: HitsTrackProp[];
};

export type HitsTrackProp = {
	track: SongProp;
};

export type SearchArtistProp = {
	hits: ArtistProps[];
};

export type ArtistProps = {
	artists: {
		avatar: string;
		name: string;
		verified: string;
		weburl: boolean;
		adamid: string;
	};
};

//Details Props
export interface ArtistDetails {
	artist: { attributes: ArtistAttributes };
	song: SongProp;
}

export interface ArtistSong {
	attributes?: SongAttributes;
}

export interface SongAttributes {
	albumName?: string;
	name: string;
	artistName: string;
	artwork: Artwork;
	url: string;
	previews?: Preview[];
}

export interface ArtistAttributes {
	artwork: Artwork;
	genreNames: string[];
	name: string;
	url: string;
}

export interface Artwork {
	height: number;
	url: string;
	width: number;
}

export interface Preview {
	url: string;
}

export interface GeoLocation {
	country_code2: string;
	country_name: string;
}
