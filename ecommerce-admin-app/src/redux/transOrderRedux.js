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
    addOrderToTrans: (state, action) => {
      state.inTransOrders.push(action.payload);
      state.inTransNum += 1;
    },
    removeOrderFromTrans: (state, action) => {
      state.inTransOrders = [
        ...state.inTransOrders.filter((o) => o.order_id !== action.payload),
      ];
      state.inTransNum -= 1;
    },
  },
});

export const {
  loadTransOrdersStart,
  loadTransOrdersSuccess,
  loadTransOrdersFailure,
  addOrderToTrans,
  removeOrderFromTrans,
} = transOrderSlice.actions;
export default transOrderSlice.reducer;
