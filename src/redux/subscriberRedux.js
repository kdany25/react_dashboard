import { createSlice } from "@reduxjs/toolkit";

const subSlice = createSlice({
  name: "subscribers",
  initialState: {
    subscribers: [],
    isFetching: false,
    error: false,
  },
  reducers: {

    getSubStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSubSuccess: (state, action) => {
      state.isFetching = false;
      state.subscribers = action.payload;
    },
    getSubFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {getSubStart , getSubSuccess , getSubFailure } = subSlice.actions;
export default subSlice.reducer;