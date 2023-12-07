import React, { useState } from "react";
import { Fragment } from "react";
import "./signupD.css";
import { useNavigate } from 'react-router-dom';

const SignUpD = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // email
  const [pass, setPass] = useState(""); // password
  const [name, setName] = useState(""); // name

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      password: pass,
      role: 1,
    };

    try {
      const response = await fetch("http://localhost:8000/users/api/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // Handle a successful registration
      console.log('Registration successful!');
      navigate('/events'); // Redirect to a success page or user dashboard
    } catch (error) {
      console.error('Registration failed:', error);
      console.log(JSON.stringify(userData));
      // Handle registration failure, display an error message to the user
    }
  };

  return (
    <Fragment>
      {/* Your JSX remains unchanged */}
      <div className="main-page">
        <div className="left-panel"></div>
        <div className="right-panel">
          <div className="container">
            <div className="header">
              <div className="text">
                <h2>SignUp as Donor</h2>
              </div>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="inputs">
                <label htmlFor="name"></label>
                <input
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Full Name"
                />
              </div>
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
                <div className="signup-submit">
                  <button type="submit">SignUp</button>
                </div>
              </div>
            </form>
            <div className="sumbit-container">
              <div className="login-submit">
                Already have an account?
                <u
                  className="link-btn"
                  onClick={()=> navigate('/')}
                >
                  {" "}
                  Login here
                </u>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUpD;
