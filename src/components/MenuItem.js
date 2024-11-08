import React from 'react';
import { Card } from 'react-bootstrap';
import './MenuItem.css'; // Import the new CSS file for advanced styles

const MenuItem = ({ item }) => {
  return (
    <Card className="menu-item mb-4">
      <div className="menu-item-image-container">
        <Card.Img variant="top" src={item.image} className="menu-item-image" />
        <div className="menu-item-overlay">
          <span className="menu-item-text">Order Now</span>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="menu-item-title">{item.name}</Card.Title>
        <Card.Text className="menu-item-description">{item.description}</Card.Text>
        <Card.Text className="menu-item-price"><strong>${item.price}</strong></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MenuItem;
