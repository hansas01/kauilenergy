import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { video, generalImg } from '../app/assets/shared/IMAGES'
import { Button } from 'reactstrap';

const Featurette = () => {
  return (
    <>
    <Container className="my-5">
      <Row className="featurette">
        <Col md={7}>
          <h2 className="featurette-heading fw-normal lh-1">
            Planea tu consumo energetico <span className="text-body-secondary">Protegete contra la inflación con el sol</span>
          </h2>
          <p className="lead">
            En este fraccionamiento colocaron paneles sobre su entrada para abastar el alumbrado público y la caseta de seguridad, bajando gastos a largo plazo para la gestión.
          </p>
        </Col>
        <Col md={5}>
          <div className="embed-responsive embed-responsive-16by9">
            <video  
              className="embed-responsive-item featurette-video rounded-4"
              src={video[0].src} 
              controls 
              width="500" 
              height="auto"
              loading="lazy"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
      </Row>
    </Container>
    <hr className="featurette-divider" />
    <Container className="py-5">
      <Row className="featurette">
        <Col md={7} className="order-md-2">
          <h2 className="featurette-heading fw-light">
            Planeación y analisis energético
            <span className="text-muted"> Planeamos a fondo la colocación de tus paneles para optimizar producción</span>
          </h2>
          <p className="lead text-muted">
            Para calcular tus ahorros correctamente usamos software que considera la irradiación, y la dirección en que se colocan tus paneles.
          </p>
        </Col>
        <Col md={5} className="order-md-1">
          <img 
            className="featurette-image img-fluid mx-auto rounded-4" 
            src={generalImg[1].src} 
            alt="placeholder" 
            style={{ 
                borderRadius: '0.375rem', 
                width: '100%', 
                maxWidth: '800px',
                minHeight: '300px'  // Adjust this value as needed
              }} // Optional: add rounded corners if needed
          />
        </Col>
      </Row>
    </Container>
    <hr className="featurette-divider" />
    <Container className="my-5">
      <Row className="featurette">
        <Col md={7}>
          <h2 className="featurette-heading fw-normal lh-1">
            Tenemos financiamiento <span className="text-body-secondary">¿No tienes todo el capital para invertir hoy?</span>
          </h2>
          <p className="lead">
            Tenemos acceso preferencial por medio de SOC asesores a financiamiento empresarial con Konfio para tu planta solar empresarial hasta 500kw. También contamos con financiamiento propio.
          </p>
          <Button color="btn btn-primary btn-lg rounded-pill" type="button">¡Quiero Cotizar!</Button>
        </Col>
        <Col md={5}>
          <div className="embed-responsive embed-responsive-16by9">
          <img 
            className="featurette-image img-fluid mx-auto rounded-4" 
            src={generalImg[3].src} 
            alt="placeholder" 
            style={{ 
                borderRadius: '0.375rem', 
                width: '100%', 
                maxWidth: '800px'  // Adjust this value as needed
              }} // Optional: add rounded corners if needed
          />
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Featurette;
