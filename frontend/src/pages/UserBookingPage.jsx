import React, { useState } from 'react';
import BookingList from '../components/UserBookingList';

function App() {
  const [currentBookings, setCurrentBookings] = useState([
    {
      id: 1,
      bike: 'TVS Jupiter',
      startDateTime: '2024-07-20 10:00',
      endDateTime: '2024-07-21 10:00',
      amount: 500,
    },
  ]);

  const [previousBookings, setPreviousBookings] = useState([
    {
      id: 2,
      bike: 'Honda Activa',
      startDateTime: '2024-06-15 09:00',
      endDateTime: '2024-06-16 09:00',
      amount: 550,
    },
  ]);

  const cancelBooking = (id) => {
    setCurrentBookings(currentBookings.filter((booking) => booking.id !== id));
  };

  const reorderBike = (id) => {
    const booking = previousBookings.find((booking) => booking.id === id);
    if (booking) {
      setCurrentBookings([...currentBookings, booking]);
    }
  };

  return (
    <div className="App">
      <h1>Bike Rental Service</h1>
      <BookingList
        currentBookings={currentBookings}
        previousBookings={previousBookings}
        cancelBooking={cancelBooking}
        reorderBike={reorderBike}
      />
    </div>
  );
}

export default App;
