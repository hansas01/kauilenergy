import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { selectAllBlogs } from './blogsSlice';
import BlogCard from './BlogCard';

const BlogFilter = () => {
    const blogs = useSelector(selectAllBlogs);
    const [categoryFilter, setCategoryFilter] = useState("All");

    // Filter function based on category
    const filteredBlogs = categoryFilter === "All"
        ? blogs
        : blogs.filter(blog => blog.category === categoryFilter);

    return (
        <div>
            <div className="mb-4">
                {/* Buttons for category filtering */}
                
                <button className="btn btn-secondary me-2 rounded-pill m-2" onClick={() => setCategoryFilter("All")}>Todo</button>
                <button className="btn btn-secondary me-2 rounded-pill m-2" onClick={() => setCategoryFilter("Salud")}>Salud</button>
                <button className="btn btn-secondary me-2 rounded-pill m-2" onClick={() => setCategoryFilter("Construcción")}>Construcción</button>
                <button className="btn btn-secondary me-2 rounded-pill m-2" onClick={() => setCategoryFilter("Automotriz")}>Automotriz</button>
                <button className="btn btn-secondary me-2 rounded-pill m-2" onClick={() => setCategoryFilter("Energía")}>Energía</button>
                <button className="btn btn-secondary me-2 rounded-pill m-2" onClick={() => setCategoryFilter("Alimentación")}>Alimentación</button>
                <button className="btn btn-secondary me-2 rounded-pill m-2" onClick={() => setCategoryFilter("Comercio")}>Comercio</button>
            </div>
            <Row>
                {/* Mapping through filtered blogs and rendering BlogCard for each */}
                {filteredBlogs.map(blog => (
                    <Col md="4" className="mb-4" key={blog.id}>
                        <BlogCard blog={blog} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default BlogFilter;
