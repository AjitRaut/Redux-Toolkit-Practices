import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increament,Decreament } from "./Counter_Slice";

const Counter = () => {
  const counterValue = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(Increament());
  };

  const handleDecrement = () => {
    dispatch(Decreament());
  };

  return (
    <div className="h-full w-full flex justify-center place-items-center">
      {counterValue}
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
    </div>
  );
};

export default Counter;
