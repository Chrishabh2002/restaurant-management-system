import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import './FAQ.css'; // Custom CSS for advanced styling

const FAQ = () => {
  const faqs = [
    { question: 'What are your hours?', answer: 'We are open daily from 10 AM to 10 PM.' },
    { question: 'Do you accept reservations?', answer: 'Yes, we accept reservations through our website.' },
    { question: 'Do you have vegetarian options?', answer: 'Yes, we offer a variety of vegetarian dishes.' },
    { question: 'Do you offer delivery?', answer: 'Yes, we offer delivery through major food delivery platforms.' },
  ];

  return (
    <div className="faq-page">
      <Navbar />
      <Container className="faq-content py-5">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Accordion>
              {faqs.map((faq, index) => (
                <Card key={index} className="faq-card">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={String(index)} className="faq-question">
                      {faq.question}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={String(index)}>
                    <Card.Body className="faq-answer">{faq.answer}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default FAQ;
