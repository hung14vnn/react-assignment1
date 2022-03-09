import React from 'react';
const LoginPage = () => {
    const [value, setValues] = React.useState({
        username: '',
        password: '',
    });
    const handleChange = (event) => {
        setValues({
            ...value,
            [event.target.name]: event.target.value
        });
        };  

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // };
        return (
        <div>
        <form>
            <input 
            style={{display: 'block', margin:"20px"}} 
            type="text" 
            value={value.username}
            onChange={handleChange}
            name = "username"
            placeholder="Username" />
            <input 
            style={{display: 'block', margin:"20px"}} 
            type="password" 
            value={value.password}
            onChange={handleChange}
            name = "password"
            placeholder="Password" />
            <button style={{display: 'block', margin:"20px"}} type="submit">Login</button>
        </form>
        </div>
    );


};
export default LoginPage;