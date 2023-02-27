import { createSlice } from '@reduxjs/toolkit';
import { getGeoLocation } from './asyncGeo';
import { GeoLocationTypes } from './types';

const initialState: GeoLocationTypes = {
	userLocation: {},
};

export const geoLocationSlice = createSlice({
	name: 'geoLocation',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getGeoLocation.pending, (state) => {
			state.userLocation = {};
		});
		builder.addCase(getGeoLocation.fulfilled, (state, action) => {
			state.userLocation = action.payload;
		});
		builder.addCase(getGeoLocation.rejected, (state) => {
			state.userLocation = {};
		});
	},
});

export const {} = geoLocationSlice.actions;

export default geoLocationSlice.reducer;
