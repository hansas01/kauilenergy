// store.js
import { configureStore } from '@reduxjs/toolkit';
//import rootReducer from './rootReducer';
import blogsReducer from '../features/blog/blogsSlice';
import productsReducer from '../features/products/productSlice';
import ordersReducer from '../features/orders/ordersSlice';


export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    products: productsReducer,
    orders: ordersReducer,

  },
});

export default store;