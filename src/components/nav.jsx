import React from "react";
import './nav.css';
import { Link } from "react-router-dom";  

function Nav() {

    return(
<>
<div className="nav">
        <div className="navleft">
          <Link to ="/">Home</Link>
          <Link to ="/Accomodations">Accomodations</Link>
          <Link to="#">Activities</Link>
        </div>
        <div className="logo">
          <img src="./src/assets/blacklogo.png" alt="ritik" />
        </div>
        <div className="navright">
          <Link to ="/Gallery">Gallery</Link>
          <Link to ="/contactus">Contact us</Link>
          <Link to ="#">About us</Link>
        </div>
      </div>
</>

    )
}
export default Nav;