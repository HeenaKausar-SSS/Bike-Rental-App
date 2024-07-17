import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { FaWindowClose, FaUserCircle  } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdBookmark } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../images/logo2.png";

// const Header = () => {


//   return (
//     <nav className="nav">
      
//       <div className="container nav_container">
//         <Link to={"/"} className='nav_logo'>
//           <img src={logo} alt="Logo" />
//         </Link>
//         <ul className={`nav_menu ${menuOpen ? 'nav_menu--open' : ''}`}>
//           <li>
//             <Link to={"/userprofile/1"}>
//               <FaUserCircle  className="nav_icon" /> UserName
//             </Link>
//           </li>
//           <li>
//             <Link to={"/book"}>
//               <MdBookmark className="nav_icon" /> Book A Vehicle
//             </Link>
//           </li>
//           <li>
//             <Link to={"/vehicle"}>
//               <RiMotorbikeFill className="nav_icon" /> See Bikes
//             </Link>
//           </li>
//           <li>
//             <Link to={"/showuserbooking"}>
//               <FaCartShopping className="nav_icon" /> All Bookings
//             </Link>
//           </li>
//           <li>
//             <Link to={"/login"}>
//               <CgLogIn  className="nav_icon" /> Login
//             </Link>
//           </li>
//         </ul>
//         <button className='nav_toggle-btn' onClick={toggleMenu}>
//           {menuOpen ? <FaWindowClose /> : <CgMenuGridO />}
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Header;

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
