import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  const todos = useSelector((store)=>store.todo.todos)
  return (
    <>
      <div className='max-w-full'>
        {todos.map((todo , index)=>(
          <ToDoItem key={index} index={index} item={todo} /> 
        
        ))}
      </div>
    </>
  )
}

export default ToDoList
