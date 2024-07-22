// src/components/CheckoutPage.js

import React, { useEffect } from 'react';
import { Container, Row, Col, Label, Progress } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart';
import ShippingForm from '../features/forms/ShippingForm';
import { selectCart } from '../features/products/productSlice'; // Import selectCart from productSlice
import '../css/CheckoutPage.css'

const CheckoutPage = () => {
    // scroll to top when page mounts
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
    
    //navigation handlers 
    const navigate = useNavigate();
    const cart = useSelector(selectCart); // Import useSelector from react-redux

    const handleShippingFormSubmit = (values) => {
        // Handle form submission, e.g., send data to an API
        console.log('Shipping Form Values:', values);
        navigate('/order', { state: { customerData: values, cart } });
        // Clear cart after checkout or perform additional actions
    };

    return (
        <Container>
            <Row> 
                <Col md={12} className="my-3">
                <Progress 
                        striped 
                        variant="primary" 
                        value={50} 
                        className="custom-progress-bar"  // Add your custom class here
                    />
                </Col>
            </Row>
            <Row>
                <Label>
                    <div className='p-5 text-center bg-body-tertiary rounded-3'> {/*this is a jumbotron*/}
                        <h1 className='fw-light'>
                            Completa tu pedido
                        </h1>
                        <p class="lead text-muted">
                            Llena el formato para terminar tu pedido. Cuando terminas te damos los detalles de pago.
                        </p>
                    </div>
                </Label>
            </Row>
            <Row>
                <Col md={7}>
                    <ShippingForm onSubmit={handleShippingFormSubmit} />
                </Col>
                <Col md={5}>
                    <ShoppingCart />
                </Col>
            </Row>
        </Container>
    );
};

export default CheckoutPage;
