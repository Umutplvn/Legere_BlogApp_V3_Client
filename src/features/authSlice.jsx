import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: false,
    currentUser: null,
    token: null,
    userId: null,
    avatar: "",
    user: [],
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.currentUser = payload?.user?.username;
      state.token = payload?.key;
      state.userId = payload?.user?.id;
      state.avatar = payload?.user?.image;
      state.user = payload?.user;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.error = false;
      state.currentUser = null;
      state.token = null;
      state.userId = null;
      state.user = [];
      state.avatar = "";
    },

    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.currentUser = payload?.username;
      state.token = payload?.token;
      state.userId = payload?.id;
      state.avatar = payload?.image;
      state.user = payload;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} = authSlice.actions;

export default authSlice.reducer;
