import { UserAuth } from "../../context/AuthContext";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  const [setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setError] = useState("");
  const { createUser, setLoggedIn } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      setLoggedIn(false);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      alert(e.message);
    }
  };
  return (
    <>
      <div className="main-container">
        <div className="left-container">
        </div>
        <div className="right-container">
          <div className="form-container">
            <form name="myform" onSubmit={handleSubmit}>
              <label htmlFor="name">Full name:</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="fullname"
                id="uname"
                className="input"
              />
              <label htmlFor="email">Email:</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
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
              <label htmlFor="pass1">Re-enter password:</label>
              <input type="password" name="password1" id="pass1" className="input" />
              <div className="button-container">
                <input type="submit" className="button" value="Signup" />
              </div>
            </form>
            <p>
              If you have an account! <Link to="/">Login</Link> Here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
