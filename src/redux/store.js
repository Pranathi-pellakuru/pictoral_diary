import {configureStore} from '@reduxjs/toolkit';
import SnapsSlice from './SnapsSlice';

export const store = configureStore({
  reducer: {
    snaps: SnapsSlice,
  },
});
