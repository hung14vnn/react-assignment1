import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginPage from "./login"; 
import Button from '@mui/material/Button';
export default function ProfilePage() {
  const [user, setUser] = useState();
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    fetch('https://60dff0ba6b689e001788c858.mockapi.io/users/' + userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, [token, userId]);
  return userId ? (
    <div>
      <ul>
        <div>ID: {user?.id}</div>
        <div>Name: {user?.name}</div>
      </ul>
      <Button variant="outlined" color="success">
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  ) : (
    <>
      <p>Log in is required</p>
      <LoginPage />
    </>
  );
}
