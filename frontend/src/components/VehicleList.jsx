import React from 'react';
import VehicleCard from './VehicleCards';
import image1 from '../images/bike1.jpg'
import image2 from '../images/bike2.jpg'
import image3 from '../images/bike3.jpg'
import image4 from '../images/bike4.jpg'

const vehicles = [
    {
      image: image1,
      name: 'Royal Enfield Himalayan',
      model: '2016',
      rate: 200,
      availability: true
    },
    {
      image: image2,
      name: 'Zontes 350X',
      model: '2021',
      rate: 200,
      availability: true
    },
    {
      image: image3,
      name: 'TVS NTORQ 125',
      model: '2018',
      rate: 200,
      availability: true
    },
    {
      image: image4,
      name: 'Bajaj Chetak',
      model: '2020',
      rate: 200,
      availability: false
    }
    
  ];

const VehicleList = () => {
  return (
    <div>
      {vehicles.map((vehicle, index) => (
        <VehicleCard key={index} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehicleList;
