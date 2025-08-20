import React from 'react';
import './footer.css';
import { NavLink, Link } from 'react-router-dom';

function Footer() {
  return (
    <>

      <div className="footer">
        <div className="footerinfo">
          <div className="howtogethere">
            <h3 style={{ color: "rgb(175,148,100" }}>How to get here?</h3>
            <Link to="https://shorter.me/LuaRi" target="_blank" rel="noopener noreferrer"><img src="./assets/footer-contact-img.png" alt="" /></Link>
          </div>
          <div className="quicklinks-footercontact">

            <div className="footercontact">
              <h3>Contact Info : </h3>
              <div className='footercontact-divs'>
                <img src="./assets/svgs/phone-call.png" alt="" />
                <Link to="tel:+917838381836">Call us : 7838381836</Link>
              </div>
              <div className='footercontact-divs'>
                <img src="./assets/svgs/whatsapp.png" alt="" />
                <Link to="https://wa.me/7838381836" target="_blank" rel="noopener noreferrer">Text Us : 7838381836</Link>
              </div>
              <div className='footercontact-divs'>
                <img src="./assets/svgs/gmail.png" alt="" />
                <Link to="/#">Mail At : help@aanyagreens.in</Link>
              </div>
            </div>

            <div className="quicklinks">
              <h3>Quick Links : </h3>
              <NavLink to="/">&gt; &nbsp; Home</NavLink>
              <NavLink to="/Accomodations">&gt; &nbsp; Accommodations</NavLink>
              <NavLink to="/Events">&gt; &nbsp; Events</NavLink>
              <NavLink to="/E-Gallery">&gt; &nbsp; E-Gallery</NavLink>
              <NavLink to="/Contact">&gt; &nbsp; Contact us</NavLink>
              <NavLink to="/About">&gt; &nbsp; About us</NavLink>
            </div>


          </div>
          <div className="footerlogosection">
            <div className="footerlogo">
              <img src="./assets/logo3-golden.png" alt="" />
            </div>
            <div className="footersocials">
              <Link to="https://www.instagram.com/aanya_green_farm/profilecard/?igsh=cjc3MjNmNXk3Y3pw" target="_blank" rel="noopener noreferrer"><img src="./assets/svgs/instagram.png" alt="" /></Link>
              <Link to="https://wa.me/7838381836" target="_blank" rel="noopener noreferrer"><img src="./assets/svgs/whatsapp.png" alt="" /></Link>
              <Link><img src="./assets/svgs/facebook.png" alt="" /></Link>
              <Link to="https://shorter.me/LuaRi" target="_blank" rel="noopener noreferrer"><img src="./assets/svgs/pin.png" alt="" /></Link>
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