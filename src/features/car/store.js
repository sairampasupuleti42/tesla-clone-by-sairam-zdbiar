import { configureStore } from '@reduxjs/toolkit';
import menuReducr from './slices';

export const store = configureStore({
  reducer: {
    menu: carReducer,
  },
});
