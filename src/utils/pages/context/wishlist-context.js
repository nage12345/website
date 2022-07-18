import { createContext, useContext, useReducer } from "react";
import React from "react";
import { wishlistReducer } from "../utils/wishlistReducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlistData: [],
    wishlistcount: 0,
  });
  console.log(wishlistState.wishlistData);
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
