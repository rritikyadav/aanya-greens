import {React,useState,useEffect} from "react";
import './navbar.css';
import { Link } from "react-router-dom";  



function Navbar() {
    const [isDesktop, setIsDesktop] = useState(window.matchMedia('(min-width: 768px)').matches);

useEffect(() => {
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  const handleResize = () => setIsDesktop(mediaQuery.matches);

  mediaQuery.addListener(handleResize);
  return () => mediaQuery.removeListener(handleResize);
}, []);

    return(
<>
         {isDesktop ? (
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/Accomodations">Accomodations</Link>
          <Link to="/event&activities">Events &<br />Activities</Link>

          <div className="logo">
            <Link to="/"><img src="./dist/assets/blacklogo1.png" alt="ritik" /></Link>
          </div>

          <Link to="/Gallery">Gallery</Link>
          <Link to="/contactus">Contact us</Link>
          <Link to="/aboutus">About us</Link>
        </div>
      ) : (
        <div className="mobile-nav">
          {/* Example mobile menu */}
          <div className="menu-icon">☰</div>
          <div className="mobile-logo">
            <Link to="/"><img src="./dist/assets/blacklogo1.png" alt="ritik" /></Link>
          </div>
          <div className="bookhere">Book</div>
        </div>
      )
    }
   

     {/*<div className="nav">
              <Link to ="/">Home</Link>
              <Link to ="/Accomodations">Accomodations</Link>
              <Link to="/event&activities">Events & <br/> Activities</Link>

            <div className="logo">
             <Link to = "/"><img src="./dist/assets/blacklogo1.png" alt="ritik" /></Link>
            </div>
            A
              <Link to ="/Gallery">Gallery</Link>
              <Link to ="/contactus">Contact us</Link>
              <Link to ="/aboutus">About us</Link>
          </div>*/}
</>

    );
}


export default Navbar;