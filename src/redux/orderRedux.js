import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orderr",
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
    loadInOrdersStart: (state) => {
      state.isFetching = true;
    },
    loadInOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.inCartOrders = action.payload.cartOrders;
      state.inTransOrders = action.payload.transOrders;
      state.inFinishedOrders = action.payload.finishedOrders;
      state.inCartNum = length(inCartOrders);
      state.inTransNum = length(inTransOrders);
      state.inFinishedNum = length(inFinishedOrders);
    },
    loadInOrdersFailure: (state) => {
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
        (co) => co.orders_id == action.payload.id
      );
      state.inCartOrders -= 1;
      state.inTransOrders = state.inTransOrders.push(action.payload);
      state.inTransNum += 1;
    },
  },
});

export default orderSlice.reducer;
