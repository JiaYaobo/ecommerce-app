import { createSlice } from "@reduxjs/toolkit";

const finishedOrderSlice = createSlice({
  name: "finishedOrder",
  initialState: {
    inFinishedOrders: [],
    inFinishedNum: 0,
    inFinishedTotal: 0,
    isFetching: false,
    error: false,
  },
  reducers: {
    loadFinishedOrdersStart: (state) => {
      state.isFetching = true;
    },
    loadFinishedOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.inFinishedOrders = action.payload;
      state.inFinishedNum = state.inFinishedOrders.length || 0;
    },
    loadFnishedOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addFinishedOrders: (state, action) => {
      state.inFinishedOrders = state.inFinishedOrders.push(action.payload);
      state.inFinishedNum += 1;
    },
    deleteFinishedOrders: (state, action) => {
      state.inFinishedOrders = action.payload;
      state.inFinishedNum -= 1;
    },
  },
});

export const {
  loadFinishedOrdersStart,
  loadFinishedOrdersSuccess,
  loadFinishedOrdersFailure,
  addFinishedOrders,
  deleteFinishedOrders,
} = finishedOrderSlice.actions;
export default finishedOrderSlice.reducer;
