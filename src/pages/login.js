import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
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
        <form>
           <div>
            <TextField
            style={{display: 'block', margin:"20px", size:"small"}} 
            type="text" 
            value={value.username}
            onChange={handleChange}
            onBlur={handleInputBlur}
            name = "username"
            placeholder="Username"
            label="Username"
            variant="outlined"  />
            {touched.username && <FormHelperText style={{display: 'block', margin:"20px", color:"red"}}>{errorMessage.username}</FormHelperText>}
            </div>
            <div>
            <TextField
            style={{display: 'block', margin:"20px", size : "small"}} 
            type="password" 
            value={value.password}
            onChange={handleChange}
            onBlur={handleInputBlur}
            name = "password"
            placeholder="Password"
            label="Password"
            variant="outlined" />
            {touched.password && <FormHelperText style={{display: 'block', margin:"20px", color:"red"}}>{errorMessage.password}</FormHelperText>}
            </div>
            <Button variant="contained" onClick={handleSubmit} disabled={validForm} style={{display: 'block', margin:"20px"}} type="submit">Login</Button>
        </form>
        </div>
    );


};
export default LoginPage;