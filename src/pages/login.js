import React from 'react';
import { useState, useEffect } from 'react';
const LoginPage = () => {
    const [value, setValues] = React.useState({
        username: '',
        password: '',
    });
    const [touched, setTouched] = React.useState({
        username: false,
        password: false
    });
    const handleChange = (event) => {
        setValues({
            ...value,
            [event.target.name]: event.target.value
        });
        };  

    const handleSubmit = (event) => {
        fetch('https://60dff0ba6b689e001788c858.mockapi.io/tokens', {
            method: 'GET',
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        const {token, userId} = json;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        window.location.href = '/profile';
    });
    };
    const handleInputBlur = (event) => {
        setTouched({
            ...touched,
            [event.target.name]: true
        });
    };
    const validateUsername = (username) => {
        if(!username) return 'Username is required';
        if(username.length < 3) return 'Username must be at least 3 characters long';
        const validUsername = String(username)
        .toLowerCase()
        .match(/^[a-z0-9]+$/);
        if(!validUsername) return 'Username can only contain letters and numbers';
        return '';
    };
    
    const validatePassword = (password) => {
        if(!password) return 'Password is required';
        if(password.length < 8) return 'Password must be at least 8 characters';
        if(password.length > 32) return 'Password must be less than 32 characters';
        return '';
    };
    const errorMessage = {
        username: validateUsername(value.username),
        password: validatePassword(value.password)
    };
    const validForm = errorMessage.password || errorMessage.username;
        return (
        <div>
        <form onSubmit={handleSubmit}>
           <div>
            <input 
            style={{display: 'block', margin:"20px"}} 
            type="text" 
            value={value.username}
            onChange={handleChange}
            onBlur={handleInputBlur}
            name = "username"
            placeholder="Username" />
            {touched.username && <p style={{color: 'red', margin:"30px"}}>{errorMessage.username}</p>}
            </div>
            <div>
            <input 
            style={{display: 'block', margin:"20px"}} 
            type="password" 
            value={value.password}
            onChange={handleChange}
            onBlur={handleInputBlur}
            name = "password"
            placeholder="Password" />
            {touched.password && <p style={{color: 'red',margin:"30px"}}>{errorMessage.password}</p>}
            </div>
            <button onClick={handleSubmit} disabled={validForm} style={{display: 'block', margin:"20px"}} type="submit">Login</button>
        </form>
        </div>
    );


};
export default LoginPage;