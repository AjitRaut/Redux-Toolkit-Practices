import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginFailure, loginSuccess } from './Authentication_Flow_Slice';

const Login_C0mponent = () => {
const [username , setusername] = useState("");
const [password , setpassword] = useState("");
const dispatch = useDispatch();

const handleonsumbit =(e)=>{
    e.preventDefault();
}

const handlesumbit =()=>{
    if(username === "ajit" && password === "pass")
    {
        dispatch(loginSuccess({username}))
    }else{
        dispatch(loginFailure("invalid credentiols"))
    }
}


  return (
    <>
     <div>
        <h1>Login Component</h1>
        <form onSubmit={handleonsumbit}>
            <p>Username</p>
            <input value={username} onChange={(e)=>setusername(e.target.value)} />

            <p>Password</p>
            <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}  />
            <button onClick={handlesumbit}>Submit</button>
        </form>
        </div> 
    </>
  )
}

export default Login_C0mponent
