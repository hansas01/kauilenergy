import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'reactstrap';
//import SubHeader from '../components/SubHeader';
import Hero from '../components/heroFrontPage';
import Featurette from '../components/featuretteFrontPage';

  const HomePage = () => {
    return (
        <Container>
            <Hero />
            <Featurette />
        </Container>
    );
};
  
  export default HomePage;
