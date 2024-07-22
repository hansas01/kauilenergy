import { FormGroup, Label, Col, InputGroup, InputGroupText, Button } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../../utils/validateContactForm';
import '../../css/ContactForm.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values', values);
        console.log('in JSON Format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Form>
                <FormGroup row className='justify-content-center'>
                    <Col md={{ size: 10, offset: 2 }}>
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
                </FormGroup>

                <FormGroup row className='justify-content-center'>
                    <Col md={{ size: 10, offset: 2 }}>
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
                    <Col md={{ size: 10, offset: 2 }}>
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
                </FormGroup>

                <FormGroup row className='justify-content-center'>
                    <Col md={{ size: 10, offset: 2 }}>
                        <InputGroup>
                            <InputGroupText className="input-group-icon" style={{ height: 40 }}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </InputGroupText>
                            <Field
                                name='email'
                                placeholder='Correo Electronico'
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
                    <Label check md={{ size: 4, offset: 2 }}>
                        <Field
                            name='agree'
                            type='checkbox'
                            className='form-check-input'
                        />{' '}
                        Podemos contactarte?
                    </Label>
                    <Col md='4'>
                        <Field
                            name='contactType'
                            as='select'
                            className='form-control'
                        >
                            <option>Por Telefono</option>
                            <option>Por Correo</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row className='justify-content-center'>
                    <Label htmlFor='feedback' md='2'>
                        
                    </Label>
                    <Col md='10'>
                        <Field
                            name='feedback'
                            placeholder='Tu comentario o pregunta'
                            as='textarea'
                            rows='12'
                            className='form-control'
                        />
                    </Col>
                </FormGroup>

                <FormGroup row className='justify-content-center'>
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type='submit' color='outline-primary' className='m-2 rounded-pill'>
                            Enviar
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};

export default ContactForm;
