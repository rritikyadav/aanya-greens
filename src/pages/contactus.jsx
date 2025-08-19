import React from 'react';
import './contactus.css';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';
import Form from '../components/form.jsx';
import ScrollToTop from '../rarecomponents/scrolltotop.jsx';
import Fixedsvg from '../components/fixedsvg.jsx';
import { Link } from 'react-router-dom';

function Contactus() {

    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Fixedsvg/>

            <div className="contactus-main-imagesection"><img src="./assets/contactimg.png" alt="" /></div>

            <div className="contact-info">

                <div className="contactcard">
                    <h1>Rahul Yadav :</h1>
                    <p><Link to="tel:+917838381836">Call Us</Link></p>
                    <p><Link to="https://wa.me/7838381836" target="_blank" rel="noopener noreferrer">Chat On Whatsapp</Link></p>
                    <p>Help@aanyagreens.in</p>
                </div>
                <div className="contactcard">
                    <h1>Locate Us :</h1>
                    <p>vill-Teekli, Badshahpur, Sector-68, Haryana, 122101</p>
                    <p><Link to="https://shorter.me/LuaRi" target="_blank" rel="noopener noreferrer">View On Google Maps</Link></p>
                </div>
                <div className="contactcard contactcard3">
                    <h1>socials :</h1>
                    <p></p>
                     <p><Link to="https://www.instagram.com/aanya_green_farm/profilecard/?igsh=cjc3MjNmNXk3Y3pw" target="_blank" rel="noopener noreferrer">aanya_greens_farm
                </Link></p>
                    <p>Facebook</p>
                </div>
            </div>

            <div className="instagram">
                <div className="username">
                    <img src="./assets/svgs/instagram.png" alt="" />
                   <Link to="https://www.instagram.com/aanya_green_farm/profilecard/?igsh=cjc3MjNmNXk3Y3pw" target="_blank" rel="noopener noreferrer">aanya_greens_farm
                </Link>
                </div>

                <div className="postcards">
                    <div className="postcard"><img src="./assets/instagram3.jpeg" alt="" /></div>
                    <div className="postcard"><img src="./assets/instagram1.jpeg" alt="" /></div>
                    <div className="postcard"><img src="./assets/instagram2.jpeg" alt="" /></div>
                    <div className="postcard"><img src="./assets/instagram4.jpeg" alt="" /></div>
                </div>
            </div>

            <Form />

            <Footer />

        </>

    )
}
export default Contactus;   