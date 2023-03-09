import "./login.css";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { register } from "../redux/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Regester() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ email, password, name, gender }));
  };
  return (
    <div className="container">
      <div className="login-container">
        <div className="login-form">
          <div className="login-form-header">
            <h1>sign up</h1>
          </div>

          <form onSubmit={handelSubmit}>
            <input
              type="text"
              name="name"
              onChange={(e) => setname(e.target.value)}
              id=""
              placeholder="your name"
              className="login-form-input"
            />
            <input
              type="email"
              name="email"
              onChange={(e) => setemail(e.target.value)}
              id=""
              placeholder="email"
              className="login-form-input"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
              id=""
              className="login-form-input"
            />
            <div className="gender-box">
              <h3>Gender</h3>
              <input
                type="radio"
                name="gender"
                id="Mail"
                value="femail"
                onChange={(e) => setgender(e.target.value)}
              />{" "}
              <label for="Mail">Mail</label> &nbsp;&nbsp;
              <input
                type="radio"
                name="gender"
                onChange={(e) => setgender(e.target.value)}
                id="Femail"
                value="femail"
              />{" "}
              <label for="Femail">Femail</label> <br />
            </div>

            <input type="submit" value="Sign Up" className="btn" />
            <ToastContainer />
            <p>
              have an account? <Link to="/login">Login Now </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Regester;
