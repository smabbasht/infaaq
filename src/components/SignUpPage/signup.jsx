import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Fragment } from "react";
import "./signup.css";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';



const SignUp = (props) => {
  const navigate = useNavigate();
  const [role, setRole] = useState(""); // role


  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the page from reloading on submit
    //debug
    setRole(e.target.value)
    console.log(role);
    console.log(role==='volunteer')
    console.log(role==='donor')
    if (role==='volunteer')
    {
      navigate('/events'); }
    else if (role==='donor')
    {
      navigate('/donor');
    }
    else
    {
      alert("Do something");
    }
    
    
    

    // const userData = {
    //   name : name,
    //   email: email,
    //   password: pass,
    // };

    // fetch("https://dummyjson.com/products/add", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     type: "signup",
    //     data: userData
    //   }),
    // })
    // .then(res => res.json())
    // .then(console.log(userData));
    
  };

  return (
    <Fragment>
      <div className="main-page">
        <div className="left-panel"></div>
        <div className="right-panel">
          <div className="container">
            <div className="header">
              <div className="text">
                <h2>Register as?</h2>
              </div>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="inputs">
                <input type="radio" value="volunteer" id="volunteer" name="input" onChange={(e) => setRole(e.target.value)}/>
                <label htmlFor="volunteer">Volunteer</label>
                <br/>
                <input 
                  type="radio" 
                  value= "donor"
                  id="donor"
                  name="input"
                  onChange={(e) => setRole(e.target.value)}
                />
                <label htmlFor="donor">Donor</label>
              </div>
              <div className="sumbit-container">
                <div className="signup-submit">
                  <button type="submit">Proceed</button>
                </div>
              </div>
            </form>
            <div className="sumbit-container">
              <div className="login-submit">
                Already have an account?
                <u
                  className="link-btn"
                  onClick={() => navigate('/')}
                  
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

export default SignUp;
