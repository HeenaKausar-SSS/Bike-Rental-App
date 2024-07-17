import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VehicleCard = ({ vehicle }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="vehicle-card">
      <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
      <div className="vehicle-info">
        <h3 className="vehicle-name">{vehicle.name}</h3>
        <p className="vehicle-model">{vehicle.model}</p>
      </div>
      <div className="vehicle-book-detail">
      <div className="vehicle-rate">
        <p>Rs {vehicle.rate}</p>
      </div>
      <div className="vehicle-quantity">
        <span htmlFor="quantity">Quantity:</span>
        <input
          type="number"
          id="quantity"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
        />
      </div>
      <div className="vehicle-availability">
        {vehicle.availability ? (
          <span className="available">Available</span>
        ) : (
          <span className="not-available">Not Available</span>
        )}
      </div>
      <div className="vehicle-book-btn">
        {vehicle.availability ? (
          <button className="button-primary"><Link to={'/book'}>Book</Link></button>
        ) : (
          <button className="btn-hidden"></button>
        )}
      </div>

      </div>
          </div>
  );
};

export default VehicleCard;
