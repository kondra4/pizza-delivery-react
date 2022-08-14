import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: {},
};

const filterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export const { addPizza } = filterSlice.actions;

export default filterSlice.reducer;
