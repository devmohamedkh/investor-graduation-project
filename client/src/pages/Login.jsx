import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { login } from "../redux/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  // const errorMessage = error?.message || "Oops! Something went wrong";
  // const notify = () => toast.error(errorMessage);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    // if (error) {
    //   notify();
    // }
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-form">
          <div className="login-form-header">
            <h1>Log In</h1>
          </div>
          <form action="" onSubmit={handelSubmit}>
            <input
              type="email"
              name="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="email"
              className="login-form-input"
            />

            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
              className="login-form-input"
            />

            <input type="submit" value="Log In" className="btn" />
            <ToastContainer />

            <p>
              don't have an account? <Link to="/register">sign up Now </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
