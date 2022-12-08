import { createSlice } from "@reduxjs/toolkit";

const vipSlice = createSlice({
  name: "vip",
  initialState: {
    vips: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    loadVipsStart: (state) => {
      state.isFetching = true;
    },
    loadVipsSuccess: (state, action) => {
      state.isFetching = false;
      state.vips = action.payload;
    },
    loadVipsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loadVipsStart, loadVipsSuccess, loadVipsFailure } =
  vipSlice.actions;
export default vipSlice.reducer;
