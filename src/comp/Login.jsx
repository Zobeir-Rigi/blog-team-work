<<<<<<< HEAD
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Enter you'r email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter you'r password..."
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
=======
import React from 'react';
import "../styles/Login.css";

function Login() {
  return (
    <div className="login">
      <span className="loginTitle"></span>
      <form action="" className="loginForm">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
          id="email"
        />

        <label htmlFor="password">Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your password..."
          id="password"
        />

        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton"></button>
    </div>
  );
}

export default Login
>>>>>>> 0fcec47104d84180ab84f20f288773d9d3d2eb73
