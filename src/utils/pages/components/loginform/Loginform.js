import React from "react";
import { Link } from "react-router-dom";
import "./loginform.css";

export const LoginForm = () => {
  return (
    <div className="login-main-box">
      <div className="login-box">
        <div className="login-title">
          <h3 className="item-font">Login</h3>
        </div>
        <form className="login-form" action="submit">
          <div className="login-input">
            <label className="item-font" htmlFor="email">
              Email Id:
            </label>
            <input
              id="email"
              className="text-box text-box-email mantra-textbox-classic mantra-highlight-box"
              type="email"
              placeholder=" xyz@email.com "
              required
            />
          </div>
          <div className="login-input">
            <label className="item-font" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              class="text-box mantra-textbox-classic mantra-highlight-box"
              type="password"
              placeholder="  ********** "
              required
            />
          </div>
          <div className="login-input-box">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me" className="item-font">
              Remember me
            </label>
            <div className="forgot-password item-font"> Forgot password</div>
          </div>
          <button className="mantra-button mantra-primary-btn login-button">
            Login
          </button>
          <div className="login-input new-account">
            <Link to="/signup" className="item-font">
              Create New Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
