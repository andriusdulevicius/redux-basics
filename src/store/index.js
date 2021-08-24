import { createStore } from 'redux';

const initialCounterState = { counter: 0 };
// reducer f-ja
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case 'UP':
      return { counter: state.counter + 1 };
    case 'DOWN':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
// store sukurimas
const store = createStore(counterReducer);

export default store;
