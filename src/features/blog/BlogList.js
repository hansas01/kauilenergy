import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import BlogCard from './BlogCard';
import { selectAllBlogs } from './blogsSlice';

const BlogList = () => {
    const blogs = useSelector(selectAllBlogs);

    return (
        <Row>
            {blogs.map((blog) => (
                <Col md="4" className="mb-4" key={blog.id}>
                    <BlogCard blog={blog} />
                </Col>
            ))}
        </Row>
    );
};

export default BlogList;
//this page is redundant when using the BlogFilter.js 