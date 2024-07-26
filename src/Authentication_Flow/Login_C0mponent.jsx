import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "./Authentication_Flow_Slice";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "ajit" && password === "pass") {
      dispatch(loginSuccess({ username }));
      setUsername("");
    } else {
        alert("username or passwordincorrect")
      dispatch(loginFailure("Invalid credentials"));
    }
  };

  return (
    <div>
      <h1>Login Component</h1>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginComponent;
