import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Fragment } from "react";
import "./login.css";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); //email
  const [pass, setPass] = useState(""); //password

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the page from reloading on submit
    //debug
    console.log(email);
    console.log(pass);
    const userData = {
      email: email,
      password: pass,
    };

    
    try {
      const response = fetch('http://localhost:8001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pass }),
      });
      const data =  response.json();
      if (response.ok) {
        // Set user role and details in local storage or context
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/events');
      } else {
        // Handle errors, display messages
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  

  };  

  return (
    <Fragment>
      <div className="main-page">
        <div className="left-panel"></div>
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
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="youremail@gmail.com"
                  id="email"
                  name="email"
                />
              </div>
              <div className="inputs">
                <label htmlFor="password"></label>
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="********"
                  id="password"
                  name="password"
                />
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
                <u
                  className="link-btn"
                  onClick={() => navigate('/register')}
                >
                  {" "}
                  Register here
                </u>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
