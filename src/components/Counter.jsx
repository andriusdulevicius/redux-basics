import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from './../store/counterRedux';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter); //sukuriamas subscribe automatiskai
  const showCounter = useSelector((state) => state.counter.showCounter); //sukuriamas subscribe automatiskai
  const toggleCounterHandler = () => {
    // dispatch({ type: 'TOGGLE' });
    dispatch(counterActions.toggle());
  };

  const dispatch = useDispatch();
  const incrementHandler = () => {
    // dispatch({ type: 'UP' });
    dispatch(counterActions.up()); //grazina {type: 'automatiskai sugeneruotas pav', payload: undefined}
  };
  const decrementHandler = () => {
    // dispatch({ type: 'DOWN' });
    dispatch(counterActions.down());
  };

  const increaseHandler = () => {
    // dispatch({ type: 'UP_BY', amount: 4 });
    dispatch(counterActions.increase(6));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <>
          <div className={classes.value}>-- {counter} --</div>
          <div>
            <button onClick={incrementHandler}>UP</button>
            <button onClick={increaseHandler}>UP by ... </button>
            <button onClick={decrementHandler}>DOWN</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
