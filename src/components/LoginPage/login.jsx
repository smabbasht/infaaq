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

    const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:8000/users/login");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const userData = await response.json();

    const loginIsValid = userData.find(
      (user) => user.email === email && user.password === pass
    );

    if (loginIsValid) {
      // Authentication successful, perform actions like setting up sessions, etc.
      console.log('Login successful!');
      // Redirect the user to a new page upon successful login
      navigate('/events');
    } else {
      // Handle authentication failure, incorrect credentials
      console.error('Login failed. Incorrect email or password.');
    }
  } catch (error) {
    // Handle fetch or other errors
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
                  placeholder="email@host.com"
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
