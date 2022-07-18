import { Navbar } from "../../components/shared/navbar/Navbar";
import React from "react";
import "./wishlist.css";
import { DetailWishlist } from "../../components/detailwishlist/DetailWishlist";

export const Wishlist = () => {
  return (
    <div className="Wishlist-head">
      <Navbar />
      <DetailWishlist />
    </div>
  );
};
