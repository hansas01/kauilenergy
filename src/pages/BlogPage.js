import React from 'react';
import { Container, Row, Col } from 'reactstrap'; // Import necessary components from Reactstrap
import BlogFilter from '../features/blog/BlogFilter';
import '../css/blog.css'

const BlogPage = () => {
    return (

        <section className="py-5 text-center container">
            <div className="row py-lg-1">
                <div className="col-lg-12 col-md-8 mx-auto">
                    <h1 className="fw-light">Aprende sobre aplicaciones solares</h1> {/* Heading for the section */}
                    <p className="lead text-muted">Explora nuestros artículos sobre aplicaciones solares y descubre cómo la energía solar está transformando diversas industrias en México.</p> {/* Lead paragraph */}
                </div>
                    <div className='album py-5 bg-body tertiary'>
                        <Container>
                            <Row>
                                <Col>
                                    <BlogFilter /> {/* Render BlogFilter component */}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
        </section>
    );
};

export default BlogPage;
