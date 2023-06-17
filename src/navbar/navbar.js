import React from "react";
import './navbar.css';
import './login.css';
import './signup.css'
import { Link, useNavigate } from "react-router-dom";
// import Login from "./login";
// import Signup from "./signup";

function Navbar () {

    const navigate = useNavigate();
    const localsignup = localStorage.getItem('signUp');

    const logout = () => {
        localStorage.removeItem('signUp');
        alert('You are successfully logged Out')
        // window.location.reload();
        navigate('./')
        window.location.reload();

    }


    return (
        <div className="navbar-form">
            <div className="img-container">
                <span><img src="https://cdn-icons-png.flaticon.com/128/3145/3145765.png" alt="icon"></img></span>
                <p>LIBRARY SYSTEM</p>
            </div>
            <ul className="list-items">
            <li>
            <div className="nav-items">
                <Link to='./'>HOME</Link>
            </div>
            </li>
            <li>
            {localsignup ? (
            <div className="nav-items">
                <Link to='./books'>BOOKS</Link>
            </div>
            ) : (
            <div className="nav-items">
                <p>BOOKS</p>
            </div>
            )}
            
            </li>
            <li>
            <div className="nav-items">
                <Link to='./about'>ABOUT</Link>
            </div>
            </li>
            {localsignup ?(
                // <div>
                // <li>
                // <div className="login">
                //     <form>
                //         <Link to='/login'><button type="button" className="btn">Login</button></Link>
                //     </form>
                // </div>
                // </li>
                <li>
                <div className="logout">
                <form>
                     <button className="btn-logout" onClick={logout}>Logout</button>
                </form>
                </div>
                </li>
                // </div>
            ) :(
                <div>
                <li>
                <div className="login">
                    <form>
                        <Link to='/login'><button type="button" className="btn">Login</button></Link>
                    </form>
                </div>
                </li>
                <li>
                <div className="signup">
                <form>
                    <Link to='/signup'> <button className="btn-signup">Signup</button></Link>
                </form>
                </div>
                </li>
                </div>
            )}

            </ul>

            
        </div>
    )
}

export default Navbar;