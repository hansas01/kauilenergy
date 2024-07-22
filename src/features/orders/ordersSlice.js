// src/features/orders/ordersSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addOrder } = ordersSlice.actions;

export const selectOrders = (state) => state.orders;

export default ordersSlice.reducer;
