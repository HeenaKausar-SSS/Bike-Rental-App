import React from 'react';
import { Link } from 'react-router-dom';
import bikeImage from '../images/bikewithriders1.jpg';
import step1 from '../images/affordable.jpg';
import step2 from '../images/easy_booking.jpg';
import step3 from '../images/reliable.jpg';
import step4 from '../images/safety.jpg';
import step5 from '../images/support.jpg';
import discountImage from '../images/discount.png';
import backgroundImage from '../images/news-letter-bg.jpg';
import { FaGlobe } from 'react-icons/fa';
import { FaUserPlus } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import { MdCloudDone } from "react-icons/md";
import Slider from '../components/Slider';

const HomePage = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to BikeRide</h1>
          <p>Explore Bengaluru with our affordable bike rental service!</p>
          <Link to="/book" className="button-primary">Book Now</Link>
        </div>
        <div className="hero-image">
          <img src={bikeImage} alt="Bike Rental" />
        </div>
      </div>

        
    <div className="why-points">
      <h2>WHY CHOOSE US?</h2>
      <ul className="why-points-list">
        <li className="why-points-item">
          <img src={step1} alt="Affordable Rates" />
          <p>Affordable Rates: Only ₹500 per day</p>
        </li>
        <li className="why-points-item">
          <img src={step2} alt="Easy Booking" />
          <p>Easy Booking: Simple and user-friendly</p>
        </li>
        <li className="why-points-item">
          <img src={step3} alt="Reliable Ride" />
          <p>Reliable Ride: TVS Jupiter 2019 model</p>
        </li>
        <li className="why-points-item">
          <img src={step4} alt="Safety First" />
          <p>Safety First: Includes helmets</p>
        </li>
        <li className="why-points-item">
          <img src={step5} alt="24/7 Support" />
          <p>24/7 Support: Dedicated phone line</p>
        </li>
      </ul>
    </div>

    <div className="special-offer-container">
      <div className="special-offer-image">
        <img src={discountImage} alt="10% Discount" />
      </div>
      <div className="special-offer-text">
        <h1>Get a discount on your first booking!</h1>
        <h2>Use code: BIKERIDE10</h2>
      </div>
    </div>
    
    {/* <div className="how-to-book">
      <h2>HOW TO BOOK A RIDE</h2>
      {/* <div className="steps-container">

        <div className="step">
          <FaGlobe className="step-icon" />
          <div className="step-description">
            <div className="step-circle">1</div>
            <p>Visit our website or download our app (coming soon!).</p>
          </div>  
        </div>

        <div className="step">
          <div className="step-description">
            <div className="step-circle">2</div>
            <p>Register/Login to your account.</p>
          </div>  
          <FaUserPlus className="step-icon" />
        </div>

        <div className="step">
          <LuCalendarClock className="step-icon" />
          <div className="step-description">
            <div className="step-circle">3</div>
            <p>Choose your dates and vehicle.</p>
          </div>  
        </div>

        <div className="step">
          <div className="step-description">
            <div className="step-circle">4</div>
            <p>Confirm your booking and enjoy the ride!            </p>
          </div>  
          <MdCloudDone className="step-icon" />
        </div>

      </div> 
    </div> */}
    <Slider/>

    <div className="newsletter-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="newsletter-content">
        <h1>Stay updated on latest <br/> offers and news</h1>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>      
    </div>
  );
}

export default HomePage;
