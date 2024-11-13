// src/pages/Admin/Orders.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AdminNavbar from '../../components/AdminNavbar';  // Correct import path
import AdminFooter from '../../components/AdminFooter'; // Correct import path
import './Orders.css'; // Add custom styling for the Orders page

const Orders = () => {
  // Example data for orders (this can be dynamic from an API in a real app)
  const orders = [
    { id: 1, customer: 'John Doe', status: 'Pending', amount: '$100' },
    { id: 2, customer: 'Jane Smith', status: 'Completed', amount: '$200' },
    { id: 3, customer: 'David Lee', status: 'Pending', amount: '$150' },
    { id: 4, customer: 'Emily Davis', status: 'Completed', amount: '$120' },
  ];

  return (
    <div className="orders-page">
      <AdminNavbar /> {/* Include Navbar */}
      
      <Container className="my-5">
        <h2 className="page-title">Manage Orders</h2>
        <p className="text-center mb-4">Here you can manage and view all customer orders.</p>
        
        <Row>
          {orders.map((order) => (
            <Col key={order.id} sm={12} md={6} lg={3} className="mb-4">
              <Card className="order-card">
                <Card.Body>
                  <Card.Title>Order #{order.id}</Card.Title>
                  <Card.Text><strong>Customer:</strong> {order.customer}</Card.Text>
                  <Card.Text><strong>Status:</strong> {order.status}</Card.Text>
                  <Card.Text><strong>Amount:</strong> {order.amount}</Card.Text>
                  <Button variant="primary">View Order</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <AdminFooter /> {/* Include Footer */}
    </div>
  );
};

export default Orders;
