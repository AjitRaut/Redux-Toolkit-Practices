import React from 'react'
import { useSelector } from 'react-redux'

const ToDoList = () => {
  const todos = useSelector((store)=>store.todo.todos)
  return (
    <>
      <div className='h-5 max-w-full'>
        {todos.map((todo , index)=>(
          <div className='bg-slate-400 font-bold text-left p-1 border-b-2 border' key={index}> 
          <p>{todo}</p> 
          </div>
        ))}
      </div>
    </>
  )
}

export default ToDoList
