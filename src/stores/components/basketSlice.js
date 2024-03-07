import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action) {
      state.basket.push(action.payload);
    },
    deleteItem(state, action) {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.basket.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItemQuantity(state, action) {
      const item = state.basket.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      if (item.quantity === 0)
        state.basket = state.basket.filter(
          (item) => item.id !== action.payload,
        );
    },
    clearBasket(state) {
      state.basket = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearBasket,
} = basketSlice.actions;

export default basketSlice.reducer;

export const getCurrentQuantity = (id) => (state) =>
  state.basket.basket.find((item) => item.id === id)?.quantity ?? 0;
