import React from "react";
import { useWishlist } from "../../context/wishlist-context";
import "./detailwishlist.css";
import { useProductList } from "../../context/product-listing-context";
import { useCart } from "../../context/cart-context";
export const DetailWishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { productListdispatch } = useProductList();
  const { cartDispatch } = useCart();
  const addtocart = (
    id,
    title,
    author,
    productImage,
    discountprice,
    orginalPrice,
    rating
  ) => {
    productListdispatch({ type: "CART_UPDATE", payload: { value: id } });
    wishlistDispatch({ type: "CART_IS_UPDATED", payload: { value: id } });
    cartDispatch({
      type: "ADD_TO_CART",
      payload: {
        value: {
          _id: id,
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
  };
  const removefromWishlist = (id) => {
    productListdispatch({ type: "WISHLIST_UPDATE", payload: { value: id } });
    wishlistDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: {
        value: id,
      },
    });
  };

  const reduceQuantity = (id) => {
    const data = wishlistState.wishlistData.find((item) => item._id === id);
    if (data.qty > 1) {
      cartDispatch({
        type: "REDUCE_QUANTITY",
        payload: { value: id },
      });
      wishlistDispatch({
        type: "REDUCE_QUANTITY",
        payload: { value: id },
      });
    } else {
      wishlistDispatch({ type: "CART_IS_UPDATED", payload: { value: id } });
      cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: { value: id },
      });
      productListdispatch({ type: "CART_UPDATE", payload: { value: id } });
    }
  };

  const increaseQuantity = (id) => {
    wishlistDispatch({
      type: "INCREASE_QUANTITY",
      payload: {
        value: id,
      },
    });
    cartDispatch({
      type: "INCREASE_QUANTITY",
      payload: { value: id },
    });
  };

  return (
    <div>
      <div className="wishlistbox">
        <div className="wishlist-title">
          <h3 className="item-font">
            MY WISHLIST({wishlistState.wishlistcount})
          </h3>
        </div>
        {wishlistState.wishlistcount > 0 ? (
          <div className="wishlist-card-holder">
            {wishlistState.wishlistData.map((item) => {
              return (
                <div
                  key={item._id}
                  className="mantra-vertical-card card-holder"
                >
                  <div className="mantra-icon mantra-close-icon wishlist-button">
                    <i
                      className="fas fa-heart-circle icon-size"
                      onClick={() => removefromWishlist(item._id)}
                    ></i>
                  </div>
                  <div className="mantra-card-holder-image-v">
                    <img
                      className="mantra-vert-image image-cover"
                      src={item.productImage}
                      alt={item.title}
                    />
                  </div>
                  <div className="mantra-card-holder-text-vert">
                    <div className="mantra-card-holder-text-content">
                      <h2 className="item-font">{item.title}</h2>
                      <h3 className="item-font">{item.author}</h3>
                      <div className="mantra-price-box">
                        <span className="mantra-discount item-font">
                          Rs.{item.discountprice}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mantra-card-btn">
                    {item.cartAdded ? (
                      <div className="plus-minus-input quantity-input">
                        <div className="input-group-button minus-button">
                          <button
                            type="button"
                            className="mantra-button mantra-primary-btn circle"
                            data-quantity="minus"
                            data-field="quantity"
                            onClick={() => reduceQuantity(item._id)}
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                        </div>
                        <input
                          className="mantra-textbox-classic mantra-highlight-box input-group-field"
                          type="number"
                          name="quantity"
                          value={item.qty}
                        />
                        <div className="input-group-button">
                          <button
                            type="button"
                            className="mantra-button mantra-primary-btn circle"
                            data-quantity="plus"
                            data-field="quantity"
                            onClick={() => increaseQuantity(item._id)}
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        className="mantra-button mantra-primary-btn"
                        onClick={() =>
                          addtocart(
                            item._id,
                            item.title,
                            item.author,
                            item.productImage,
                            item.discountprice,
                            item.orginalPrice,
                            item.rating
                          )
                        }
                      >
                        Move to cart
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="wishlist-message">
            <p className="item-font cart-item-align ">No item in Wishlist</p>
          </div>
        )}
      </div>
    </div>
  );
};
