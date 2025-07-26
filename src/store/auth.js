import { createSlice } from "@reduxjs/toolkit";
export let auth = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export let { login, logout } = auth.actions;
