// src/components/AdminDashboard/Bookings.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/api/bookings')
      .then(response => setBookings(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="admin-section">
      <h1>Manage Bookings</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Vehicle</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.user}</td>
              <td>{booking.vehicle}</td>
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
              <td>{booking.amount}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
