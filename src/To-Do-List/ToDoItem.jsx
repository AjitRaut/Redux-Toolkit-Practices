import React from 'react'
import { useDispatch } from 'react-redux'
import { Dlelete_Todo } from './ToDoSlice';

const ToDoItem = ({index , item}) => {
const dispatch = useDispatch();

  const handledelete =()=>{
    dispatch(Dlelete_Todo(index))
  }

  return (
    <>
    <div className='flex justify-between place-items-center'>

    <div className='bg-slate-400 font-bold text-left p-1 border-b-2 border' key={index}> 
           <p>{item}</p> 
           <button onClick={handledelete}>delete</button>
           </div>
    </div>
     
    </>
  )
}

export default ToDoItem
