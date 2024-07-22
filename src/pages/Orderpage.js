// src/components/OrderPage.js

import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { useLocation } from 'react-router-dom';

const OrderPage = () => {
    const location = useLocation();
    const { customerData, cart } = location.state || {};

    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <Container>
            <Row>
                <Col md={12} className="my-3">
                    <h1>Order Details</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h3>Customer Information</h3>
                    <p><strong>Name:</strong> {customerData.name}</p>
                    <p><strong>Email:</strong> {customerData.email}</p>
                    <p><strong>Address:</strong> {customerData.address}</p>
                    <p><strong>City:</strong> {customerData.city}</p>
                    <p><strong>State:</strong> {customerData.state}</p>
                    <p><strong>Zip:</strong> {customerData.zip}</p>
                </Col>
                <Col md={6}>
                    <h3>Order Summary</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h4>Total: ${cartTotal.toFixed(2)}</h4>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderPage;
