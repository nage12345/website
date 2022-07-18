import { Navbar } from "../../components/shared/navbar/Navbar";
import React from "react";
import { LoginForm } from "../../components/loginform/Loginform";
import { Footer } from "../../components/shared/footer/Footer";
import "./login.css";

export function Login() {
  return (
    <div className="login-page">
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}
