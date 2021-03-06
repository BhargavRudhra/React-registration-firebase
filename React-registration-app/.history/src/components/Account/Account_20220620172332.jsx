import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();

  const { user, logout, setLoggedIn } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      setLoggedIn(true);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="main-container">
      <div className="user-container">
        <h1>User Home page</h1>
        <p>Email:{user && user.email}</p>
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
