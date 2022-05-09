import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../features/userSlice";
import './login.css';

const Login = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                name:  name,
                email: email,
                password: password,
                loggedIn: true,
            })
        );
    };

    return (
        <div className='login'>
            <form className='login__form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>
                <input type="text" placeholder='Name' value={name} 
                onChange = {(e) => setName(e.target.value)}/>
                <input type="email" placeholder='E-mail' value={email}
                onChange = {(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' value={password} 
                onChange = {(e) => setPassword(e.target.value)}/>
            <button type="button" className='submit__btn'>Submit</button>
            </form>
        </div>
    );
};

export default Login;