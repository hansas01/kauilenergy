/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../features/products/productSlice';
import { Button } from 'reactstrap';

const ProductDetailPage = () => {
    const product = useSelector(state => state.products.selectedProduct);
    const cart = useSelector(state => state.products.cart);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    if (!product) {
        return <div>Select a product to see the details</div>;
    }

    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>Precio: ${product.price}</p>
            <p>{product.body}</p>
            <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            <Button color="danger" onClick={handleClearCart}>Clear Cart</Button>

            <h3>Shopping Cart</h3>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <Button color="danger" size="sm" onClick={() => handleRemoveFromCart(item)}>
                            Remove
                        </Button>
                    </li>
                ))}
            </ul>
            <h4>Total: ${cartTotal}</h4>
        </div>
    );
};

export default ProductDetailPage;*/