import { createSlice } from '@reduxjs/toolkit';
import { PlayerSliceProp } from './types';

const initialState: PlayerSliceProp = {
  songs: [],
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
  extraReducers: (builder) => {},
});

export const { setFilter } = playerSlice.actions;

export default playerSlice.reducer;
