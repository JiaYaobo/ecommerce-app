import { createSlice } from "@reduxjs/toolkit";
const transOrderSlice = createSlice({
  name: "transOrder",
  initialState: {
    inTransOrders: [],
    inTransNum: 0,
    isFetching: false,
    error: false,
  },
  reducers: {
    loadTransOrdersStart: (state) => {
      state.isFetching = true;
    },
    loadTransOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.inTransOrders = action.payload;
      state.inTransNum = state.inTransOrders.length || 0;
    },
    loadTransOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addTransOrders: (state, action) => {
      state.inTransOrders = state.inTransOrders.push(action.payload);
      state.inTransNum += 1;
    },
    deleteTransOrders: (state, action) => {
      state.inTransOrders = action.payload;
      state.inTransNum -= 1;
    },
  },
});

export const {
  loadTransOrdersStart,
  loadTransOrdersSuccess,
  loadTransOrdersFailure,
  addTransOrders,
  deleteTransOrders,
} = transOrderSlice.actions;
export default transOrderSlice.reducer;
