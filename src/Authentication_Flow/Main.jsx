import React from 'react'
import { useSelector } from 'react-redux'
import store from './Authentication_Flow_Store'
import Protected_Component from './Protected_Component';
import Login_C0mponent from './Login_C0mponent';

const Main = () => {
    const aunt = useSelector((store)=>store.auth.isAuthenticated);
  return (
    <div>
      {aunt ? <Protected_Component /> : <Login_C0mponent />}
    </div>
  )
}


export default Main
