import React from 'react';
import { Card } from 'react-bootstrap';
import './GalleryItem.css'; // Import the new CSS file for advanced styles

const GalleryItem = ({ image, title }) => {
  return (
    <Card className="gallery-item mb-4">
      <div className="image-container">
        <Card.Img variant="top" src={image} className="gallery-image" />
        <div className="image-overlay">
          <span className="image-text"></span>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="gallery-title">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default GalleryItem;
