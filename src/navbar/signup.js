import React,{useEffect, useRef, useState} from "react";
import './signup.css'
// import Login from "./login";
import { useNavigate, Link } from "react-router-dom";

function Signup () {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [signup, setsignup] = useState(false);
    const navigate = useNavigate();
    const localSignup = localStorage.getItem('signUp')

    useEffect(() => {
        if (localSignup) {
            setsignup(true)
        }
    })

    const handleClick = () => {
        // console.log(name.current.value, email.current.value, password.current.value);
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem('name', name.current.value)
            localStorage.setItem('email', email.current.value)
            localStorage.setItem('password', password.current.value)
            localStorage.setItem('signUp', email.current.value)
            alert('Account created successfully')
            // window.location.reload()
            navigate('/login')
        }
        return null
    }

    return (
        <div className="signup">
            {/* {showhome ? <Login/> :( */}
            <div className="container">
            <h2>SIGN UP</h2>
                <div className="input_space">
                    <input placeholder="Name" type="text" ref={name}/>
                </div>
                <div className="input_space">
                    <input placeholder="Email" type="text" ref={email}/>
                </div>
                <div className="input_space">
                    <input placeholder="password" type="password" ref={password}/>
                </div>
                <span>Already have an Account ? <Link to='/login'><p>Log in</p></Link></span>
                <input className="submit_buttom" type="submit" value='Sign Up' onClick={handleClick}/>
            </div>
            {/* )} */}
        </div>
    )
}



export default Signup;