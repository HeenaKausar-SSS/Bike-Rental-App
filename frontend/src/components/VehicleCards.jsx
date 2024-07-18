import React from 'react';

const VehicleCard = ({ image, name, amount, description, available }) => {
  const truncatedDescription = description.length > 50 ? description.substring(0, 50) + '...' : description;

  return (
    <>
    <div className="vehicle-card">
      <img src={image} alt={name} className="vehicle-image" />
      <h2 className="vehicle-name">{name}</h2>
      <p className="vehicle-amount">Rs.{amount}</p>
      <p className="vehicle-description">{truncatedDescription}</p>
      <input type="number" min="1" className="vehicle-quantity" placeholder="Enter Quantity" />
      <div className="vehicle-action">
        {available ? <button className="vehicle-button">Book Now</button> : null}
        <label className={`vehicle-availability ${available ? '' : 'full-width'}`}>
          {available ? 'Available' : 'Not Available'}
        </label>
      </div>
    </div>
    </>
  );
};

export default VehicleCard;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const VehicleCard = ({ vehicle }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   return (
//     <div className="vehicle-card">
//       <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
//       <div className="vehicle-info">
//         <h3 className="vehicle-name">{vehicle.name}</h3>
//         <p className="vehicle-rate">Rs.{vehicle.rate}</p>
//       </div>
//       <div className="vehicle-book-detail">
//       <div className="vehicle-model">
//         <p>{vehicle.description}</p>
//       </div>
//       <div className="vehicle-quantity">
//         <span htmlFor="quantity">Quantity:</span>
//         <input
//           type="number"
//           id="quantity"
//           value={quantity}
//           min="1"
//           onChange={handleQuantityChange}
//         />
//       </div>
//       <div className="vehicle-availability">
//         {vehicle.availability ? (
//           <span className="available">Available</span>
//         ) : (
//           <span className="not-available">Not Available</span>
//         )}
//       </div>
//       <div className="vehicle-book-btn">
//         {vehicle.availability ? (
//           <button className="card-btn"><Link to={'/book'}>Book</Link></button>
//         ) : (
//           <button className="card-btn-hidden"></button>
//         )}
//       </div>

//       </div>
//           </div>
//   );
// };

// export default VehicleCard;
