import { createSlice } from "@reduxjs/toolkit";

const waitOrderSlice = createSlice({
  name: "waitOrder",
  initialState: {
    inWaitOrders: [],
    inWaitNum: 0,
    inWaitTotal: 0,
    isFetching: false,
    error: false,
  },
  reducers: {
    loadWaitOrdersStart: (state) => {
      state.isFetching = true;
    },
    loadWaitOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.inWaitOrders = action.payload;
      state.inWaitNum = state.inWaitOrders.length || 0;
    },
    loadWaitOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addOrderToWait: (state, action) => {
      state.inWaitOrders.push(action.payload);
      state.inWaitNum += 1;
    },
    removeOrderFromWait: (state, action) => {
      state.inWaitOrders = [
        ...state.inWaitOrders.filter((o) => o.order_id !== action.payload),
      ];
      state.inWaitNum -= 1;
    },
  },
});

export const {
  loadWaitOrdersStart,
  loadWaitOrdersSuccess,
  loadWaitOrdersFailure,
  addOrderToWait,
  removeOrderFromWait,
} = waitOrderSlice.actions;
export default waitOrderSlice.reducer;
