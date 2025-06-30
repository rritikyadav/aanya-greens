import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>

      <div className="footer">
        <div className="footerinfo">
          <div className="howtogethere">
            <h3 style={{ color: "rgb(175,148,100" }}>How to get here?</h3>
            <img src="./src/assets/main.jpg" alt="" />
          </div>
          <div className="quicklinks-footercontact">

            <div className="quicklinks">
              <h3>Quick Links : </h3>
              <Link to="/">Home</Link>
              <Link to="/Accomodations">Accomodations</Link>
              <Link to="/event&activities">Events  &  Activities</Link>
              <Link to="/Gallery">Gallery</Link>
              <Link to="/contactus">Contact us</Link>
              <Link to="/aboutus">About us</Link>
            </div>
            <div className="footercontact">
              <h3>Contact Info : </h3>
              <Link to="/#">9999785857</Link>
              <Link to="/#">9999785857</Link>
              <Link to="/#">abc@gmail.com</Link>
            </div>
          </div>
          <div className="footerlogosection">
            <div className="footerlogo">
              <img src="./src/assets/blacklogo1.png" alt="" />
            </div>
            <div className="footersocials">
              <img src="./src/assets/svgs/wifi.svg" alt="" />
              <img src="./src/assets/svgs/wifi.svg" alt="" />
              <img src="./src/assets/svgs/wifi.svg" alt="" />
              <img src="./src/assets/svgs/wifi.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>copyright ananya greens 2025</p>
        </div>
      </div>
    </>

  )
}

export default Footer;