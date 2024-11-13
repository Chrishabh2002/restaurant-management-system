// src/components/AdminNavbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css"; // Ensure CSS is correctly imported

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <ul>
        <li>
          <Link to="/admin-dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin-dashboard/orders">Orders</Link>
        </li>
        <li>
          <Link to="/admin-dashboard/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/admin-dashboard/users">Users</Link>
        </li>
        <li>
          <Link to="/admin-dashboard/staff">Staff</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
