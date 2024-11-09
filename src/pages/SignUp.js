import React, { useState } from "react";
import "./SignUp.css"; // For custom styling
import Navbar from "../components/Navbar";  // Corrected the file name
import Footer from "../components/Footer";  // Import Footer component

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, agreeToTerms: !formData.agreeToTerms });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <Navbar /> {/* Navbar is imported correctly */}
      <div className="signup-container">
        <div className="row">
          {/* Left Side - Signup Form */}
          <div className="col-md-6 signup">
            <h2 className="form-title">Hello, friend!</h2>
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

              <button type="submit" className="btn btn-primary btn-block">
                CREATE ACCOUNT
              </button>
            </form>
          </div>

          {/* Right Side - Greeting Message */}
          <div className="col-md-6 signup-greeting">
            <h2>Glad to see You!</h2>
            <p>
              We're excited to have you join our culinary family! 
              Sign up today to get exclusive updates, receive special offers, 
              and be the first to know about our latest menu items and events. Let's make your dining experience unforgettable!
            </p>
          </div>
        </div>
      </div>
      <Footer /> {/* Footer is imported correctly */}
    </div>
  );
}

export default Signup;
