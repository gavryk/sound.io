import { configureStore } from '@reduxjs/toolkit';
import playerSlice from './slices/player/slice';
import settingsSlice from './slices/settings/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    player: playerSlice,
    settings: settingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
