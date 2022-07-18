import React from "react";
import "./signup.css";

import { Navbar } from "../../components/shared/navbar/Navbar";
import { Signupform } from "../../components/signupform/Signupform";
export const Signup = () => {
  return (
    <div className="sign-page">
      <Navbar />
      <Signupform />
    </div>
  );
};
