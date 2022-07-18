import React from "react";
import { useCategory } from "../../context/category-context";
import { useProductList } from "../../context/product-listing-context";
import "./filterbox.css";

const ratingData = [
  { rating: 4, ratingName: "4 Stars & above" },
  { rating: 3, ratingName: "3 Stars & above" },
  { rating: 2, ratingName: "2 Stars & above" },
  { rating: 1, ratingName: "1 Stars & above" },
];
export const Filterbox = () => {
  const { category } = useCategory();
  const { productListdispatch, productListstate } = useProductList();

  return (
    <div className="filter-main">
      <div className="side-bar">
        <div className="filter-title">
          <h3 className="mantra-title">Filter</h3>
          <div
            className="clear-filter mantra-title"
            onClick={() =>
              productListdispatch({
                type: "CLEAR_FILTER",
              })
            }
          >
            Clear
          </div>
        </div>
        <div className="category-head ">
          <h3 className="mantra-title">Category</h3>
        </div>
        <div className="category-sub">
          <form>
            {category.map((item) => {
              return (
                <div key={item.id}>
                  <div className="book-filter">
                    <input
                      type="checkbox"
                      id={item.id}
                      checked={productListstate.categoryFilter.includes(
                        item.categoryName
                      )}
                      onClick={() =>
                        productListdispatch({
                          type: "CATEGORY_FILTER",
                          payload: { value: item.categoryName },
                        })
                      }
                    />
                    <label className="label-box item-font" htmlFor={item.id}>
                      {item.categoryName}
                    </label>
                  </div>
                </div>
              );
            })}
          </form>
        </div>
        {/* <!-- Price --> */}
        <div className="category-head">
          <h3 className="mantra-title">Price</h3>
        </div>
        <div className="min-max">
          <small className="mantra-title">Min</small>
          <small className="mantra-title">Max</small>
        </div>
        <div className="input-box">
          <input
            className="mantra-textbox-classic mantra-highlight-box"
            placeholder=" $499"
            value={
              productListstate.minPrice === 0
                ? undefined
                : productListstate.minPrice
            }
            onChange={(event) =>
              productListdispatch({
                type: "MIN_PRICE",
                payload: { value: event.target.value },
              })
            }
          />
          <p>_</p>
          <input
            className="mantra-textbox-classic mantra-highlight-box"
            placeholder=" $499"
            value={
              productListstate.maxPrice === 9999
                ? undefined
                : productListstate.maxPrice
            }
            onChange={(event) =>
              productListdispatch({
                type: "MAX_PRICE",
                payload: { value: event.target.value },
              })
            }
          />
        </div>

        {/* <!-- Filter by Rating --> */}
        <div className="category-head">
          <h3 className="mantra-title">Ratings</h3>
        </div>
        <div className="category-sub">
          {ratingData.map((item) => {
            return (
              <div key={item.rating} className="rating-filter">
                <input
                  type="radio"
                  id={item.ratingName}
                  name="star"
                  checked={productListstate.ratingsort === item.rating}
                  onClick={() =>
                    productListdispatch({
                      type: "RATING",
                      payload: { value: item.rating },
                    })
                  }
                />
                <label
                  className="label-box item-font"
                  htmlFor={item.ratingName}
                >
                  {item.ratingName}
                </label>
              </div>
            );
          })}
        </div>

        {/* <!-- Sort by price --> */}
        <div className="category-head">
          <h3 className="mantra-title">Sort by</h3>
        </div>

        <div className="category-sub">
          <div className="price-sort">
            <input
              type="radio"
              id="sort-high"
              name="sort"
              checked={productListstate.sortbyPrice === "low"}
              onClick={() => productListdispatch({ type: "LOW" })}
            />
            <label className="label-box item-font" htmlFor="sort-high">
              Price: Low to High
            </label>
          </div>
          <div className="price-sort">
            <input
              type="radio"
              id="sort-low"
              checked={productListstate.sortbyPrice === "high"}
              name="sort"
              onClick={() => productListdispatch({ type: "HIGH" })}
            />
            <label className="label-box item-font" htmlFor="sort-low">
              Price: High to Low
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
