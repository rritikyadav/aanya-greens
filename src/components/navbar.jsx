import { React, useState, useEffect } from "react";
import './navbar.css';
import { NavLink , Link } from "react-router-dom";



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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Accomodations">Accomodations</NavLink>
          <NavLink to="/event&activities">Events</NavLink>

          <div className="logo">
            <NavLink to="/"><img src="./assets/logo3-edited.png" alt="ritik" /></NavLink>
          </div>

          <NavLink to="/Gallery">E-Gallery</NavLink>
          <NavLink to="/contactus">Contact</NavLink>
          <NavLink to="/aboutus">About</NavLink>
        </div>
      ) : (
        <>
          <div className="mobile-nav">
            <div className="mobile-logo">
              <NavLink to="/"><img src="./assets/logo3-edited.png" alt="ritik" /></NavLink>
            </div>
            <div onClick={toggleNavItems} className="menu-icon"><img src="./assets/svgs/hamburger.svg" alt="" /></div>



            <div className={`navlinks  ${Shownavitem ? 'show' : 'hide'}`}>

              <div className="navlinks-logo-icon">
                <div className="mobile-logo"><NavLink to="/"><img src="./assets/logo3-edited.png" alt="ritik" /></NavLink> </div>
                <div onClick={toggleNavItems} className="menu-icon"><img src="./assets/svgs/cross.svg" alt="" /></div>
              </div>

              <NavLink onClick={toggleNavItems} to="/">Home</NavLink>
              <NavLink onClick={toggleNavItems} to="/Accomodations">Accomodations</NavLink>
              <NavLink onClick={toggleNavItems} to="/Gallery">E-Gallery</NavLink>
              <NavLink onClick={toggleNavItems} to="/event&activities">Events</NavLink>
              <NavLink onClick={toggleNavItems} to="/contactus">Contact</NavLink>
              <NavLink onClick={toggleNavItems} to="/aboutus">About</NavLink>


              <div className="navcontactnumber">
                <img src="./assets/svgs/phone.svg" alt="" />
                <p><Link to="#">9999785857</Link> , <Link to="#" >9999785857</Link></p>
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