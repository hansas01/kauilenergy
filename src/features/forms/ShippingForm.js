// src/components/ShippingForm.js

import React from 'react';
import { Button, Col, FormGroup, InputGroup, InputGroupText } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart } from '../../features/products/productSlice';
import { addOrder } from '../../features/orders/ordersSlice';
import '../../css/ShippingForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faCode, faCity, faPhone, faEnvelope, fa9 } from '@fortawesome/free-solid-svg-icons';

const ShippingForm = ({ onSubmit }) => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        // Create a new order object
        const newOrder = {
            ...values,
            cartItems: cart,
            orderDate: new Date().toISOString(),
        };

        // Dispatch the addOrder action to add the new order to the Redux store
        dispatch(addOrder(newOrder));

        // Call the onSubmit prop function
        onSubmit(values);
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                street: '',
                houseNumber: '',
                zipCode: '',
                state: '',
                phoneNum: '',
                email: ''
            }}
            onSubmit={handleSubmit}
            validate={(values) => {
                const errors = {};
                if (!values.firstName) errors.firstName = 'Required';
                if (!values.lastName) errors.lastName = 'Required';
                if (!values.street) errors.street = 'Required';
                if (!values.houseNumber) errors.houseNumber = 'Required';
                if (!values.zipCode) errors.zipCode = 'Required';
                if (!values.state) errors.state = 'Required';
                if (!values.phoneNum) errors.phoneNum = 'Required';
                if (!values.email) errors.email = 'Required';
                return errors;
            }}
        >
            <Form>
                <FormGroup row className='justify-content-center'>
                    <Col md='6'>
                        <InputGroup>
                            <InputGroupText className="input-group-icon" style={{ height: 40 }}>
                                <FontAwesomeIcon icon={faUser} />
                            </InputGroupText>
                            <Field
                                name='firstName'
                                placeholder='Primer Nombre'
                                className='form-control'
                                style={{ height: 40 }}
                            />
                        </InputGroup>
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                    <Col md='6'>
                        <InputGroup>
                            <InputGroupText className="input-group-icon" style={{ height: 40 }}>
                                <FontAwesomeIcon icon={faUser} />
                            </InputGroupText>
                            <Field
                                name='lastName'
                                placeholder='Apellido'
                                className='form-control'
                                style={{ height: 40 }}
                            />
                        </InputGroup>
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row className='justify-content-center'>
                    <Col md='8'>
                        <InputGroup>
                            <InputGroupText className="input-group-icon" style={{ height: 40 }}>
                                <FontAwesomeIcon icon={faHome} />
                            </InputGroupText>
                            <Field
                                name='street'
                                placeholder='Calle'
                                className='form-control'
                                style={{ height: 40 }}
                            />
                        </InputGroup>
                        <ErrorMessage name='street'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                    <Col md='4'>
                        <InputGroup>
                            <InputGroupText className="input-group-icon" style={{ height: 40 }}>
                                <FontAwesomeIcon icon={fa9} />
                            </InputGroupText>
                            <Field
                                name='houseNumber'
                                placeholder='Número de Casa'
                                className='form-control'
                                style={{ height: 40 }}
                            />
                        </InputGroup>
                        <ErrorMessage name='houseNumber'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row className='justify-content-center'>
                    <Col md='6'>
                        <InputGroup>
                            <InputGroupText className="input-group-icon" style={{ height: 40 }}>
                                <FontAwesomeIcon icon={faCode} />
                            </InputGroupText>
                            <Field
                                name='zipCode'
                                placeholder='Código Postal'
                                className='form-control'
                                style={{ height: 40 }}
                            />
                        </InputGroup>
                        <ErrorMessage name='zipCode'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                    <Col md='6'>
                        <InputGroup>
                            <InputGroupText className="input-group-icon" style={{ height: 40 }}>
                                <FontAwesomeIcon icon={faCity} />
                            </InputGroupText>
                            <Field
                                name='state'
                                placeholder='Estado'
                                className='form-control'
                                style={{ height: 40 }}
                            />
                        </InputGroup>
                        <ErrorMessage name='state'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row className='justify-content-center'>
                    <Col md='6'>
                        <InputGroup>
                            <InputGroupText className="input-group-icon" style={{ height: 40 }}>
                                <FontAwesomeIcon icon={faPhone} />
                            </InputGroupText>
                            <Field
                                name='phoneNum'
                                placeholder='Teléfono'
                                className='form-control'
                                style={{ height: 40 }}
                            />
                        </InputGroup>
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                    <Col md='6'>
                        <InputGroup>
                            <InputGroupText className="input-group-icon" style={{ height: 40 }}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </InputGroupText>
                            <Field
                                name='email'
                                placeholder='Correo Electrónico'
                                className='form-control'
                                style={{ height: 40 }}
                            />
                        </InputGroup>
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row className='justify-content-center'>
                    <Col md={{ size: 10, offset: 1 }}>
                    <div className="d-grid gap-2">
                        <Button type='submit' color='success' className='m-2 rounded-pill' size='lg'>
                            Crear pedido
                        </Button>
                    </div>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};

export default ShippingForm;
