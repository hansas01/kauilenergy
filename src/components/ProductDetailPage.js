// src/components/ProductDetailPage.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, selectCart } from '../features/products/productSlice';
import { Button, Container, Row, Col } from 'reactstrap';
import ShoppingCart from './ShoppingCart';

const ProductDetailPage = () => {
    const { slug } = useParams();
    const id = parseInt(slug.split('-').pop()); // Extract the id from the slug
    const product = useSelector(state => state.products.products.find(p => p.id === id));
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <Container>
            <Row>
                <Col md={7}>
                    <h2>{product.name}</h2>
                    <img src={product.image} alt={product.name} className="img-fluid mb-4" />
                    <p>Precio: ${product.price}</p>
                    <p>{product.body}</p>
                    <Button className="rounded-pill" color='outline-success rounded' onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                </Col>
                <Col md={5}>
                    <ShoppingCart />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetailPage;
