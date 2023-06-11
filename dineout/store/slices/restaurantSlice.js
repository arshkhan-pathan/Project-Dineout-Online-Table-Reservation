import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: '',
  reducers: {
    setLocation: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export const selectCurrentLocation=(state)=>state.location;
export default locationSlice.reducer;