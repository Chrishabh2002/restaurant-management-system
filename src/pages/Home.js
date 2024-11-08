import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Re-import Button from react-bootstrap
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';  // Import Chatbot component
import './Home.css';

// Import the image from the assets folder
import BotImage from '../assets/images/bot.png'; // Adjust the path as per your project structure

const Home = () => {
  const [showActivity, setShowActivity] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false); // State for showing the chatbot

  const handleExploreClick = () => {
    setShowActivity(!showActivity);
  };

  const handleChatbotToggle = () => {
    setShowChatbot(!showChatbot); // Toggle the chatbot visibility
  };

  return (
    <div className="page-background">
      <NavBar />
      <Container className="hero-section text-center my-5">
        <Row>
          <Col>
            <div className="hero-content">
              <h1 className="hero-title">Welcome to DineAndDelight</h1>
              <p className="hero-description">Your favorite restaurant for a delightful dining experience.</p>
              {/* "Explore Now" button remains intact */}
              <Button variant="primary" className="hero-btn" onClick={handleExploreClick}>Explore Now</Button>
            </div>
          </Col>
        </Row>
        {showActivity && (
          <Row className="mt-5">
            <Col>
              <div className="explore-activity">
                <h2>Discover Our Restaurant</h2>
                <p>Welcome to DineAndDelight, where we provide the finest dining experience. Our ambiance, service, and mouth-watering menu will surely make your time with us unforgettable.</p>
                
                <h3>Restaurant Facilities</h3>
                <ul>
                  <li>Indoor and Outdoor Seating</li>
                  <li>Private Dining Rooms</li>
                  <li>Free Wi-Fi</li>
                  <li>Delivery and Takeaway Service</li>
                  <li>Parking Space</li>
                  <li>Bar and Lounge Area</li>
                  <li>Event Hosting and Catering</li>
                </ul>

                <h3>Chat with Us!</h3>
                <p>Need assistance or have a question about our menu? Use our <strong>Chatbot</strong> to get instant help. Our chatbot can provide details about the menu, take your orders, or even help you make a reservation!</p>

                {/* Replaced "Chat with Bot" button with the image */}
                <img 
                  src={BotImage} // Use the imported image here
                  alt="Chat with Bot"
                  className="chatbot-image"
                  onClick={handleChatbotToggle} // Toggle the chatbot visibility
                  style={{ cursor: 'pointer', width: '200px', height: 'auto' }}
                />
              </div>
            </Col>
          </Row>
        )}
      </Container>

      {/* Conditionally render the chatbot */}
      {showChatbot && <Chatbot />} 

      <Footer />
    </div>
  );
};

export default Home;
