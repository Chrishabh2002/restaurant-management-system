import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; // Only import what is needed
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Navbar.Brand as={Link} to="/" className="brand-logo">
        Dine<span className="logo-highlight">And</span>Delight
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/menu">Menu</Link>
          <NavDropdown title="More" id="nav-dropdown">
            <NavDropdown.Item as={Link} to="/gallery">Gallery</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/reservation">Reservation</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/order-online">Order Online</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/reviews">Reviews</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/events">Events</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/loyalty-rewards">Loyalty Rewards</NavDropdown.Item>
          </NavDropdown>
          <Link className="nav-link" to="/about-us">About Us</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </Nav>

        <div className="d-flex align-items-center">
          {!isLoggedIn ? (
            <>
              <Link className="btn btn-outline-light me-2" to="/login">Sign In</Link>
              <Link className="btn btn-primary" to="/sign-up">Sign Up</Link>
            </>
          ) : (
            <NavDropdown title="Profile" id="profile-dropdown" align="end">
              <NavDropdown.Item as={Link} to="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setIsLoggedIn(false)}>Logout</NavDropdown.Item>
            </NavDropdown>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
