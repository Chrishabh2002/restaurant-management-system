import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import './Login.css';  // Importing the new styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-page">
      <NavBar />
      <Container>
        <div className="login-form-container">
          <h2 className="login-title">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;