import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/cart-context";
import { useWishlist } from "../../../context/wishlist-context";
import "./navbar.css";
export function Navbar() {
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();

  return (
    <nav className="mantra-nav head-nav nav-main">
      <div className="mantra-nav-title">
        <Link className="mantra-title" to="/">
          BookStore
        </Link>
      </div>
      <div className="mantra-nav-search">
        <input
          className="mantra-search-box mantra-textbox-classic mantra-highlight-box"
          placeholder="  Search"
          type="text "
        />
        <button className="mantra-button mantra-primary-btn">
          <i className="fa fa-search"></i> Search
        </button>
      </div>

      <div className="mantra-nav-footer">
        <Link to="/login">
          <button className="mantra-button mantra-primary-btn mantra-login-btn">
            Login
          </button>
        </Link>

        <div className="mantra-badge">
          {wishlistState.wishlistcount > 0 ? (
            <Link className="mantra-menu-icon" to="/wishlist">
              <span className="mantra-icon">
                <i className="fa fa-heart"></i>
                <span className="mantra-count">
                  {wishlistState.wishlistcount}
                </span>
              </span>
            </Link>
          ) : (
            <Link className="mantra-menu-icon" to="/wishlist">
              <span className="mantra-icon">
                <i className="fa fa-heart"></i>
              </span>
            </Link>
          )}
        </div>
        <div className="mantra-badge">
          {cartState.cartcount > 0 ? (
            <Link className="mantra-menu-icon" to="/cart">
              <span className="mantra-icon">
                <i className="fa fa-shopping-cart"></i>
                <span className="mantra-count">{cartState.cartcount}</span>
              </span>
              <span className="mantra-cart-button cart-button">Cart</span>
            </Link>
          ) : (
            <Link className="mantra-menu-icon" to="/cart">
              <span className="mantra-icon">
                <i className="fa fa-shopping-cart"></i>
              </span>
              <span className="mantra-cart-button cart-button">Cart</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
