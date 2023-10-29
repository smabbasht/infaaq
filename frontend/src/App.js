import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import  Login  from "./components/LoginPage/login";
import SignUp from "./components/SignUpPage/signup";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
