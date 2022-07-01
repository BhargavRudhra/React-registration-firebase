import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { UserAuth } from "../../context/AuthContext";
const Navbar = () => {
  const { loggedIn, setLoggedIn, logout } = UserAuth();
  const navigate = useNavigate();
  const handleSignout = async () => {
    try {
      await logout();
      setLoggedIn(true);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left"></div>
      <div className="navbar-right">
        <div className="navbar-list">
          <ul>
            {loggedIn ? (
              <>
                <li>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "rgb(255, 142, 142)",
                    }}
                    to="/"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: " rgb(255, 142, 142)",
                    }}
                    to="signup"
                  >
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>Account</li>
                <li onClick={handleSignout}>Logout</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
