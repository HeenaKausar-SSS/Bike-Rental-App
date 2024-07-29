import React from 'react';
import { FaEye, FaSearch } from 'react-icons/fa';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdFilterAlt } from "react-icons/md";
const inUseBikes = [
  {
    id: 1,
    bikeName: 'Mountain Bike',
    bikePlateNumber: 'ABC123',
    inUseBy: 'john.doe@example.com',
    contact: '123-456-7890',
  },
  {
    id: 1,
    bikeName: 'Mountain Bike',
    bikePlateNumber: 'ABC123',
    inUseBy: 'john.doe@example.com',
    contact: '123-456-7890',
  },
  // Add more in-use bike data as needed
];

const bookedBikes = [
  {
    id: 1,
    bikeName: 'Road Bike',
    bikePlateNumber: 'XYZ789',
    bookedBy: 'jane.doe@example.com',
    contact: '987-654-3210',
  },
  {
    id: 1,
    bikeName: 'Road Bike',
    bikePlateNumber: 'XYZ789',
    bookedBy: 'jane.doe@example.com',
    contact: '987-654-3210',
  },
  // Add more booked bike data as needed
];

const availableBikes = [
  {
    id: 1,
    bikeName: 'Hybrid Bike',
    quantity: 5,
    bikeModel: '2021',
  },
  {
    id: 1,
    bikeName: 'Hybrid Bike',
    quantity: 5,
    bikeModel: '2021',
  },
  // Add more available bike data as needed
];

const ManageBikes = () => {
  return (
    <div className="manage-bikes">

<div className="section">
        <div className="section-header">
          <h2>Booked Bikes</h2>
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
        </div>
        <table className="bike-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Bike Name</th>
              <th>Bike Plate Number</th>
              <th>Booked By</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookedBikes.map(bike => (
              <tr key={bike.id}>
                <td>{bike.id}</td>
                <td>{bike.bikeName}</td>
                <td>{bike.bikePlateNumber}</td>
                <td>{bike.bookedBy}</td>
                <td>{bike.contact}</td>
                <td className="actions">
                  <button className="view-btn"><FaEye /></button>
                  <button className="edit-btn"><MdModeEdit /></button>
                  <button className="cancel-btn"><MdDelete /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <div className="section-header">
          <h2>In Use Bikes</h2>
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
        </div>
        <table className="bike-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Bike Name</th>
              <th>Bike Plate Number</th>
              <th>In Use By</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {inUseBikes.map(bike => (
              <tr key={bike.id}>
                <td>{bike.id}</td>
                <td>{bike.bikeName}</td>
                <td>{bike.bikePlateNumber}</td>
                <td>{bike.inUseBy}</td>
                <td>{bike.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <div className="section-header">
          <h2>Available Bikes</h2>
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
        </div>
        <table className="bike-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Bike Name</th>
              <th>Quantity</th>
              <th>Bike Model</th>
            </tr>
          </thead>
          <tbody>
            {availableBikes.map(bike => (
              <tr key={bike.id}>
                <td>{bike.id}</td>
                <td>{bike.bikeName}</td>
                <td>{bike.quantity}</td>
                <td>{bike.bikeModel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBikes;
