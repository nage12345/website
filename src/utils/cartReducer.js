export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartData: [...state.cartData, action.payload.value],
        cartcount: state.cartcount + 1,
      };
    case "REDUCE_QUANTITY":
      return {
        ...state,
        cartData: state.cartData.map((item) =>
          item._id === action.payload.value
            ? {
                ...item,
                qty: item.qty - 1,
                totalPrice: (item.qty - 1) * item.orginalPrice,
              }
            : item
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartData: state.cartData.map((item) =>
          item._id === action.payload.value
            ? {
                ...item,
                qty: item.qty + 1,
                totalPrice: (item.qty + 1) * item.orginalPrice,
              }
            : item
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item._id !== action.payload.value
        ),
        cartcount: state.cartcount - 1,
      };
    default:
      return state;
  }
};
