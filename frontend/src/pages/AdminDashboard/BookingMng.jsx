import React from 'react';
import { FaEye, FaSearch } from 'react-icons/fa';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdFilterAlt } from "react-icons/md";

const bookings = [
  {
    id: 1,
    userEmail: 'john.doe@example.com',
    startDate: '2023-07-01',
    startTime: '10:00 AM',
    endDate: '2023-07-05',
    endTime: '10:00 AM',
    paymentStatus: 'Paid',
  },
  {
    id: 1,
    userEmail: 'john.doe@example.com',
    startDate: '2023-07-01',
    startTime: '10:00 AM',
    endDate: '2023-07-05',
    endTime: '10:00 AM',
    paymentStatus: 'Paid',
  },
  {
    id: 1,
    userEmail: 'john.doe@example.com',
    startDate: '2023-07-01',
    startTime: '10:00 AM',
    endDate: '2023-07-05',
    endTime: '10:00 AM',
    paymentStatus: 'Paid',
  },
  // Add more booking data as needed
];

const BookingManagement = () => {
  return (
    <div className="booking-management">
      <div className="cards">
        <div className="card">
          <div className="card-text">Total Active Booking</div>
          <div className="card-number">10</div>
        </div>
        <div className="card">
          <div className="card-text">Total Previous Booking</div>
          <div className="card-number">20</div>
        </div>
        <div className="card">
          <div className="card-text">Pending Payments</div>
          <div className="card-number">5</div>
        </div>
      </div>
      <div className="search-filter">
        <div className="search-bar">
          <div className="icon"><FaSearch /></div>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="filter">
          <div className="icon"><MdFilterAlt/></div>
          <select>
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="previous">Previous</option>
            <option value="pending">Pending Payments</option>
          </select>
        </div>
      </div>
      <table className="booking-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Email</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>End Date</th>
            <th>End Time</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.userEmail}</td>
              <td>{booking.startDate}</td>
              <td>{booking.startTime}</td>
              <td>{booking.endDate}</td>
              <td>{booking.endTime}</td>
              <td>{booking.paymentStatus}</td>
              <td className="actions">
                <button className="view-btn"><FaEye /></button>
                <button className="edit-btn"><MdModeEdit /></button>
                <button className="delete-btn"><MdDelete /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingManagement;
