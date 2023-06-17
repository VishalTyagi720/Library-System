import React from "react";
import './Home.css';

function Home () {

    const localname = localStorage.getItem('name');
    const localsignup = localStorage.getItem('signUp');

    return (
        <div>
        <div className="Home_container">
            {localsignup ? (
            
            <div className="welcome">
            <p><h1>Welcome {localname}</h1></p>
            <p className="quote"> "THE ONLY THING THAT YOU ABSOLUTELY HAVE TO KNOW, IS THE LOCATION OF THE LIBRARY" -Albert Einstein </p>
            </div>
            ):(
                <div>
                <div className="welcome">
                    <p><h1>WELCOME TO LIBRARY SYSTEM</h1></p>
                </div>
                <div className="login_signup"> Login or Signup to issue BOOKS</div>
                </div>
            
            )}
        </div>
        </div>
    )
}



export default Home;