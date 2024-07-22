import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const FeatureGrid = () => {
  const items = [
    { icon: 'fas fa-bed', text: '2 dormitorios, walkin closet' },
    { icon: 'fas fa-toilet', text: '2 baños, 1 medio baño' },
    { icon: 'fas fa-parking', text: '2 cajones' },
    { icon: 'fas fa-chart-area', text: '120m2 construido, terreno 230m2' },
    { icon: 'fas fa-location-pin', text: 'Residencial Los Olivos, Atlatlaucan, Morelos' },
    { icon: 'fas fa-bolt', text: '110v y 220v' },
    { icon: 'fas fa-person-swimming', text: 'Alberca' },
    { icon: 'fas fa-calendar', text: 'Tu decides cuando construir' },
    { icon: 'fas fa-stairs', text: '1 piso' }
  ];

  return (
    <Container className="my-5">
      <Row>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Col xs="6" md="1" className="d-flex  align-items-center mb-4">
              <i className={`${item.icon} fa-2x`}></i>
            </Col>
            <Col xs="6" md="3" className="d-flex align-items-center mb-4">
              <p className="m-0 text-start">{item.text}</p>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureGrid;
