import { createSlice } from "@reduxjs/toolkit";

const blogDataSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    loading: false,
    error: false,
    comments: [],
    categories: [],
    view: [],
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

    getDataSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state[payload?.url] = payload?.data;
    },

    postDataSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state[payload?.url] = payload?.data;
    },
  },
});

export const {
  getDataSuccess,
  fetchStart,
  fetchFail,
  getDataLikeSuccess,
  postDataSuccess,
} = blogDataSlice.actions;

export default blogDataSlice.reducer;
