import { createSlice } from '@reduxjs/toolkit';
import { getGeoLocation } from './asyncGeo';
import { GeoLocationTypes } from './types';

const initialState: GeoLocationTypes = {
	geo: {},
};

export const geoLocationSlice = createSlice({
	name: 'geoLocation',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getGeoLocation.pending, (state) => {
			state.geo = {};
		});
		builder.addCase(getGeoLocation.fulfilled, (state, action) => {
			state.geo = action.payload;
		});
		builder.addCase(getGeoLocation.rejected, (state) => {
			state.geo = {};
		});
	},
});

// export const {} = geoLocationSlice.actions;

export default geoLocationSlice.reducer;
