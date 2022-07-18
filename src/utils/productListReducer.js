export const productListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_LIST":
      return { ...state, productList: action.payload.value };
    case "LOW":
      return {
        ...state,
        sortbyPrice: "low",
      };
    case "HIGH":
      return {
        ...state,
        sortbyPrice: "high",
      };
    case "MAX_PRICE":
      return {
        ...state,
        maxPrice: action.payload.value ? action.payload.value : 9999,
      };
    case "MIN_PRICE":
      return { ...state, minPrice: action.payload.value };
    case "RATING":
      return { ...state, ratingsort: action.payload.value };
    case "CLEAR_FILTER":
      return {
        ...state,
        minPrice: 0,
        maxPrice: 9999,
        sortbyPrice: null,
        ratingsort: 1,
        categoryFilter: [],
      };
    case "CATEGORY_FILTER":
      const isAdded = state.categoryFilter.find(
        (item) => item === action.payload.value
      );
      if (isAdded === undefined) {
        return {
          ...state,
          categoryFilter: [...state.categoryFilter, action.payload.value],
        };
      } else {
        const newCategory = state.categoryFilter.filter(
          (item) => item !== action.payload.value
        );
        return { ...state, categoryFilter: newCategory };
      }
    case "CART_UPDATE":
      return {
        ...state,
        productList: state.productList.map((item) =>
          item._id === action.payload.value
            ? { ...item, cartAdded: !item.cartAdded }
            : item
        ),
      };
    case "WISHLIST_UPDATE":
      return {
        ...state,
        productList: state.productList.map((item) =>
          item._id === action.payload.value
            ? { ...item, wishlistAdded: !item.wishlistAdded }
            : item
        ),
      };
    default:
      return state;
  }
};
