import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
	const { data } = await axios.get(`v1/charts/world`);
	console.log(data);
});
