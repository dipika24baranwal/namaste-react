import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        //mutating state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //state.items.length = 0; // either mute existing state
      return {items: []} ; // or retirn new steate
    },
  },
});

export const { addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;