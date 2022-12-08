import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    inCartOrders: [],
    inTransOrders: [],
    inFinishedOrders: [],
    inCartNum: 0,
    inTransNum: 0,
    inFinishedNum: 0,
    isFetching: false,
    error: false,
  },
  reducers: {
    loadOrdersStart: (state) => {
      state.isFetching = true;
    },
    loadOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.inCartOrders = action.payload.inCart;
      state.inTransOrders = action.payload.inTrans;
      state.inFinishedOrders = action.payload.inFinished;
      state.inCartNum = state.inCartOrders.length || 0;
      state.inTransNum = state.inTransOrders.length || 0;
      state.inFinishedNum = state.inFinishedOrders.length || 0;
    },
    loadOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addCartOrders: (state, action) => {
      state.inCartOrders = state.inCartOrders.push(action.payload);
      state.inCartNum += 1;
    },
    deleteCartOrders: (state, action) => {
      state.inCartOrders = action.payload;
      state.inCartNum -= 1;
    },
    submitCartOrders: (state, action) => {
      state.inCartOrders = state.inCartOrders.filter(
        (co) => co.orders_id === action.payload.id
      );
      state.inCartOrders -= 1;
      state.inTransOrders = state.inTransOrders.push(action.payload);
      state.inTransNum += 1;
    },
  },
});

export const { loadOrdersStart, loadOrdersSuccess, loadOrdersFailure } =
  orderSlice.actions;
export default orderSlice.reducer;
