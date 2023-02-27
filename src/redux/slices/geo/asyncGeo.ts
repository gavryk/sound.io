import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGeoLocation = createAsyncThunk('geo/fetchGeoLocation', async () => {
	const { data } = await axios.get(
		`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_GEO_KEY}`,
	);
	return data;
});
