import React, { useState } from 'react';
import './LoyaltyRewards.css';
import Navbar from '../components/Navbar';  // Assuming Navbar component exists
import Footer from '../components/Footer';  // Assuming Footer component exists

const LoyaltyRewards = () => {
  const [points, setPoints] = useState(120); // Example points, can be dynamic based on user data

  const handleEarnPoints = () => {
    setPoints(points + 10); // Simulate earning points
  };

  return (
    <div className="loyalty-rewards-page">
      <Navbar />
      <div className="loyalty-rewards-content">
        <h2>Loyalty Rewards</h2>
        <p>Earn points with every purchase and redeem them for discounts and special offers!</p>

        {/* How the program works */}
        <section className="reward-info">
          <h3>How it Works</h3>
          <p>
            For every $1 spent, you earn 1 point. Points can be redeemed for various rewards, such as
            discounts, free items, and exclusive offers. The more you spend, the more rewards you unlock!
          </p>
        </section>

        {/* Points tracker */}
        <section className="points-tracker">
          <h3>Your Reward Points</h3>
          <div className="points-display">
            <span className="points">{points}</span> <span>Points</span>
          </div>
          <button onClick={handleEarnPoints} className="earn-points-btn">Earn 10 Points</button>
        </section>

        {/* Rewards redemption information */}
        <section className="redeem-info">
          <h3>How to Redeem Your Points</h3>
          <ul>
            <li><strong>100 Points</strong> - Get 10% off your next order</li>
            <li><strong>200 Points</strong> - Get a free appetizer</li>
            <li><strong>500 Points</strong> - Get a free main dish</li>
            <li><strong>1000 Points</strong> - Get a $20 discount on your next purchase</li>
          </ul>
        </section>

        <section className="cta">
          <h3>Join Now and Start Earning!</h3>
          <p>Sign up today and begin earning points on your next purchase.</p>
          <button className="cta-btn">Join the Loyalty Program</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LoyaltyRewards;
