import React from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const ToDoComponent = () => {
  return (
    <div className="flex bg-red-100 justify-center place-items-center min-h-screen max-w-5xl m-auto">
      <div className="w-96">
      <ToDoInput />
      <ToDoList />
      </div>
     
    </div>
  );
};

export default ToDoComponent;
