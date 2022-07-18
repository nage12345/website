import axios from "axios";
import React from "react";
import { useReducer, createContext, useContext, useEffect } from "react";
import {
  compose,
  dataFilterbyCategory,
  dataSortbyPrice,
  dataSortbyRating,
  filterDatabyPrice,
} from "../utils/productFilterSort";
import { productListReducer } from "../utils/productListReducer";

const ProductContext = createContext([]);
const api = "/api/products";

const ProductProvider = ({ children }) => {
  const [productListstate, productListdispatch] = useReducer(
    productListReducer,
    {
      productList: [],
      minPrice: 0,
      maxPrice: 9999,
      sortbyPrice: null,
      ratingsort: 1,
      categoryFilter: [],
    }
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(api);
        productListdispatch({
          type: "ADD_PRODUCT_LIST",
          payload: { value: response.data.products },
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const filterDataPrice = compose(
    productListstate,
    dataSortbyPrice,
    filterDatabyPrice,
    dataSortbyRating,
    dataFilterbyCategory
  );

  return (
    <ProductContext.Provider
      value={{ filterDataPrice, productListdispatch, productListstate }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductList = () => useContext(ProductContext);

export { useProductList, ProductProvider };
