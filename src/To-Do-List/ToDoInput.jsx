import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add_Todo } from "./ToDoSlice";

const ToDoInput = () => {
  const todo = useSelector((store)=>store.todo.todos)
  console.log(todo)

  const dispatch = useDispatch();

  const handleForm =()=>{
    e.preventDefault();
  }

  const handleTodo =()=>{
    dispatch(Add_Todo())
  }
  return (
    <div className="flex justify-around ">
      <form onSubmit={handleForm}>
        <div className="border-solid border border-gray-500 rounded-sm w-full ">
          <input className="outline-none px-2" />
          <button className="bg-sky-700 p-2 m-2 rounded-lg text-xl  font-bold" onClick={handleTodo}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDoInput;
