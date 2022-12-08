import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./userRedux";
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
  removeOrderFromFinished,
} from "./finishedOrderRedux";

import {
  addOrderToWait,
  loadWaitOrdersFailure,
  loadWaitOrdersStart,
  loadWaitOrdersSuccess,
  removeOrderFromWait,
} from "./waitOrderRedux";

import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";

import { loadVipsFailure, loadVipsStart, loadVipsSuccess } from "./vipRedux";

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

export const loadWaitOrders = async (dispatch, user_id) => {
  dispatch(loadWaitOrdersStart());
  try {
    const res = await publicRequest.get(`/store/wait_orders/${user_id}`);
    dispatch(loadWaitOrdersSuccess(res.data));
  } catch (err) {
    dispatch(loadWaitOrdersFailure());
  }
};

export const loadTransOrders = async (dispatch, user_id) => {
  dispatch(loadTransOrdersStart());
  try {
    const res = await publicRequest.get(`/store/trans_orders/${user_id}`);
    dispatch(loadTransOrdersSuccess(res.data));
  } catch (err) {
    dispatch(loadTransOrdersFailure());
  }
};

export const loadFinishedOrders = async (dispatch, user_id) => {
  dispatch(loadFinishedOrdersStart());
  try {
    const res = await publicRequest.get(`/store/finished_orders/${user_id}`);
    dispatch(loadFinishedOrdersSuccess(res.data));
  } catch (err) {
    dispatch(loadFinishedOrdersFailure());
  }
};

export const waitToTrans = async (dispatch, order_id) => {
  try {
    const res = await publicRequest.post("/order/add_to_trans", {
      orderId: order_id,
    });
    const data = await res.data;
    dispatch(removeOrderFromWait(order_id));
    dispatch(addOrderToTrans(data));
  } catch (err) {
    console.log(err);
  }
};

export const loadProducts = async (dispatch, store_id) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get(`/product/products/store/${store_id}`);
    const data = await res.data;
    dispatch(getProductSuccess(data));
  } catch (err) {
    getProductFailure();
  }
};

export const deleteProduct = async (dispatch, goods_id) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(goods_id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (goods_id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    const res = await publicRequest.post(
      `/product/update/${goods_id}`,
      product
    );
    const data = await res.data;
    dispatch(updateProductSuccess({ goods_id, product: data }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (store_id, product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await publicRequest.post(`/product/${store_id}`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const getVips = async (dispatch, store_id) => {
  dispatch(loadVipsStart());
  try {
    const res = await publicRequest.get("/store/vips_all/" + store_id);
    const data = await res.data;
    dispatch(loadVipsSuccess(data));
  } catch (err) {
    dispatch(loadVipsFailure());
  }
};

export const deleteWaitOrder = async (dispatch, order_id) => {
  try {
    await publicRequest.delete("/order/delete_order/" + order_id);
    dispatch(removeOrderFromWait(order_id));
  } catch (err) {
    console.log(err);
  }
};

export const deleteTransOrder = async (dispatch, order_id) => {
  try {
    await publicRequest.delete("/order/delete_order/" + order_id);
    dispatch(removeOrderFromTrans(order_id));
  } catch (err) {
    console.log(err);
  }
};

export const deleteFinishedOrder = async (dispatch, order_id) => {
  try {
    await publicRequest.delete("/order/delete_order/" + order_id);
    dispatch(removeOrderFromFinished(order_id));
  } catch (err) {
    console.log(err);
  }
};
