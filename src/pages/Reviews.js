import React, { useState } from 'react';
import { Container, Row, Col, Card, Fade } from 'react-bootstrap';
import Navbar from '../components/Navbar';  // Assuming Navbar component exists
import Footer from '../components/Footer';  // Assuming Footer component exists
import './Reviews.css';


const Review = ({ review }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Fade in={true} timeout={500}>
      <Card
        className={`review ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease' }}
      >
        <Card.Body>
          <Card.Title>{review.name}</Card.Title>
          <Card.Text>{review.text}</Card.Text>
          <Card.Footer className="text-muted">{review.date}</Card.Footer>
        </Card.Body>
      </Card>
    </Fade>
  );
};

const Reviews = () => {
  const reviews = [
    { name: 'John Doe', text: 'Great food and service!', date: '2024-11-01' },
    { name: 'Jane Smith', text: 'Loved the ambiance and the food was amazing!', date: '2024-10-25' },
    { name: 'Michael Johnson', text: 'The best dining experience I’ve had in years!', date: '2024-10-20' },
    { name: 'Emily Davis', text: 'Fantastic food, will definitely come back!', date: '2024-09-15' },
  ];

  return (
    <div className="reviews-page">
      <Navbar />
      <Container className="reviews-content">
        <h2 className="text-center mb-5">Customer Reviews</h2>
        <Row className="justify-content-center">
          {reviews.map((review, index) => (
            <Col sm={12} md={6} lg={4} key={index} className="mb-4">
              <Review review={review} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Reviews;
