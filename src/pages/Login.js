import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Form, Button, Container } from "react-bootstrap";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [userType, setUserType] = useState("Normal");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    if (userType === "Admin") {
      // Check admin credentials
      if (email === "admin@example.com" && password === "admin123") {
        localStorage.setItem("isAdminAuthenticated", "true");
        alert("Admin logged in successfully");
        navigate("/admin"); // Redirect to Admin Dashboard
      } else {
        alert("Invalid admin credentials");
      }
    } else {
      // Handle normal user login
      console.log("Logged in as normal user:", { email, password, rememberMe });
      localStorage.setItem("isNormalUserAuthenticated", "true");
      navigate("/."); // Redirect to Normal User Dashboard
    }
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
                className="form-control"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicUserType">
              <Form.Label>Select Login Type</Form.Label>
              <Form.Control
                as="select"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="Normal">Normal User</option>
                <option value="Admin">Admin</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Remember me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="login-btn">
              Login
            </Button>
          </Form>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
