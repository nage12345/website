import React from "react";
import { Filterbox } from "../../components/filterbox/Filterbox";
import { Products } from "../../components/products/Product";
import { ScrollFooter } from "../../components/shared/footer/Scrollfooter";
import { Navbar } from "../../components/shared/navbar/Navbar";
import "./ProductListing.css";

export function ProductListing() {
  return (
    <div className="product-list-head">
      <Navbar />
      <div className="main-box">
        <Filterbox />
        <Products />
      </div>
      <ScrollFooter />
    </div>
  );
}
