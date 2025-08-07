import React from 'react';
import './footer.css';
import {NavLink , Link } from 'react-router-dom';

function Footer() {
  return (
    <>

      <div className="footer">
        <div className="footerinfo">
          <div className="howtogethere">
            <h3 style={{ color: "rgb(175,148,100" }}>How to get here?</h3>
            <img src="./assets/main.jpg" alt="" />
          </div>
          <div className="quicklinks-footercontact">

            <div className="quicklinks">
              <h3>Quick Links : </h3>
              <NavLink to="/">&gt; &nbsp; Home</NavLink>
              <NavLink to="/Accomodations">&gt; &nbsp; Accommodations</NavLink>
              <NavLink to="/event&activities">&gt; &nbsp; Events</NavLink>
              <NavLink to="/Gallery">&gt; &nbsp; E-Gallery</NavLink>
              <NavLink to="/contactus">&gt; &nbsp; Contact us</NavLink>
              <NavLink to="/aboutus">&gt; &nbsp; About us</NavLink>
            </div>

            <div className="footercontact">
              <h3>Contact Info : </h3>
              <Link to="/#">&gt; &nbsp; 9999785857</Link>
              <Link to="/#">&gt; &nbsp; 9999785857</Link>
              <Link to="/#">&gt; &nbsp; abc@gmail.com</Link>
            </div>
          </div>
          <div className="footerlogosection">
            <div className="footerlogo">
              <img src="./assets/logo3-golden.png" alt="" />
            </div>
            <div className="footersocials">
              <img src="./assets/svgs/instagram.png" alt="" />
              <img src="./assets/svgs/whatsapp.png" alt="" />
              <img src="./assets/svgs/facebook.png" alt="" />
              <img src="./assets/svgs/pin.png" alt="" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>copyright &copy; 2025 Aanya Greens Farmhouses And Resorts | All Rights Reserved .</p>
        </div>
      </div>
    </>

  )
}

export default Footer;