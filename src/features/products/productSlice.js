// src/features/products/productsSlice.js

import { createSlice } from '@reduxjs/toolkit';
import products from '../../app/assets/shared/PRODUCTS';  // Adjust the import path if necessary

const initialState = {
  products: products,  // Load products from the imported file
  cart: [],  // Initialize cart state
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const itemInCart = state.cart.find(item => item.id === product.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload.id;
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    increaseQuantity: (state, action) => {
        const product = action.payload;
        const itemInCart = state.cart.find(item => item.id === product.id);
        if (itemInCart) {
          itemInCart.quantity += 1; // Increase the quantity
        }
    },
    decreaseQuantity: (state, action) => {
        const product = action.payload;
        const itemInCart = state.cart.find(item => item.id === product.id);
        if (itemInCart && itemInCart.quantity > 1) {
          itemInCart.quantity -= 1; // Decrease the quantity only if greater than 1
        }
    }
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = productsSlice.actions;
export const selectProducts = (state) => state.products.products;
export const selectCart = (state) => state.products.cart;

export default productsSlice.reducer;
