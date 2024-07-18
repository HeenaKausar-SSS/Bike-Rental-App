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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, quis at! Fuga dolorum aliquam ducimus sequi minima officiis, distinctio eos?",
      amount: 200,
      available: true
    },
    {
      image: image2,
      name: 'Zontes 350X',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores excepturi nesciunt corporis culpa in adipisci alias esse incidunt et?",
      amount: 200,
      available: true
    },
    {
      image: image3,
      name: 'TVS NTORQ 125',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores excepturi nesciunt corporis culpa in adipisci alias esse incidunt et?" ,
      amount: 200,
      available: true
    },
    {
      image: image4,
      name: 'Bajaj Chetak',
      description:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores excepturi nesciunt corporis culpa in adipisci alias esse incidunt et?",
      amount: 200,
      available: false
    },
    {
      image: image4,
      name: 'Bajaj Chetak',
      description:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores excepturi nesciunt corporis culpa in adipisci alias esse incidunt et?",
      amount: 200,
      available: false
    },
    {
      image: image4,
      name: 'Bajaj Chetak',
      description:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores excepturi nesciunt corporis culpa in adipisci alias esse incidunt et?",
      amount: 200,
      available: false
    }
    
  ];

const VehicleList = () => {
  return (
    
      <div className="vehicle-cards-container">
        {vehicles.map((vehicle, index) => (
          <VehicleCard key={index} {...vehicle} />
        ))}
      </div>
    
  );
};

export default VehicleList;
