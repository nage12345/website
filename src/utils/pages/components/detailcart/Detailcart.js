import React from "react";
import { useCart } from "../../context/cart-context";
import { useProductList } from "../../context/product-listing-context";
import "./detailcart.css";
import { useWishlist } from "../../context/wishlist-context";

export const Detailcart = () => {
  const { cartState, cartDispatch } = useCart();
  const { productListdispatch } = useProductList();
  const { wishlistState, wishlistDispatch } = useWishlist();
  console.log(cartState.cartData);
  const exists = (id) =>
    wishlistState.wishlistData.findIndex((obj) => obj._id === id);
  const totalCostCal = () => {
    return cartState.cartData.reduce((acc, curr) => {
      return (acc += curr.totalPrice);
    }, 0);
  };

  const discountCostCal = () => {
    return cartState.cartData.reduce((acc, curr) => {
      return (acc += (curr.orginalPrice - curr.discountprice) * curr.qty);
    }, 0);
  };

  const removeFromCart = (id) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: { value: id },
    });

    productListdispatch({ type: "CART_UPDATE", payload: { value: id } });

    let itemIndex = exists(id);

    if (itemIndex !== -1) {
      wishlistDispatch({ type: "CART_IS_UPDATED", payload: { value: id } });
    }
  };

  const movetoWishlist = (
    id,
    title,
    author,
    productImage,
    discountprice,
    orginalPrice,
    rating
  ) => {
    let itemIndex = exists(id);
    if (itemIndex === -1) {
      productListdispatch({
        type: "WISHLIST_UPDATE",
        payload: { value: id },
      });
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: {
          value: {
            _id: id,
            title,
            author,
            productImage,
            discountprice,
            orginalPrice,
            rating,
            cartAdded: false,
          },
        },
      });
    }
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: { value: id },
    });
    productListdispatch({ type: "CART_UPDATE", payload: { value: id } });
  };

  const reduceQuantity = (id) => {
    const data = cartState.cartData.find((item) => item._id === id);
    if (data.qty > 1) {
      cartDispatch({
        type: "REDUCE_QUANTITY",
        payload: { value: id },
      });
      let itemIndex = exists(id);
      if (itemIndex !== -1) {
        wishlistDispatch({
          type: "REDUCE_QUANTITY",
          payload: { value: id },
        });
      }
    } else {
      removeFromCart(id);
    }
  };

  const increaseQuantity = (id) => {
    cartDispatch({
      type: "INCREASE_QUANTITY",
      payload: { value: id },
    });

    let itemIndex = exists(id);
    if (itemIndex !== -1) {
      wishlistDispatch({
        type: "INCREASE_QUANTITY",
        payload: { value: id },
      });
    }
  };

  return (
    <div>
      <div className="cart-container">
        <div className="cart-title">
          <h3 className="item-font">MY CART ({cartState.cartcount})</h3>
        </div>
        <div className="cart-box">
          <div className="cart-item-box">
            {cartState.cartData.map(
              ({
                _id,
                title,
                productImage,
                discountprice,
                orginalPrice,
                qty,
                rating,
                author,
              }) => {
                return (
                  <div key={_id} className="mantra-card-holder cart-product">
                    <div className="mantra-card-holder-image">
                      <img
                        className="mantra-card-image"
                        src={productImage}
                        alt="cart-product"
                      />
                    </div>

                    <div className="mantra-card-holder-text">
                      <h3 className="item-font">{title}</h3>
                      <div className="price">
                        <span className="mantra-discount">
                          Rs.{discountprice}
                        </span>
                        <span className="mantra-original">
                          Rs.{orginalPrice}
                        </span>
                      </div>
                      {/* <!-- Plus minus button --> */}

                      <div className="plus-minus-input">
                        <h5 className="item-font">Quantity:</h5>
                        <div className="input-group-button minus-button">
                          <button
                            type="button"
                            className="mantra-button mantra-primary-btn circle"
                            data-quantity="minus"
                            data-field="quantity"
                            onClick={() => reduceQuantity(_id)}
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                        </div>
                        <input
                          className="mantra-textbox-classic mantra-highlight-box input-group-field"
                          type="number"
                          name="quantity"
                          value={qty}
                        />
                        <div className="input-group-button">
                          <button
                            type="button"
                            className="mantra-button mantra-primary-btn circle"
                            data-quantity="plus"
                            data-field="quantity"
                            onClick={() => increaseQuantity(_id)}
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>

                      <div className="mantra-card-btn order-btn">
                        <button
                          className="mantra-button mantra-primary-btn btn-space"
                          onClick={() => removeFromCart(_id)}
                        >
                          Remove from Cart
                        </button>
                        <button
                          className="mantra-button mantra-primary-btn"
                          onClick={() =>
                            movetoWishlist(
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
                          Move to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          {/* <!-- Order Details --> */}
          <div className="price-detail">
            <div className="mantra-text-card price-detail-box">
              {cartState.cartcount > 0 ? (
                <div>
                  <h3 className="item-font">Price Details</h3>

                  <hr />
                  <div className="price-breakup">
                    <p className="item-font">Price</p>
                    <p className="item-font">Rs. {`${totalCostCal()}`}</p>
                  </div>
                  <div className="price-breakup">
                    <p className="item-font">Discount</p>
                    <p className="item-font">- Rs. {`${discountCostCal()}`}</p>
                  </div>
                  <div className="price-breakup">
                    <p className="item-font">Delivery Charges</p>
                    <p className="item-font">Rs. 60</p>
                  </div>
                  <hr />
                  <div className="price-breakup">
                    <h3 className="item-font">TOTAL AMOUNT</h3>
                    <h3 className="item-font">
                      Rs. {`${totalCostCal() - discountCostCal() + 60}`}
                    </h3>
                  </div>
                  <hr />
                  <div className="price-breakup">
                    <p className="item-font">
                      You will save Rs. {`${discountCostCal()}`} on this order
                    </p>
                  </div>
                  <div className="price-breakup">
                    <button className="mantra-button mantra-primary-btn">
                      Place Order
                    </button>
                  </div>
                </div>
              ) : (
                <p className="item-font cart-item-align">No item in cart</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
