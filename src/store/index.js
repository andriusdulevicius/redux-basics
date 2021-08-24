import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterRedux';
import { authSlice } from './authRedux';

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;

// reducer f-ja paprasto redux(core) budu
// const counterReducer = (state = initialCounterState, action) => {
//   switch (action.type) {
//     case 'UP':
//       return { counter: state.counter + 1, showCounter: state.showCounter };
//     case 'DOWN':
//       return { counter: state.counter - 1, showCounter: state.showCounter };
//     case 'UP_BY':
//       return { counter: state.counter + action.amount, showCounter: state.showCounter };
//     case 'TOGGLE':
//       return { counter: state.counter, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };
// // store sukurimas
// const store = createStore(counterReducer);

// export default store;
