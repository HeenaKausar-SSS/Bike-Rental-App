// src/components/AdminDashboard/Vehicles.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('/api/vehicles')
      .then(response => setVehicles(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="admin-section">
      <h1>Manage Vehicles</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Model</th>
            <th>Rate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(vehicle => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.name}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.rate}</td>
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

export default Vehicles;
