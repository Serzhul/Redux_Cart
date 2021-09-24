const ADDITEM_CART = "Cart/ADDITEM_CART";
const REMOVEITEM_CART = "Cart/REMOVEITEM_CART";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADDITEM_CART: {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      return { ...state };
    }

    case REMOVEITEM_CART: {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
      return { ...state };
    }
    default:
      return state;
  }
};
