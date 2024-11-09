import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ReservationForm.css';  // Import CSS for styles

const ReservationForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationData = { name, email, date, time, partySize };
    onSubmit(reservationData); // Call the onSubmit function passed as prop
  };

  return (
    <div className="reservation-form">
      <h2 className="form-title">Make a Reservation</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Reservation Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="formTime">
          <Form.Label>Reservation Time</Form.Label>
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="formPartySize">
          <Form.Label>Party Size</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-button">
          Reserve Table
        </Button>
      </Form>
    </div>
  );
};

export default ReservationForm;
