import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./SignUp.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
    role: "user",
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, agreeToTerms: !formData.agreeToTerms });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    console.log("Form submitted with data:", formData);

    // Redirect to login page immediately after the form is submitted
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="signup-page">
      <Navbar />
      <Container className="signup-content">
        <Row className="justify-content-center">
          {/* Left Side - Signup Form */}
          <Col md={6} className="signup-form">
            <h2 className="form-title text-center">Hello, friend!</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">Account Type</label>
                <select
                  className="form-control"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                >
                  <option value="user">Normal User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  checked={formData.agreeToTerms}
                  onChange={handleCheckboxChange}
                  required
                />
                <label className="form-check-label" htmlFor="terms">
                  I accept the Terms & Conditions
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mt-3">
                CREATE ACCOUNT
              </button>
            </form>
          </Col>

          {/* Right Side - Greeting Message */}
          <Col md={6} className="signup-greeting text-center">
            <h2>Glad to see You!</h2>
            <p>
              We're excited to have you join our culinary family! Sign up today
              to get exclusive updates, receive special offers, and be the first
              to know about our latest menu items and events. Let's make your
              dining experience unforgettable!
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Signup;
