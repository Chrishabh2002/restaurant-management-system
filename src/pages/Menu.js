import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuItem from '../components/MenuItem';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import './Menu.css';  // Importing the new styles

const Menu = () => {
  const menuItems = [
    { name: 'Pizza', description: 'Delicious cheese pizza', price: 12, image: 'https://img.freepik.com/premium-photo/cheesy-pizza_1057389-39570.jpg' },
    { name: 'Burger', description: 'Juicy beef burger', price: 8, image: 'https://www.chicken.ca/wp-content/uploads/2020/09/Big-Juicy-Burgers.jpg' },
    { name: 'Pasta', description: 'Pasta with creamy sauce', price: 10, image: 'https://www.thechunkychef.com/wp-content/uploads/2021/04/Roasted-Garlic-Cream-Sauce-7-550x550.jpg' },
    { name: 'Matter Paneer', description: "Matter Paneer with juicy gravy", price: 10.5, image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg"},
    { name: 'Ice-Cream', description: 'Ice cream', price: 5, image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps8708_C2640C49B_RMS-2.jpg'},
    { name: 'Cake', description: 'Cake with multi flavor', price: 9.5, image: 'https://i.pinimg.com/originals/5a/6a/1c/5a6a1c1c178c7bd5f9582f989d5cbe38.jpg' },
    { name: 'Butter Tandori Roti', description: 'Tandori Roti with Butter', price: 2.5, image: 'https://i0.wp.com/www.shanazrafiq.com/wp-content/uploads/2021/07/1-Tandoori-Naan-5.jpg?w=1024&ssl=1'}
  ];

  return (
    <div className="menu-page">
      <NavBar />
      <Container>
        <h2 className="my-4 text-center menu-title">Our Menu</h2>
        <Row>
          {menuItems.map((item, index) => (
            <Col key={index} sm={12} md={4} className="menu-item-col">
              <MenuItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Menu;
