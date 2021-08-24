import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = { counter: 0, showCounter: true };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    up(state) {
      // immer paketo pagalba galima rasyti tokiu budu, tada nereikia perdarineti objektu, yra automatiskai perdaroma state nemutuojancia sintakse
      state.counter++;
    },
    down(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
