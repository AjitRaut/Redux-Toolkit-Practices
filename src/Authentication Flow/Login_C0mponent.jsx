import React, { useState } from 'react'

const Login_C0mponent = () => {
const [username , setusername] = useState("");
const [password , setpassword] = useState("");

  return (
    <>
     <div>
        <h1>Login Component</h1>
        <form>
            <p>Username</p>
            <input value={} />
            <p>Password</p>
            <input type="password"  />
        </form>
        </div> 
    </>
  )
}

export default Login_C0mponent
