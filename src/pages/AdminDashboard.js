import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Container>
        <h2 className="dashboard-title">Admin Dashboard</h2>
        <p className="dashboard-welcome">Welcome, Admin! Manage reservations, orders, and more.</p>
        <Row>
          {/* Reservation Card */}
          <Col sm={12} md={6} lg={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Reservations</Card.Title>
                <Card.Text>View and manage all reservations here.</Card.Text>
                <Button variant="primary">View Reservations</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Orders Card */}
          <Col sm={12} md={6} lg={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Orders</Card.Title>
                <Card.Text>Manage and track customer orders.</Card.Text>
                <Button variant="primary">View Orders</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Staff Management Card */}
          <Col sm={12} md={6} lg={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Staff Management</Card.Title>
                <Card.Text>Manage staff schedules and roles.</Card.Text>
                <Button variant="primary">Manage Staff</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;
