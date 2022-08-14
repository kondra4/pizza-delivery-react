import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addPizza(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export const { addPizza } = cartSlice.actions;

export default cartSlice.reducer;
