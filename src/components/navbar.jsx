import { React, useState, useEffect } from "react";
import './navbar.css';
import { NavLink, Link } from "react-router-dom";



function Navbar() {
  const [isDesktop, setIsDesktop] = useState(window.matchMedia('(min-width: 768px)').matches);
  const [Shownavitem, setShownavitem] = useState(false);

  const toggleNavItems = () => {
    setShownavitem(!Shownavitem);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleResize = () => setIsDesktop(mediaQuery.matches);

    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);


  useEffect(() => {
    if (Shownavitem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [Shownavitem]);


  return (
    <>
      {isDesktop ? (
        <div className="nav">
          <div className="Navleft">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/Accomodations">ACCOMMODATIONS</NavLink>
            <NavLink to="/Events">EVENTS</NavLink>
          </div>

          <div className="logo">
            <NavLink to="/"><img src="./assets/logo3-edited.png" alt="ritik" /></NavLink>
          </div>

          <div className="Navright">
            <NavLink to="/E-Gallery">E-GALLERY</NavLink>
            <NavLink to="/Contact">CONTACT</NavLink>
            <NavLink to="/About">ABOUT</NavLink>
          </div>
        </div>
      ) : (
        <>
          <div className="mobile-nav">
           <div className="mobile-fixed-svg"><a href="tel:+917838381836"><img src="./assets/svgs/phone.svg" alt="" /></a></div>
            <div className="mobile-logo"><NavLink to="/"><img src="./assets/logo3-edited.png" alt="ritik" /></NavLink></div>
            <div onClick={toggleNavItems} className="menu-icon"><img src="./assets/svgs/hamburger.svg" alt="" /></div>


            <div className={`navlinks  ${Shownavitem ? 'show' : 'hide'}`}>

              <div className="navlinks-logo-icon">
                <div className="mobile-fixed-svg"><a href="tel:+917838381836"><img src="./assets/svgs/phone.svg" alt="" /></a></div>
                <div className="mobile-logo"><NavLink to="/"><img src="./assets/logo3-edited.png" alt="ritik" /></NavLink> </div>
                <div onClick={toggleNavItems} className="menu-icon"><img src="./assets/svgs/cross.svg" alt="" /></div>
              </div>

              <NavLink onClick={toggleNavItems} to="/">HOME</NavLink>
              <NavLink onClick={toggleNavItems} to="/Accomodations">ACCOMMODATIONS</NavLink>
              <NavLink onClick={toggleNavItems} to="/Events">EVENTS</NavLink>
              <NavLink onClick={toggleNavItems} to="/E-Gallery">E-GALLERY</NavLink>
              <NavLink onClick={toggleNavItems} to="/Contact">CONTACT</NavLink>
              <NavLink onClick={toggleNavItems} to="/About">ABOUT</NavLink>


              <div className="navcontactnumber">
                <img src="./assets/svgs/phone-call.png" alt="" />
                <p><a href="tel:+917838381836">Call Us : 7838381836</a></p>
              </div>

            </div>

          </div>
        </>
      )
      }
    </>

  );
}


export default Navbar;