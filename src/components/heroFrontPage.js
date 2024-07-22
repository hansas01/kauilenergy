// src/components/Hero.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { generalImg } from '../app/assets/shared/IMAGES';


const Hero = () => {
  return (
    
    <div className="px-4 pt-5 my-5 text-center ">
      <Container>
        <h1 className="display-4 fw-bold text-body-emphasis">Paneles solares para manufactura, agricultura y comercio.</h1>
        <Row className="justify-content-center">
          <Col lg={6}>
            <p className="lead mb-4">
              Diseñamos, financiamos e instalamas soluciones fotovoltaícas para organizaciones con alto de electricidad, dano ahorros mayores en sus gastos energeticos. Además, construimos residencias con una solución de almacenaje de electricidad.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <Button variant="primary" size="lg" className="px-4 me-sm-3 rounded-pill">Cotiza planta solar</Button>
              <Button variant="outline-secondary" size="lg" className="px-4 rounded-pill">Explorar Casa Kauil</Button>
            </div>
          </Col>
        </Row>
        <div className="overflow-hidden" style={{ maxHeight: '40vh' }}>
          <Container className="px-4">
            <img 
              src={generalImg[0].src}   
              className="img-fluid border rounded-3 mb-4" 
              alt="Example image" 
              style={{ width: '100%', height: 'auto' }}  
              loading="lazy" 
            />
          </Container>
        </div>
      </Container>
      <hr className="featurette-divider" />
    </div>
    
  );
};

export default Hero;
