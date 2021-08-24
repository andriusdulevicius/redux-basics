import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter); //sukuriamas subscribe automatiskai
  const toggleCounterHandler = () => {};

  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: 'UP' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'DOWN' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'UP_BY', amount: 4 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div>
        <button onClick={incrementHandler}>UP</button>
        <button onClick={increaseHandler}>UP by ... </button>
        <button onClick={decrementHandler}>DOWN</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
