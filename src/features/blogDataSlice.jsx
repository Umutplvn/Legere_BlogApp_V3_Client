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
    draft:[]
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

    getDraftSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.draft = payload?.info;
    },


  },
});

export const {
  getDataSuccess,
  fetchStart,
  fetchFail,
  getDataLikeSuccess,
  postDataSuccess,
  getDraftSuccess
} = blogDataSlice.actions;

export default blogDataSlice.reducer;
