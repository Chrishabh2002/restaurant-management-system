import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';  // Assuming Navbar component exists
import Footer from '../components/Footer';  // Assuming Footer component exists
import './OrderOnline.css';  // Importing custom CSS for animations

const MenuItem = ({ item }) => (
  <Card className="menu-item">
    <div className="card-content">
      <Card.Img variant="top" src={item.image} className="card-img" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text><strong>${item.price}</strong></Card.Text>
        <Button variant="primary" className="add-to-cart">Add to Cart</Button>
      </Card.Body>
    </div>
  </Card>
);

const OrderOnline = () => {
  const menuItems = [
    { name: 'Pizza', description: 'Delicious cheese pizza', price: 12, image: 'https://img.freepik.com/premium-photo/cheesy-pizza_1057389-39570.jpg' },
    { name: 'Burger', description: 'Juicy beef burger', price: 8, image: 'https://www.chicken.ca/wp-content/uploads/2020/09/Big-Juicy-Burgers.jpg' },
    { name: 'Pasta', description: 'Pasta with creamy sauce', price: 10, image: 'https://www.thechunkychef.com/wp-content/uploads/2021/04/Roasted-Garlic-Cream-Sauce-7-550x550.jpg' },
    { name: 'Matter Paneer', description: "Matter Paneer with juicy gravy", price: 10.5, image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg"},
    { name: 'Ice-Cream', description: 'Ice cream', price: 5, image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps8708_C2640C49B_RMS-2.jpg'},
    { name: 'Cake', description: 'Cake with multi flavor', price: 9.5, image: 'https://i.pinimg.com/originals/5a/6a/1c/5a6a1c1c178c7bd5f9582f989d5cbe38.jpg' },
    { name: 'Butter Tandori Roti', description: 'Tandori Roti with Butter', price: 2.5, image: 'https://i0.wp.com/www.shanazrafiq.com/wp-content/uploads/2021/07/1-Tandoori-Naan-5.jpg?w=1024&ssl=1' }
  ];

  return (
    <div className="order-online">
      <Navbar />
      <Container className="order-online-content">
        <h2 className="section-title">Order Online</h2>
        <Row>
          {menuItems.map((item, index) => (
            <Col sm={12} md={6} lg={4} key={index}>
              <MenuItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default OrderOnline;
