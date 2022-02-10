import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    open(state) {
      state.showCart = true;
    },
    close(state) {
      state.showCart = false;
    },
    addItemToCart(state, action) {
      const existedCartItemIndex = state.items.findIndex(
        (item) => item.idProductOption === action.payload.item.idProductOption
      );

      const existedCartItem = state.items[existedCartItemIndex];

      let updatedItems;

      if (existedCartItem) {
        const updatedItem = {
          ...existedCartItem,
          quantity: existedCartItem.quantity + 1,
        };
        updatedItems = [...state.items];
        updatedItems[existedCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload.item);
      }

      state.items = updatedItems;
    },
    removeItemFromCart(state, action) {
      const existedCartItemIndex = state.items.findIndex(
        (item) => item.idProductOption === action.payload.idProductOption
      );

      const existedCartItem = state.items[existedCartItemIndex];

      let updatedItems;

      if (existedCartItem.quantity === 1) {
        updatedItems = state.items.filter(
          (item) => item.idProductOption !== action.payload.idProductOption
        );
        console.log(state.items.length);
      } else {
        const updatedItem = {
          ...existedCartItem,
          quantity: existedCartItem.quantity - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existedCartItemIndex] = updatedItem;
      }

      state.items = updatedItems;
    },
    clearItemInCart(state, action) {
      let updatedItems;

      updatedItems = state.items.filter(
        (item) => item.idProductOption !== action.payload.idProductOption
      );

      state.items = updatedItems;
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
