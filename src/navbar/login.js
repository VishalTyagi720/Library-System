import React, { useRef, useState } from "react";
import './login.css'
// import BookContainer from "../Book/books.container";
import { useNavigate, Link } from 'react-router-dom';

function Login () {
    const email = useRef();
    const password = useRef();

    const localemail = localStorage.getItem('email');
    const localpassword = localStorage.getItem('password');

    const [loggedin, setloggedin] = useState(false);
    const navigate = useNavigate();

    const localsignup = localStorage.getItem('signUp');

    const handleClick = () => {
        if (email.current.value === localemail && password.current.value === localpassword) {
            setloggedin(true);
            alert('You are Successfully logged in');
            if (localsignup === null){
                localStorage.setItem('signUp', localemail)
            }
            navigate('/books')
        }
        else{
            alert("Your email or password in Invalid")
            window.location.reload()
        }
        return null
    }

    return (
        <div className="login">
            <div className="container">
                <h2>LOG IN </h2>
                <div className="input_space">
                    <input placeholder="Email" type="text" ref={email}/>
                </div>
                <div className="input_space">
                    <input placeholder="password" type="password" ref={password}/>
                </div>
                <span>Don't have an Account ? <Link to='/signup'><p>Signup</p></Link></span>
                <input className="submit_buttom" type="submit" value='Log In' onClick={handleClick}/>
            </div>
        </div>
    );
}



export default Login;