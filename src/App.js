import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import SignUp from './pages/SignUp'; // Ensure correct import
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Events from './pages/Events';
import AdminDashboard from './pages/AdminDashboard';
import FAQ from './pages/FAQ';
import LoyaltyRewards from './pages/LoyaltyRewards';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} /> {/* Changed to lowercase "sign-up" */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/loyalty-rewards" element={<LoyaltyRewards />} />
      </Routes>
    </Router>
  );
}

export default App;
