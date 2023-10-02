import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const sumTotal = (prev, next) => {
  if (prev.price) {
    return parseInt(prev.price) + parseInt(next.price);
  }
  return prev + parseInt(next.price);
};

const initialState = {
  cartItems: cartItems,
  amount: cartItems.length,
  total: cartItems.reduce((prev, next) => sumTotal(prev, next)),
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// console.log(cartSlice);
export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
