const ADD_CART = "product/ADD_CART";

const initialState = {
  products: [],
};

export const product = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return state;
    default:
      return state;
  }
};
