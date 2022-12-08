import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
    },
    updateUserInfo: (state, action) => {
      state.currentUser.user_name = action.payload.user_name;
      state.currentUser.user_province = action.payload.user_province;
      state.currentUser.user_city = action.payload.user_city;
      state.currentUser.user_mobile = action.payload.user_mobile;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  updateUserInfo,
} = userSlice.actions;
export default userSlice.reducer;
