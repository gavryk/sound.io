import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTopCharts } from './asyncSongs';
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
		builder.addCase(fetchTopCharts.pending, (state) => {
			state.songs = [];
		});
		builder.addCase(fetchTopCharts.fulfilled, (state, action) => {
			state.songs = action.payload;
		});
		builder.addCase(fetchTopCharts.rejected, (state) => {
			state.songs = [];
		});
	},
});

export const { setFilter, setActiveSong, playPause, nextSong, prevSong } = playerSlice.actions;

export default playerSlice.reducer;
