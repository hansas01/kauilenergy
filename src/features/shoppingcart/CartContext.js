import React, { createContext, useReducer, useMemo } from 'react';
import cartReducer from './cartReducer';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const addToCart = item => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeFromCart = item => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const total = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price, 0);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
