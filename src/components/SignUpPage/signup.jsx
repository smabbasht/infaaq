import { render } from "@testing-library/react";
import React, {useState} from "react";
import { Fragment } from "react";
import './signup.css'
import PropTypes from 'prop-types'

const SignUp = (props) => {
    const [email, setEmail] = useState(''); // email
    const [pass, setPass] = useState(''); // password
    const [name, setName] = useState(''); // name

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from reloading on submit
        //debug
        console.log(name);
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
                                <h2>SignUp</h2>
                            </div> 
                        </div>
                        <form className="register-form" onSubmit={handleSubmit}> 
                            <div className="inputs">
                                <label htmlFor="name"></label>
                                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
                            </div>
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
                                    <button type="submit">SignUp</button>
                                </div>
                            </div>
                        </form>
                        <div className="sumbit-container">
                            <div className="login-submit">
                                Already have an account? 
                                <u className="link-btn" onClick={() => props.onFormSwitch('login')}> Login here</u>  
                            </div>
                        </div> 
                    </div>
                </div>   
            </div>
        </Fragment>
    );
};

export default SignUp;