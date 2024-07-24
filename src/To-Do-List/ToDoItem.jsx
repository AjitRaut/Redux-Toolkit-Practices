import React from "react";
import { useDispatch } from "react-redux";
import { Dlelete_Todo } from "./ToDoSlice";

const ToDoItem = ({ index, item }) => {
  const dispatch = useDispatch();

  const handledelete = () => {
    dispatch(Dlelete_Todo(index));
  };

  return (
    <>
      <div className="w-full bg-slate-400 font-bold border-b-2 border flex justify-between place-items-center">
        <div
          className="text-left p-1 "
          key={index}
        >
          <p>{item}</p>
        </div>

          <div>
          <button onClick={handledelete}>delete</button>

          </div>
      </div>
    </>
  );
};

export default ToDoItem;
