import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchSongsAround, fetchSongsByGenre, fetchTopCharts } from '../player/asyncSongs';
import { SettingsSliceTypes } from './types';

const initialState: SettingsSliceTypes = {
	links: [
		{ name: 'Home', to: '/', icon: 'house' },
		{ name: 'Around You', to: '/around-you', icon: 'earth-americas' },
		{ name: 'Top Artists', to: '/top-artists', icon: 'users' },
		{ name: 'Top Charts', to: '/top-charts', icon: 'chart-line' },
	],
	sidebarActive: false,
	isLoaded: 'loading',
};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.isLoaded = action.payload;
		},
		setSidebarStatus: (state, action) => {
			state.sidebarActive = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			isAnyOf(fetchTopCharts.pending, fetchSongsByGenre.pending, fetchSongsAround.pending),
			(state) => {
				state.isLoaded = 'loading';
			},
		);
		builder.addMatcher(
			isAnyOf(fetchTopCharts.fulfilled, fetchSongsByGenre.fulfilled, fetchSongsAround.fulfilled),
			(state, action) => {
				state.isLoaded = 'success';
			},
		);
		builder.addMatcher(
			isAnyOf(fetchTopCharts.rejected, fetchSongsByGenre.rejected, fetchSongsAround.rejected),
			(state) => {
				state.isLoaded = 'error';
			},
		);
	},
});

export const { setLoading, setSidebarStatus } = settingsSlice.actions;

export default settingsSlice.reducer;
