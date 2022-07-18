import React from "react";
import { useProductList } from "../../context/product-listing-context";
import "./bestseller.css";

export function Bestseller() {
  const { productListstate } = useProductList();

  const productList = productListstate.productList.slice(0, 2);

  return (
    <div className="footer-card">
      {productList.map(
        ({ _id, title, author, productImage, productDescription }) => {
          return (
            <div key={_id}>
              <div className="book-card">
                <div className="mantra-card-holder best-book">
                  <div className="mantra-card-holder-image">
                    <img
                      className="mantra-card-image"
                      src={productImage}
                      alt="bestseller-book"
                    />
                  </div>

                  <div className="mantra-card-holder-text text-box">
                    <h2 className="sub-head">{title}</h2>
                    <div>
                      <h4 className="sub-head">{author}</h4>
                      <p className="description">{productDescription}</p>
                    </div>
                    <div className="mantra-card-btn">
                      <button className="mantra-button mantra-primary-btn">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
