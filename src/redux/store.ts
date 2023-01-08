import { configureStore } from '@reduxjs/toolkit';
import playerSlice from './slices/player/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    player: playerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
