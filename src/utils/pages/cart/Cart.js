import { Navbar } from "../../components/shared/navbar/Navbar";
import React from "react";
import { Detailcart } from "../../components/detailcart/Detailcart";
import "./cart.css";
export const Cart = () => {
  return (
    <div className="Cart-head">
      <Navbar />
      <Detailcart />
    </div>
  );
};
