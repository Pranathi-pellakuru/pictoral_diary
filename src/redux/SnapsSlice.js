import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  urls: null,
};

export const snapsSlice = createSlice({
  name: 'snaps',
  initialState,
  reducers: {
    addSnap: (state, action) => {
      if (state.urls === null) {
        state.urls = [action.payload];
      } else {
        state.urls = [...state.urls, action.payload];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {addSnap} = snapsSlice.actions;

export default snapsSlice.reducer;
