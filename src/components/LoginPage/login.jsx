import { render } from "@testing-library/react";
import React, {useState} from "react";
import { Fragment } from "react";
import './login.css'
import PropTypes from 'prop-types'

const Login = (props) => {
    const [email, setEmail] = useState(''); //email
    const [pass, setPass] = useState(''); //password
    

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from reloading on submit
        //debug
        console.log(email);
        console.log(pass);
        
    };
    
    return (
        <Fragment>
            <div className="main-page">
                <div className="left-panel">

                </div>
                <div className="right-panel">
                    <div className="container">
                        <div className="header">
                            <div className="text">
                                <h2>Login</h2>
                            </div> 
                        </div>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="inputs">
                                <label htmlFor="email"></label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                            </div>
                            <div className="inputs">
                                <label htmlFor="password"></label> 
                                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                            </div>
                            <div className="sumbit-container">
                                <div className="login-submit">
                                    <button type="submit">Login</button>
                                </div>
                            </div>
                        </form>
                        <div className="sumbit-container">
                            <div className="register-submit">
                                Don't have an account? 
                                <u className="link-btn" onClick={() => props.onFormSwitch('register')}> Register here</u>
                            </div>
                        </div> 
                    </div>
                </div>   
            </div>
        </Fragment>
    );
};

export default Login;