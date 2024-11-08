import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';  // Importing the new CSS styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-section">
            <h5>About Us</h5>
            <p>At DineAndDelight, we aim to offer exceptional dining experiences with a variety of delicious meals and beverages.</p>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Contact</h5>
            <p>Email: info@dineanddelight.com</p>
            <p>Phone: 6398904235</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook-icon">F</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon">I</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter-icon">T</a>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom text-center">
          <p>&copy; 2024 DineAndDelight. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
