import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';

export const fetchTopCharts = createAsyncThunk('songs/fetchSongs', async () => {
	const { data } = await axios.get(`/charts/world`);
	return data;
});
