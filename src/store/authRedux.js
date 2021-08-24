import { createSlice } from '@reduxjs/toolkit';
// Auth setup
export const authSlice = createSlice({
  name: 'authentitication',
  initialState: {
    isAuthenticated: false,
    users: [{ id: 1, email: 'mike@gmail.com', password: 'secret' }],
    loggedInUser: {},
  },
  reducers: {
    createUser(state, action) {
      state.isAuthenticated = true;
      state.users = [...state.users, action.payload];
    },
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    setLoggedInUser(state, action) {
      state.loggedInUser = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
