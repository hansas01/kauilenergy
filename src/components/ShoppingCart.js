// src/components/ShoppingCart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity, selectCart } from '../features/products/productSlice';
import { Button, Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import '../css/ShoppingCart.css';


const ShoppingCart = () => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleCheckout = () => {
        navigate('/checkout'); // Navigate to the checkout page
    };

    const handleIncreaseQuantity = (product) => {
        dispatch(increaseQuantity(product));
    };

    const handleDecreaseQuantity = (product) => {
        dispatch(decreaseQuantity(product));
    };

    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h3>Shopping Cart</h3>
            <Button color="outline-danger" className='m-2 rounded-pill' onClick={handleClearCart}>Clear Cart</Button>
            <Button color="outline-primary" className='m-2 rounded-pill' onClick={handleCheckout}>Checkout</Button>
            <div className='table-responsive'>
                <Table className='ms-auto'>
                    <thead>
                        <tr>
                            <th>Articulo</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td className="item-name">{item.name}</td> {/* calling css to adjust name field size*/}
                                <td>${item.price}</td>
                                <td className="quantity-cell">  {/* calling css to make sure arrows alligned*/}
                                    <Button
                                        color="link"
                                        size="sm"
                                        onClick={() => handleDecreaseQuantity(item)}
                                        disabled={item.quantity <= 1}
                                    >
                                        <i className="bi bi-arrow-down"></i> {/* Bootstrap icon for "-" */}
                                    </Button>
                                    {' '}{item.quantity}{' '}
                                    <Button
                                        color="link"
                                        size="sm"
                                        onClick={() => handleIncreaseQuantity(item)}
                                    >
                                        <i className="bi bi-arrow-up"></i> {/* Bootstrap icon for "+" */}
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        color="link"
                                        size="sm"
                                        onClick={() => handleRemoveFromCart(item)}
                                    >
                                        <i className="bi bi-x-lg"></i> {/* Bootstrap icon for "X" */}
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <h4>Total: ${cartTotal.toFixed(2)}</h4>
        </div>
    );
};

export default ShoppingCart;
