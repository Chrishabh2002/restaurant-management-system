import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GalleryItem from '../components/GalleryItem';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import './Gallery.css';  // Importing the custom CSS for advanced styling

const Gallery = () => {
  const images = [
    { title: 'Restaurant Interior', image: 'https://www.restaurantinteriordesign.eu/wp-content/uploads/2019/11/RESTAU1.jpg' },
    { title: 'Special Dish', image: 'https://imgmedia.lbb.in/media/2022/05/628d02abb244e5600088c718_1653408427183.jpg' },
    { title: 'Customer Dining', image: 'https://i.pinimg.com/736x/b9/00/10/b900106c30860d6f74177c6686c2611f--fine-dining-indian.jpg' },
    { title: 'Restaurant Exterior', image: 'https://th.bing.com/th/id/R.043a31ac4ecc12d1e28d071cfc2ae3a1?rik=FzlC%2bY9gShwLig&riu=http%3a%2f%2fwww.armadadh.com%2fwp-content%2fuploads%2f2019%2f06%2fExternal-night-view-Felix.jpg&ehk=Y7rFmFzqWAGYVaxjuw4HjiOArAUg9LjHMw%2fIxABzShs%3d&risl=&pid=ImgRaw&r=0' },
    { title: 'Plate Presentation', image: 'https://dreffui1gbt6t.cloudfront.net/images/hj/HJ_Dine_The-Living-Room_Gallery_Asset-6.jpg' },
    { title: 'Services', image: 'https://i0.wp.com/entrepreneurialchef.com/wp-content/uploads/2019/01/Customer-Service.jpg?fit=1200%2C800&ssl=1' }
  ];

  return (
    <div className="gallery-page">
      <NavBar />
      <Container>
        <h2 className="section-title">Gallery</h2>
        <Row>
          {images.map((img, index) => (
            <Col key={index} sm={12} md={4} className="gallery-item">
              <GalleryItem image={img.image} title={img.title} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Gallery;
