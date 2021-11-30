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
    addOrderToFinished: (state, action) => {
      state.inFinishedOrders.push(action.payload);
      state.inFinishedNum += 1;
    },
    removeOrderFromFinished: (state, action) => {
      state.inFinishedOrders = [
        ...state.inFinishedOrders.filter((o) => o.order_id !== action.payload),
      ];
      state.inFinishedNum -= 1;
    },
  },
});

export const {
  loadFinishedOrdersStart,
  loadFinishedOrdersSuccess,
  loadFinishedOrdersFailure,
  addOrderToFinished,
  removeOrderFromFinished,
} = finishedOrderSlice.actions;
export default finishedOrderSlice.reducer;
