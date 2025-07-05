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
            <img src="./assets/main.jpg" alt="" />
          </div>
          <div className="quicklinks-footercontact">

            <div className="quicklinks">
              <h3>Quick Links : </h3>
              <Link to="/">&gt; &nbsp; Home</Link>
              <Link to="/Accomodations">&gt; &nbsp; Accomodations</Link>
              <Link to="/event&activities">&gt; &nbsp; Events  &  Activities</Link>
              <Link to="/Gallery">&gt; &nbsp; Gallery</Link>
              <Link to="/contactus">&gt; &nbsp; Contact us</Link>
              <Link to="/aboutus">&gt; &nbsp; About us</Link>
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
              <img src="./assets/whitelogo.png" alt="" />
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
          <p>copyright &copy; 2025 Aanya Greens | All Rights Reserved .</p>
        </div>
      </div>
    </>

  )
}

export default Footer;