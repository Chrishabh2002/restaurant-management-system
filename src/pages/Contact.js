import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css'; // Import custom CSS for styling

const Contact = () => {
  return (
    <div className="contact-page">
      <NavBar />
      <Container>
        <h2 className="section-title my-4">Contact Us</h2>
        <Row>
          <Col md={6} className="contact-info">
            <h4>Contact Info</h4>
            <p>Phone: 6398904235</p>
            <p>Email: info@dineanddelight.com</p>
            <p>Address: 123 Restaurant St, Noida, India</p>
          </Col>
          <Col md={6} className="contact-form">
            <h4>Send a Message</h4>
            <form>
              <input type="text" placeholder="Name" className="form-control mb-3" />
              <input type="email" placeholder="Email" className="form-control mb-3" />
              <textarea placeholder="Message" className="form-control mb-3"></textarea>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
