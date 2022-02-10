import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {    
    addItemToCart(state, action) {
      const newItem = action.payload.item;

      const existedCartItem = state.items.find(
        (item) => item.idProductOption === newItem.idProductOption
      );

      state.totalQuantity++;

      if (!existedCartItem) {
        state.items.push({
          idProductOption: newItem.idProductOption,
          quantity: 1,
        });
      } else {
        existedCartItem.quantity++;
      }
    },
    removeItemFromCart(state, action) {
      const existedCartItem = state.items.find(
        (item) => item.idProductOption === action.payload.idProductOption
      );

      state.totalQuantity--;

      if (existedCartItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.idProductOption !== action.payload.idProductOption
        );
      } else {
        existedCartItem.quantity--;
      }
    },
    clearItemInCart(state, action) {
      state.totalQuantity = state.totalQuantity - action.payload.quantity;
      state.items = state.items.filter(
        (item) => item.idProductOption !== action.payload.idProductOption
      );
    },
    clearCart(state) {
      state.items = [];
    },
    replaceCartData(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
