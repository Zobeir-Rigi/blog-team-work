import { Link } from "react-router-dom";
import "../styles/TopBar.css";
import React from "react";

const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcone fa-brands fa-square-facebook"></i>
        <i className="topIcone fa-brands fa-square-twitter"></i>
        <i className="topIcone fa-brands fa-square-pinterest"></i>
        <i className="topIcone fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem">Login</li>
        </ul>
      </div>
      <div className="topRight">
        {/* we want to say if there is a user show the profile pic otherwaise show login and register pages*/}
        {user ? (
          <img
            className="topImg"
            alt="profileImg"
            src="https://www.scientifique-en-chef.gouv.qc.ca/wp-content/uploads/SC_Francis_Fortin_militantisme_Anonymous-scaled.jpeg"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>{" "}
      </div>
    </div>
  );
};

export default TopBar;
