import React from 'react';

const UserBookingList = ({ currentBookings, previousBookings, cancelBooking, reorderBike }) => {
  return (
    <div className="booking-list">
      <div className="current-bookings-section">
        <h2>Current Bookings</h2>
        {currentBookings.length > 0 ? (
          <table className="booking-table">
            <thead>
              <tr>
                <th>Bike</th>
                <th>Start Date & Time</th>
                <th>End Date & Time</th>
                <th>Amount</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {currentBookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.bike}</td>
                  <td>{booking.startDateTime}</td>
                  <td>{booking.endDateTime}</td>
                  <td>₹{booking.amount}</td>
                  <td>
                    <button
                      className="cancel-button"
                      onClick={() => cancelBooking(booking.id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Current Booking</p>
        )}
      </div>
      <div className="previous-bookings-section">
        <h2>Previous Bookings</h2>
        {previousBookings.length > 0 ? (
          <table className="booking-table">
            <thead>
              <tr>
                <th>Bike</th>
                <th>Start Date & Time</th>
                <th>End Date & Time</th>
                <th>Amount</th>
                <th>Reorder</th>
              </tr>
            </thead>
            <tbody>
              {previousBookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.bike}</td>
                  <td>{booking.startDateTime}</td>
                  <td>{booking.endDateTime}</td>
                  <td>₹{booking.amount}</td>
                  <td>
                    <button
                      className="reorder-button"
                      onClick={() => reorderBike(booking.id)}
                    >
                      Reorder
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Previous Bookings</p>
        )}
      </div>
    </div>
  );
};

export default UserBookingList;
