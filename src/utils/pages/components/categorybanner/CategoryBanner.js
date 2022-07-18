import React from "react";
import { Link } from "react-router-dom";
import { useCategory } from "../../context/category-context";
import { useProductList } from "../../context/product-listing-context";
import "./CategoryBanner.css";

export function CategoryBanner() {
  const { category } = useCategory();
  const { productListdispatch } = useProductList();
  const showCategoryBook = (name) => {
    productListdispatch({
      type: "CLEAR_FILTER",
    });
    productListdispatch({
      type: "CATEGORY_FILTER",
      payload: { value: name },
    });
  };
  return (
    <div>
      <div className="product-line">
        {category.map((item) => {
          return (
            <div key={item.id} className="display-image">
              <Link
                to="productlist"
                onClick={() => showCategoryBook(item.categoryName)}
              >
                <img
                  className="book-type"
                  src={item.categoryImage}
                  alt="love-story"
                />
                <div className="centered">{item.categoryName}</div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="baner">
        <Link to="/productlist">
          <img
            className="baner-image"
            src="./assets/baner.png"
            alt="baner-book"
          />
        </Link>
      </div>
    </div>
  );
}
