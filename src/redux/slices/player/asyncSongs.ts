import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';
import { SearchResultProp, SongProp } from './types';

export const fetchTopCharts = createAsyncThunk('songs/fetchSongs', async () => {
	const { data } = await axios.get(`/charts/world`);
	return data;
});

export const fetchSongsByGenre = createAsyncThunk<SongProp[], string>(
	'songs/fetchSongsByGenre',
	async (genre) => {
		const { data } = await axios.get(`/charts/genre-world?genre_code=${genre}`);
		return data;
	},
);

export const fetchSongsAround = createAsyncThunk<SongProp[], string>(
	'songs/fetchSongsAround',
	async (countryCode) => {
		const { data } = await axios.get(`/charts/country?country_code=${countryCode}`);
		return data;
	},
);

export const fetchSongsBySearch = createAsyncThunk<SearchResultProp, string>(
	'songs/fetchSongsBySearch',
	async (searchText) => {
		const { data } = await axios.get(`/search/multi?search_type=SONGS_ARTISTS&query=${searchText}`);
		return data;
	},
);
