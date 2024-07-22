import React, { useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
//import SubHeader from '../components/SubHeader';
import ContactForm from '../features/forms/ContactForm';


const ContactPage = () => {
    // scroll to top when page mounts
    useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Scroll to top triggered'); // Verify if this runs
    }, []);

    return (
        <>
            {/* full width jumbotron here for contact*/}
            <Row>
                <Col>
                    <div className='py-5 text-body-emphasis bg-body-tertiary rounded-3'> {/*this is a jumbotron*/}
                        <h1 className="fw-light">
                            No pierdes nada en hablarnos
                        </h1>
                        <p className="lead text-muted">
                            Marcanos +52 777 107 5382. Escribenos a info@kauilenergy.com o llena el formulario.
                        </p>
                    </div>
                </Col>
            </Row>

            {/*
            <Container>
            <SubHeader current='Contacto' />
            </Container>
            */}
            <Container>
                <Row className='row-content'>
                    <Col md='10'>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ContactPage; 
