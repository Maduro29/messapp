import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    login: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    logout: (state) => {
      state.user = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
