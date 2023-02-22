import { createSlice } from '@reduxjs/toolkit';
import { fetchTopCharts } from './asyncSongs';
import { PlayerSliceProp } from './types';

const initialState: PlayerSliceProp = {
	songs: [],
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

export const { setFilter } = playerSlice.actions;

export default playerSlice.reducer;
