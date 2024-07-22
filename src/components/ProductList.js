// src/components/ProductList.js

import React from 'react';
import { Row, Col } from 'reactstrap';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { selectProducts } from '../features/products/productSlice';

const ProductList = () => {
  const products = useSelector(selectProducts);

  return (
    <Row>
      {products.map((product) => (
        <Col md={4} lg={3} key={product.id} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
