import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css'; // Import custom CSS for advanced styling

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Navbar />
      <Container className="about-us-content">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h2 className="about-us-title">About Us</h2>
            <p className="about-us-description">
              We are a family-owned restaurant serving delicious and fresh food made from the finest ingredients.
            </p>
            <p className="about-us-description">
              Our goal is to provide a great dining experience and create lasting memories for our guests.
            </p>
          </Col>
        </Row>
        <Row className="about-us-images justify-content-center">
          <Col md={4} className="animated-image">
            <img
              src="https://th.bing.com/th/id/OIP.nThsCrAOphzOhWZXUPN3ygHaE8?rs=1&pid=ImgDetMain"
              alt="Our Team"
              className="about-image"
            />
            <p className="image-caption">Our Team</p>
          </Col>
          <Col md={4} className="animated-image">
            <img
              src="https://th.bing.com/th/id/OIP.J9Fyj3f64-Q7PrI_ChsbYAHaE7?rs=1&pid=ImgDetMain"
              alt="Our Food"
              className="about-image"
            />
            <p className="image-caption">Our Food</p>
          </Col>
          <Col md={4} className="animated-image">
            <img
              src="https://static.designmynight.com/uploads/2019/02/PJ-LivingRoom-Ours-0623-DB-optimised.jpg"
              alt="Our Restaurant"
              className="about-image"
            />
            <p className="image-caption">Our Restaurant</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUs;
