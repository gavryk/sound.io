import { createSlice } from '@reduxjs/toolkit';
import { fetchSongsByGenre, fetchTopCharts } from '../player/asyncSongs';
import { SettingsSliceTypes } from './types';

const initialState: SettingsSliceTypes = {
	links: [
		{ name: 'Home', to: '/', icon: 'house' },
		{ name: 'Around You', to: '/around-you', icon: 'image' },
		{ name: 'Top Artists', to: '/top-artists', icon: 'users' },
		{ name: 'Top Charts', to: '/top-charts', icon: 'hashtag' },
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
		builder.addCase(fetchTopCharts.pending, (state) => {
			state.isLoaded = 'loading';
		});
		builder.addCase(fetchTopCharts.fulfilled, (state, action) => {
			state.isLoaded = 'success';
		});
		builder.addCase(fetchTopCharts.rejected, (state) => {
			state.isLoaded = 'error';
		});
		builder.addCase(fetchSongsByGenre.pending, (state) => {
			state.isLoaded = 'loading';
		});
		builder.addCase(fetchSongsByGenre.fulfilled, (state, action) => {
			state.isLoaded = 'success';
		});
		builder.addCase(fetchSongsByGenre.rejected, (state) => {
			state.isLoaded = 'error';
		});
	},
});

export const { setLoading, setSidebarStatus } = settingsSlice.actions;

export default settingsSlice.reducer;
