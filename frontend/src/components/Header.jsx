import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdBookmark } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../images/logo2.png";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
    <nav>
    <Link to={"/"} className='nav_logo'>
           <img src={logo} alt="Logo" />
         </Link>
         <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen);
         }}>
          <span></span>
          <span></span>
          <span></span>
         </div>
         
      <ul className={menuOpen ? "open" : ""}>
      {/* <li>
             <Link to={"/userprofile/1"}>
               <FaUserCircle  className="nav_icon" /> JOHN
             </Link>
           </li> */}
           <li>
             <NavLink to={"/book"}>
               <MdBookmark className="nav_icon" /> Book A Vehicle
             </NavLink>
           </li>
          <li>
             <NavLink to={"/vehicle"}>
               <RiMotorbikeFill className="nav_icon" /> See Bikes
             </NavLink>
           </li>
           <li>
             <NavLink to={"/showuserbooking"}>
               <FaCartShopping className="nav_icon" /> All Bookings
             </NavLink>
           </li>
           <li>
            <NavLink to={"/login"}>
               <FaUserCircle  className="nav_icon" /> Logout
             </NavLink>
           </li>
      </ul>
    </nav>
    </>
  )
}

export default Header
