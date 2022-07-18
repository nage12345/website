import React from "react";
import { Link } from "react-router-dom";
import "./signupform.css";
export const Signupform = () => {
  return (
    <div className="signup-main-box">
      <div className="signup-box">
        <div className="signup-title">
          <h3 className="item-font">Signup</h3>
        </div>
        <form className="signup-form" action="submit">
          <div className="signup-input">
            <label htmlFor="name" className="item-font">
              First Name:
            </label>
          </div>
          <div className="signup-input-box">
            <input
              id="name"
              className="text-box mantra-textbox-classic mantra-highlight-box"
              type="text"
              placeholder=" xyz "
              required
            />
          </div>
          <div className="signup-input">
            <label htmlFor="last" className="item-font">
              Last Name:
            </label>
          </div>
          <div className="signup-input-box">
            <input
              id="last"
              className="text-box mantra-textbox-classic mantra-highlight-box"
              type="text"
              placeholder=" xyz "
              required
            />
          </div>
          <div className="signup-input">
            <label htmlFor="email" className="item-font">
              Email Id:
            </label>
          </div>
          <div className="signup-input-box">
            <input
              id="email"
              className="text-box mantra-textbox-classic mantra-highlight-box"
              type="email"
              placeholder=" xyz@email.com "
              required
            />
          </div>
          <div className="signup-input">
            <label htmlFor="password" className="item-font">
              Password:
            </label>
          </div>
          <div className="signup-input-box">
            <input
              id="password"
              className="text-box mantra-textbox-classic mantra-highlight-box"
              type="password"
              placeholder="  ********** "
              required
            />
          </div>

          <div className="signup-input">
            <label htmlFor="password" className="item-font">
              Confirm Password:{" "}
            </label>
          </div>
          <div className="signup-input-box">
            <input
              id="password"
              className="text-box mantra-textbox-classic mantra-highlight-box"
              type="password"
              placeholder="  ********** "
              required
            />
          </div>

          <div className="signup-input">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me" className="item-font">
              I accept all Terms & Condition.
            </label>
          </div>

          <button className="mantra-button mantra-primary-btn signup-button">
            Create new Account
          </button>
          <div className="signup-input new-account">
            <Link to="/login" className="item-font">
              Already have an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
