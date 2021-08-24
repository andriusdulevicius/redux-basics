import { createSlice } from '@reduxjs/toolkit';
// Auth setup
export const authSlice = createSlice({
  name: 'authentitication',
  initialState: {
    isAuthenticated: false,
    user: {
      email: 'mike@gmail.com',
      password: 'secret',
    },
  },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
