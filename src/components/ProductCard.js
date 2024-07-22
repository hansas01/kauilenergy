// src/components/ProductCard.js

import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardFooter, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'; // import usedispatch
import { addToCart } from '../features/products/productSlice';  //import addtocard action
import { slugify } from '../utils/slugify'; // Import the slugify function


const ProductCard = ({ product }) => {
    const { id, name, price, image, body } = product;
    const slug = slugify(name);
    const dispatch = useDispatch(); //dispatch hook

    const handleAddToCart = () => {
      dispatch(addToCart(product)); // dispatch the addtocart action
    };
    
  

return (
    <Card>
        <Link to={`/product/${slug}-${id}`}>
        <CardImg top width="100%" src={image} alt={name} />
        </Link>
        <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{body}</CardText>
        <CardFooter className="d-flex justify-content-between align-items-center">
                <span>${price.toFixed(2)}</span>
                <Button className="rounded-pill" color="outline-success rounded" onClick={handleAddToCart}>Add to Cart</Button>
        </CardFooter>
        </CardBody>
    </Card>
    );
};  

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
