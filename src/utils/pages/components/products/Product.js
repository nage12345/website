import { useProductList } from "../../context/product-listing-context";
import React from "react";
import "./product.css";
import { useCart } from "../../context/cart-context";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";

export const Products = () => {
  const { filterDataPrice, productListdispatch } = useProductList();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const exists = (id) =>
    wishlistState.wishlistData.findIndex((obj) => obj._id === id);

  const existsinCart = (id) =>
    cartState.cartData.findIndex((obj) => obj._id === id);
  const addtoCart = (
    _id,
    title,
    author,
    productImage,
    discountprice,
    orginalPrice,
    rating
  ) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: {
        value: {
          _id,
          title,
          author,
          productImage,
          discountprice,
          orginalPrice,
          qty: 1,
          rating,
          totalPrice: orginalPrice,
        },
      },
    });
    productListdispatch({ type: "CART_UPDATE", payload: { value: _id } });

    let itemIndex = exists(_id);
    if (itemIndex !== -1) {
      wishlistDispatch({ type: "CART_IS_UPDATED", payload: { value: _id } });
    }
  };

  const addtoWishlist = (
    _id,
    title,
    author,
    productImage,
    discountprice,
    orginalPrice,
    rating,
    cartAdded
  ) => {
    const itemindex = existsinCart(_id);
    if (itemindex !== -1) {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: {
          value: {
            _id,
            title,
            author,
            productImage,
            discountprice,
            orginalPrice,
            rating,
            cartAdded,
            qty: 1,
          },
        },
      });
    } else {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: {
          value: {
            _id,
            title,
            author,
            productImage,
            discountprice,
            orginalPrice,
            rating,
            cartAdded,
          },
        },
      });
    }

    productListdispatch({ type: "WISHLIST_UPDATE", payload: { value: _id } });
  };

  const removefromWishlist = (_id) => {
    productListdispatch({ type: "WISHLIST_UPDATE", payload: { value: _id } });
    wishlistDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: {
        value: _id,
      },
    });
  };
  return (
    <div className="product-page">
      <div className="product-page-title">
        <h3 className="item-font">Showing Products</h3>
      </div>
      {/* <!-- Listing --> */}
      <div className="book-card-holder">
        {filterDataPrice.map(
          ({
            _id,
            title,
            author,
            productImage,
            discountprice,
            orginalPrice,
            rating,
            cartAdded,
            wishlistAdded,
          }) => {
            return (
              <div key={_id} className="mantra-vertical-card card-holder">
                <div className="mantra-icon mantra-close-icon">
                  {wishlistAdded ? (
                    <i
                      className="fas fa-heart-circle icon-size"
                      id="wishlist"
                      onClick={() => removefromWishlist(_id)}
                    ></i>
                  ) : (
                    <i
                      className="fas fa-heart-circle icon-size"
                      onClick={() =>
                        addtoWishlist(
                          _id,
                          title,
                          author,
                          productImage,
                          discountprice,
                          orginalPrice,
                          rating,
                          cartAdded
                        )
                      }
                    ></i>
                  )}
                </div>

                <div className="mantra-card-holder-image-v">
                  <img
                    className="mantra-vert-image image-cover"
                    src={productImage}
                    alt="book-baner"
                  />
                </div>
                <div className="mantra-card-holder-text-vert">
                  <div className="mantra-card-holder-text-content">
                    <h2 className="item-font">{title}</h2>
                    <h3 className="item-font">{author}</h3>
                    <div className="mantra-price-box">
                      <span className="mantra-discount">
                        Rs.{discountprice}
                      </span>
                      <span className="mantra-original">Rs.{orginalPrice}</span>
                      <div className="rating-color item-font mantra-icon">
                        {rating}
                        <i
                          className="fa fa-star icon-font"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                {cartAdded ? (
                  <div className="mantra-card-btn button-add">
                    <Link to="/cart">
                      <button className="mantra-button mantra-primary-btn">
                        Go to Cart
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="mantra-card-btn button-add">
                    <button
                      className="mantra-button mantra-primary-btn"
                      onClick={() =>
                        addtoCart(
                          _id,
                          title,
                          author,
                          productImage,
                          discountprice,
                          orginalPrice,
                          rating
                        )
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
