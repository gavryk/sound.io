import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { fetchSongsAround, fetchSongsByGenre, fetchTopCharts } from './asyncSongs';
import { PlayerSliceProp } from './types';

const initialState: PlayerSliceProp = {
	songs: [],
	currentIndex: 0,
	isActive: false,
	activeSong: {
		title: '',
		subtitle: '',
		images: { background: '', coverart: '', coverarthq: '', joecolor: '' },
		key: '',
	},
	isPlaying: false,
	genresFilter: { title: 'All Songs', value: '' },
};

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		setFilter: (state, action) => {
			state.genresFilter = action.payload;
		},
		setActiveSong: (state, action) => {
			state.activeSong = action.payload.song;
			state.currentIndex = action.payload.i;
			state.isActive = true;
		},
		nextSong: (state, action: PayloadAction<number>) => {
			const index = action.payload;
			state.activeSong = state.songs[index];
			state.currentIndex = index;
			state.isActive = true;
		},

		prevSong: (state, action) => {
			const index = action.payload;
			state.activeSong = state.songs[index];
			state.currentIndex = index;
			state.isActive = true;
		},
		playPause: (state, action) => {
			state.isPlaying = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			isAnyOf(fetchTopCharts.pending, fetchSongsByGenre.pending, fetchSongsAround.pending),
			(state) => {
				state.songs = [];
			},
		);
		builder.addMatcher(
			isAnyOf(fetchTopCharts.fulfilled, fetchSongsByGenre.fulfilled, fetchSongsAround.fulfilled),
			(state, action) => {
				state.songs = action.payload;
			},
		);
		builder.addMatcher(
			isAnyOf(fetchTopCharts.rejected, fetchSongsByGenre.rejected, fetchSongsAround.rejected),
			(state) => {
				state.songs = [];
			},
		);
	},
});

export const { setFilter, setActiveSong, playPause, nextSong, prevSong } = playerSlice.actions;

export default playerSlice.reducer;
