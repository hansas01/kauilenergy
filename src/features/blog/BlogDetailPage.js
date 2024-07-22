// src/pages/BlogDetailPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { selectAllBlogs } from '../blog/blogsSlice';
import '../../css/blog.css'; //this to place the text correctly, including the image
import { formatDateToEsMX } from '../../utils/dateUtils'; // Import the utility function make sure date format is right

const BlogDetailPage = () => {
    const { blogSlug } = useParams();
    const blogs = useSelector(selectAllBlogs);

    // Extract ID from the slug, that is, extract ID from the URL after the - 
    const blogId = blogSlug.split('-').pop();
    const blog = blogs.find(blog => blog.id === parseInt(blogId, 10));

    // return blog not found if it doesnt exist
    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <Container>
            {/*<SubHeader current={blog.title} detail={true} />*/}
            <Row>
                <Col md={{ size: 8, offset: 2 }}>
                    <article className="blog-post">
                        <img src={blog.image} alt={blog.title} className="img-fluid mb-4" />
                        <p className="blog-post-meta">
                            {formatDateToEsMX(blog.date)} 
                            <br/ >
                            Autor: {blog.author}
                        </p>
                        <div dangerouslySetInnerHTML={{ __html: blog.body }}></div> {/*adjust the body of the text in the BLOGPOST.js format*/}
                    </article>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogDetailPage;
