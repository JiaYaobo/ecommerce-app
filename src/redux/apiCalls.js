import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./userRedux";
import {
  loadOrdersStart,
  loadOrdersSuccess,
  loadOrdersFailure,
} from "./orderRedux";
import {
  loadCartOrdersStart,
  loadCartOrdersSuccess,
  loadCartOrdersFailure,
  addOneOfCartOrder,
  removeOneOfCartOrder,
  removeOrderFromCart,
  addOrderToCart,
  checkOrders,
} from "./cartOrderRedux";
import {
  loadTransOrdersStart,
  loadTransOrdersSuccess,
  loadTransOrdersFailure,
  addOrderToTrans,
  removeOrderFromTrans,
} from "./transOrderRedux";
import {
  loadFinishedOrdersStart,
  loadFinishedOrdersSuccess,
  loadFinishedOrdersFailure,
  addOrderToFinished,
} from "./finishedOrderRedux";

import {
  addOrderToWait,
  loadWaitOrdersFailure,
  loadWaitOrdersStart,
  loadWaitOrdersSuccess,
  removeOrderFromWait,
} from "./waitOrderRedux";

import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  localStorage.removeItem("persist:root");
  dispatch(logoutSuccess());
};

export const loadCartOrders = async (dispatch, user_id) => {
  loadCartOrdersStart();
  try {
    const res = await publicRequest.get(`/order/cart_orders/${user_id}`);
    dispatch(loadCartOrdersSuccess(res.data));
  } catch (err) {
    dispatch(loadCartOrdersFailure());
  }
};

export const addOneOnCartOrder = async (dispatch, order_id) => {
  try {
    const res = await publicRequest.post(`/order/cart_orders/add/${order_id}`);
    dispatch(addOneOfCartOrder(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const removeOneOnCartOrder = async (dispatch, order_id) => {
  try {
    const res = await publicRequest.post(
      `/order/cart_orders/remove/${order_id}`
    );
    dispatch(removeOneOfCartOrder(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const deleteFromOrder = async (dispatch, order_id) => {
  try {
    await publicRequest.delete(`/order/cart_orders/${order_id}`);
    dispatch(removeOrderFromCart(order_id));
  } catch (err) {
    console.log(err);
  }
};

export const addToCart = async (dispatch, order) => {
  try {
    const res = await publicRequest.post(`/order/add_to_cart`, order);
    dispatch(addOrderToCart(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const loadTransOrders = async (dispatch, user_id) => {
  loadTransOrdersStart();
  try {
    const res = await publicRequest.get(`/order/trans_orders/${user_id}`);
    dispatch(loadTransOrdersSuccess(res.data));
  } catch (err) {
    dispatch(loadTransOrdersFailure());
  }
};

export const addToTrans = async (dispatch, orderId) => {
  try {
    const res = await publicRequest.post(`/order/add_to_trans`, {
      orderId: orderId,
    });
    dispatch(checkOrders(orderId));
    dispatch(addOrderToTrans(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const addToWait = async (dispatch, orderId) => {
  try {
    const res = await publicRequest.post(`/order/add_to_wait`, {
      orderId: orderId,
    });
    dispatch(checkOrders(orderId));
    dispatch(addOrderToWait(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const confirmTransOrder = async (dispatch, orderId) => {
  try {
    const res = await publicRequest.post(`/order/finish/${orderId}`);
    dispatch(removeOrderFromTrans(orderId));
    dispatch(addOrderToFinished(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const cancelTransOrder = async (dispatch, orderId) => {
  try {
    await publicRequest.delete(`/order/cancel/${orderId}`);
    dispatch(removeOrderFromTrans(orderId));
  } catch (err) {
    console.log(err);
  }
};

export const cancelWaitOrder = async (dispatch, orderId) => {
  try {
    await publicRequest.delete(`/order/cancel/${orderId}`);
    dispatch(removeOrderFromWait(orderId));
  } catch (err) {
    console.log(err);
  }
};

export const loadFinishedOrders = async (dispatch, user_id) => {
  loadFinishedOrdersStart();
  try {
    const res = await publicRequest.get(`/order/finished_orders/${user_id}`);
    dispatch(loadFinishedOrdersSuccess(res.data));
  } catch (err) {
    dispatch(loadFinishedOrdersFailure());
  }
};

export const loadWaitOrders = async (dispatch, user_id) => {
  loadWaitOrdersStart();
  try {
    const res = await publicRequest.get(`/order/wait_orders/${user_id}`);
    dispatch(loadWaitOrdersSuccess(res.data));
  } catch (err) {
    dispatch(loadWaitOrdersFailure());
  }
};

export const loadOrders = async (dispatch, user_id) => {
  loadOrdersStart();
  try {
    const res = await publicRequest.get(`/order/all/${user_id}`);
    dispatch(loadOrdersSuccess(res.data));
  } catch (err) {
    dispatch(loadOrdersFailure());
  }
};
