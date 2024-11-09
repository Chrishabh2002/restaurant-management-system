import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ReservationForm from '../components/ReservationForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Reservation = () => {
  const handleReservationSubmit = (reservationData) => {
    // Handle reservation data (e.g., send to backend or store in state)
    console.log('Reservation submitted:', reservationData);
  };

  return (
    <div className="reservation-page">
      <Navbar />
      <Container className="reservation-content">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="reservation-card">
              <Card.Body>
                <h2 className="text-center mb-4">Make a Reservation</h2>
                <ReservationForm onSubmit={handleReservationSubmit} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Reservation;
