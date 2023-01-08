import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [],
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {  } = playerSlice.actions;

export default playerSlice.reducer;
