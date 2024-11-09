import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Events.css'; // Custom CSS for advanced styling

const Event = ({ event }) => (
  <Card className="event-card shadow-sm">
    <Card.Body>
      <Card.Title className="event-title">{event.title}</Card.Title>
      <Card.Text className="event-description">{event.description}</Card.Text>
      <small className="event-date">{new Date(event.date).toLocaleDateString()}</small>
    </Card.Body>
  </Card>
);

const Events = () => {
  const events = [
    { title: 'Live Music Night', description: 'Enjoy live music every Friday night.', date: '2024-11-15' },
    { title: 'Food Festival', description: 'Join us for our annual food festival!', date: '2024-12-01' },
  ];

  return (
    <div className="events-page">
      <Navbar />
      <Container className="events-content">
        <h2 className="events-title">Upcoming Events</h2>
        <Row className="justify-content-center">
          {events.map((event, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Event event={event} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Events;
