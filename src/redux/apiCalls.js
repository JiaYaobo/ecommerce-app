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

export const loadOrders = async (dispatch, user_id) => {
  loadOrdersStart();
  try {
    const res = await publicRequest.get(`/order/all/${user_id}`);
    dispatch(loadOrdersSuccess(res.data));
  } catch (err) {
    dispatch(loadOrdersFailure());
  }
};
