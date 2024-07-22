import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cart, removeFromCart, clearCart, total } = useContext(CartContext);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
            <h3>Total: ${total}</h3>
        </div>
    );
};

export default Cart;
