// ProtectedComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Authentication_Flow_Slice';

const ProtectedComponent = () => {
  const user = useSelector((store) => store.auth.user); // Correct property access
  console.log(user);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>{user ? `Welcome, ${user.username}` : 'No user logged in'}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProtectedComponent;
