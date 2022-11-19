import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
// action
import {
  counterActions,
  incrementCountAsyncAction,
} from "../../features/counter/counterSlice";

const CounterComponent = () => {
  const dispatch = useDispatch();
  const { incrementCountAction, decrementCountAction } = counterActions;
  const { count } = useSelector((state) => state.counter);

  const handleIncrement = useCallback(
    () => dispatch(incrementCountAction()),
    [dispatch, incrementCountAction]
  );

  const handleDecrement = useCallback(
    () => dispatch(decrementCountAction()),
    [dispatch, decrementCountAction]
  );

  const handleAsyncIncrement = useCallback(
    () => dispatch(incrementCountAsyncAction(2)),
    [dispatch]
  );

  return (
    <div className="flex flex-col">
      <p>Current Count Is {count}</p>
      <div className="flex">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleAsyncIncrement}>Async Increment</button>
      </div>
    </div>
  );
};

export default CounterComponent;
