import { render } from "@testing-library/react";
import React, {useState} from "react";
import { Fragment } from "react";
import './login.css'
import PropTypes from 'prop-types'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
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
                        <form>
                            <div className="inputs">
                                <label htmlFor="email"></label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                            </div>
                            <div className="inputs">
                                <label htmlFor="password"></label> 
                                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                            </div>
                            <div className="sumbit-container">
                                <div className="signup-submit">
                                    <button type="button">Login</button>
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