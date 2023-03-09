import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/authSlice";
function Navbar() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut());
  };
  return (
    <div className="container">
      <nav>
        <div className="nav-left">
          <Link className="text-btn nav-logo" to="/">
            <img src="/imgs/logo.png" alt="" />
          </Link>
          <Link className="nav-links text-btn" to="/">
            Home
          </Link>
          <Link className="nav-links text-btn" to="/projects">
            Live Investment
          </Link>
          {/* <Link className="nav-links text-btn" to="#Liveinvestment">
            Live investment
          </Link> */}
          <Link className="nav-links text-btn" to="/feq">
            FAQ
          </Link>
          <Link className="nav-links text-btn" to="/conectus">
            Contact Us
          </Link>
        </div>

        <div className="nav-center">
          <Link className="nav-links p-btn" to="/projects">
            Investment opportunities
          </Link>
        </div>
        {isAuthenticated ? (
          <div className="nav-right">
            <Link to="/invistor" className="nav-links text-btn nav-active">
              <img className="header-user" src="imgs/user.png" alt="" />
            </Link>
            <Link
              to="/"
              className="nav-links text-btn nav-active"
              onClick={logout}
            >
              LogOut
            </Link>
          </div>
        ) : (
          <div className="nav-right">
            <Link className="nav-links text-btn nav-active" to="/login">
              Login
            </Link>
            <Link className="nav-links p-btn nav-active" to="/register">
              sign Up
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
