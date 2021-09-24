const TOGGLE = "ui/toggle";

const initialState = {
  cartIsVisible: false,
};

export const ui = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        cartIsVisible: !state.cartIsVisible,
      };
    default:
      return state;
  }
};
