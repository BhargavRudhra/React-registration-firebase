import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Login.css";
import googleicon from "../../images/googleicon.svg";
import facebookicon from "../../images/facebookicon.svg";
import apple from "../../images/apple.svg";

const Login = () => {
  const { login, setLoggedIn, googleSignIn, facebookSignIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (email == null || email === "") {
      alert("please enter email");
    } else if (password == null || password === "") {
      alert("Please enter password");
    } else if (password.length < 5) {
      alert("Password must be of 5 characters");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      alert("Please enter proper email");
    } else {
      try {
        await login(email, password);
        navigate("account");
        setLoggedIn(false);
      } catch (e) {
        alert(e.message);
      }
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/account");
    } catch (error) {
      alert(error.message);
    }
  };
  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/account");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div className="main-container">
        <div className="right-container"></div>
        <div className="right-container">
          <div className="form-container">
            <form id="handleerror" onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                id="email"
                className="input"
              />
              <label htmlFor="pass">password:</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="pass"
                className="input"
              />
              <div className="button-container">
                <input type="submit" className="button" value="Login" />
              </div>
            </form>
            <p>
              If new user please{" "}
              <Link id="logsignup" to="/signup">
                SignUp
              </Link>{" "}
              here
            </p>
            <p className="or">
              <span></span>
            </p>
            <span>Signin with Google, Facebook</span>
          </div>
          <div className="login-icons">
            <button>
              <img
                className="login-icon"
                onClick={handleGoogleSignIn}
                src={googleicon}
                alt="google"
              />
            </button>
            <button>
              <img
                className="login-icon"
                onClick={handleFacebookSignIn}
                src={facebookicon}
                alt="facebook"
              />
            </button>
            <button>
              <img className="login-icon" src={apple} alt="apple" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
