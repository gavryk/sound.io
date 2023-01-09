import { createSlice } from '@reduxjs/toolkit';
import { SettingsSliceTypes } from './types';

const initialState: SettingsSliceTypes = {
  links: [
    { name: 'Home', to: '/', icon: 'house' },
    { name: 'Around You', to: '/around-you', icon: 'image' },
    { name: 'Top Artists', to: '/top-artists', icon: 'users' },
    { name: 'Top Charts', to: '/top-charts', icon: 'hashtag' },
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
