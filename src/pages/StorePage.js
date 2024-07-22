// src/pages/StorePage.js

import React from 'react';
import { Container } from 'reactstrap';
import ProductList from '../components/ProductList';

const StorePage = () => {
  return (
    <Container>
      <h1 className="my-4">Store</h1>
      <ProductList />
    </Container>
  );
};

export default StorePage;
