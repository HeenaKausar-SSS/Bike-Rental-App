import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="admin-header">
      <nav>
        <ul>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          <li><Link to="/admin/bookings">Bookings</Link></li>
          <li><Link to="/admin/vehicles">Vehicles</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
