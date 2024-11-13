import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const DashboardData = {
  reservations: 45,
  orders: 120,
  users: 300,
  staff: 15,
};

const AdminDashboard = () => {
  console.log("Admin Dashboard Loaded");  // Check if the component is loaded

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      // Uncomment below to simulate an error
      // setError("Failed to load data.");
    }, 1500);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="admin-dashboard">
      <Container>
        <h2 className="dashboard-title">Admin Dashboard</h2>
        <Row>
          {/* Sidebar */}
          <Col sm={3} className="sidebar">
            <Nav className="flex-column">
              <Nav.Item>
                <Link to="/admin-dashboard" className="nav-link">Dashboard</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/admin-dashboard/orders" className="nav-link">Orders</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/admin-dashboard/reservations" className="nav-link">Reservations</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/admin-dashboard/users" className="nav-link">Users</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/admin-dashboard/staff" className="nav-link">Staff Management</Link>
              </Nav.Item>
            </Nav>
          </Col>

          {/* Dashboard Cards */}
          <Col sm={9}>
            <Row>
              <Col sm={12} md={6} lg={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <Card.Title>Reservations</Card.Title>
                    <Card.Text>{DashboardData.reservations} Reservations</Card.Text>
                    <Button variant="primary" as={Link} to="/admin-dashboard/reservations">
                      View Reservations
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <Card.Title>Orders</Card.Title>
                    <Card.Text>{DashboardData.orders} Orders</Card.Text>
                    <Button variant="primary" as={Link} to="/admin-dashboard/orders">
                      View Orders
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <Card.Title>Users</Card.Title>
                    <Card.Text>{DashboardData.users} Registered Users</Card.Text>
                    <Button variant="primary" as={Link} to="/admin-dashboard/users">
                      View Users
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <Card.Title>Staff</Card.Title>
                    <Card.Text>{DashboardData.staff} Staff Members</Card.Text>
                    <Button variant="primary" as={Link} to="/admin-dashboard/staff">
                      Manage Staff
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;
