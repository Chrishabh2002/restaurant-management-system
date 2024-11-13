// src/components/AdminSidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./AdminSidebar.css"; // Ensure CSS is correctly imported

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <ul>
        <li>
          <Link to="/admin-dashboard/orders">Manage Orders</Link>
        </li>
        <li>
          <Link to="/admin-dashboard/reservations">Manage Reservations</Link>
        </li>
        <li>
          <Link to="/admin-dashboard/users">Manage Users</Link>
        </li>
        <li>
          <Link to="/admin-dashboard/staff">Manage Staff</Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
