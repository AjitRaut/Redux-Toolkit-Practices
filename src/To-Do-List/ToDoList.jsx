import React from 'react'
import { useSelector } from 'react-redux'

const ToDoList = () => {
  const todos = useSelector((store)=>store.todo.todos)
  return (
    <>
      <div className='h-5 max-w-full'>
        {todos.map((todo , index)=>(
          <div key={index}> 
           {todo}
          </div>
        ))}
      </div>
    </>
  )
}

export default ToDoList
