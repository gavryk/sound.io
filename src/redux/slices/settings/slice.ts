import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  links: [
    { name: 'Home', to: '/', icon: '' },
    { name: 'Around You', to: '/around-you', icon: '' },
    { name: 'Top Artists', to: '/top-artists', icon: '' },
    { name: 'Top Charts', to: '/top-charts', icon: '' },
  ],
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {  } = playerSlice.actions;

export default settingsSlice.reducer;
