import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../css/blog.css'
import { slugify } from '../../utils/slugify';
import { formatDateToEsMX } from '../../utils/dateUtils'; // Import the utility function


const BlogCard = ({ blog }) => {
  const { id, title, summary, author, date, image } = blog;
  const slug = slugify(title);

  // Function to truncate title if it's too long
  const truncateTitle = (title, maxLength) => {
      if (title.length > maxLength) {
          return title.slice(0, maxLength) + '...';
      } else {
          return title;
      }
  };

  return (
        <Link to={`/Blog/${slug}-${id}`} className="blog-card-link">
          <Card className="blog-card">
              <CardImg top width="100%" src={image} alt={title} className="blog-card-image"/>
              <CardBody>
                  <CardTitle tag="h5" className="blog-card-title">{truncateTitle(title, 30)}</CardTitle>
                  <CardText className="blog-card-summary">{summary}</CardText>
                  <small className="text-muted blog-card-details">{author} - {formatDateToEsMX(blog.date)}</small>
              </CardBody>
          </Card>
      </Link>
  );
};

export default BlogCard;
