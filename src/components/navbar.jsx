import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";  

function Navbar() {

    return(
<>
<div className="nav">
        <div className="navleft">
          <Link to ="/">Home</Link>
          <Link to ="/Accomodations">Accomodations</Link>
          <Link to="/event&activities">Events & <br/> Activities</Link>
        </div>
        <div className="logo">
         <Link to = "/"><img src="./dist/assets/blacklogo1.png" alt="ritik" /></Link>
        </div>
        <div className="navright">
          <Link to ="/Gallery">Gallery</Link>
          <Link to ="/contactus">Contact us</Link>
          <Link to ="/aboutus">About us</Link>
        </div>
      </div>
</>

    )
}
export default Navbar;