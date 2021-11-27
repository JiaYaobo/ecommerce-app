import { createSlice } from "@reduxjs/toolkit";

const cartOrderSlice = createSlice({
  name: "cartOrder",
  initialState: {
    inCartOrders: [],
    inCartNum: 0,
    inCheckOrderIds: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    loadCartOrdersStart: (state) => {
      state.isFetching = true;
    },
    loadCartOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.inCartOrders = action.payload;
      state.inCartNum = state.inCartOrders.length || 0;
      state.inCheckOrderIds = [];
    },
    loadCartOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addOneOfCartOrder: (state, action) => {
      let index = 0;
      for (let order of state.inCartOrders) {
        if (order.order_id === action.payload.order_id) {
          break;
        }
        index = index + 1;
      }
      state.inCartOrders[index] = action.payload;
    },
    removeOneOfCartOrder: (state, action) => {
      let index = 0;
      for (let order of state.inCartOrders) {
        if (order.order_id === action.payload.order_id) {
          break;
        }
        index = index + 1;
      }
      state.inCartOrders[index] = action.payload;
    },
    addOrderInCheck: (state, action) => {
      state.inCheckOrderIds.push(action.payload);
    },
    removeOrderInCheck: (state, action) => {
      state.inCheckOrderIds = [
        ...state.inCheckOrderIds.filter((order) => order !== action.payload),
      ];
    },
    removeOrderFromCart: (state, action) => {
      state.inCartOrders = [
        ...state.inCartOrders.filter((o) => o.order_id !== action.payload),
      ];
      state.inCheckOrderIds = [
        ...state.inCheckOrderIds.filter((order) => order !== action.payload),
      ];
      state.inCartNum -= 1;
    },
    addOrderToCart: (state, action) => {
      state.inCartOrders.push(action.payload);
      state.inCartNum += 1;
    },
    checkOrders: (state, action) => {
      state.inCartOrders = [
        ...state.inCartOrders.filter((o) => o.order_id !== action.payload),
      ];
      state.inCartNum -= 1;
      state.inCheckOrderIds = [
        ...state.inCheckOrderIds.filter((o) => o !== action.payload),
      ];
    },
  },
});

export const {
  loadCartOrdersStart,
  loadCartOrdersSuccess,
  loadCartOrdersFailure,
  addOneOfCartOrder,
  removeOneOfCartOrder,
  addOrderInCheck,
  removeOrderInCheck,
  addOrderToCart,
  removeOrderFromCart,
  checkOrders,
} = cartOrderSlice.actions;
export default cartOrderSlice.reducer;
