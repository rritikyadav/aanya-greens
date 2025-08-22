import React from 'react';
import './contactus.css';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';
import Form from '../components/form.jsx';
import ScrollToTop from '../rarecomponents/scrolltotop.jsx';
import Fixedsvg from '../components/fixedsvg.jsx';

function Contactus() {

    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Fixedsvg />

            <div className="contactus-main-imagesection"><img src="./assets/contactimg.png" alt="" /></div>

            <div className="contact-info">

                <div className="contactcard">
                    <h1>Rahul Yadav :</h1>
                    <div className='contactcarddiv'>
                        <img src="./assets/svgs/phone-call.png" alt="" />
                        <p><a href="tel:+917838381836">Call Us : 7838381836</a></p>
                    </div>
                    <div className='contactcarddiv'>
                        <img src="./assets/svgs/whatsapp.png" alt="" />
                        <p><a href="https://wa.me/7838381836" target="_blank" rel="noopener noreferrer">Chat On : 7838381836</a></p>
                    </div>
                    <div className='contactcarddiv'>
                        <img src="./assets/svgs/gmail.png" alt="" />
                        <p><a href="mailto:mail@aanyagreens.in">mail@aanyagreens.in</a></p>
                    </div>
                </div>
                <div className="contactcard">
                    <h1>Locate Us :</h1>
                    <div className='contactcarddiv'>
                        <img src="./assets/svgs/home-address.png" alt="" />
                        <p>Vill-Teekli, Badshahpur, Sector-68, Haryana, 122101</p>
                    </div>
                    <div className='contactcarddiv'>
                        <img src="./assets/svgs/pin.png" alt="" />
                        <p><a href="https://shorter.me/LuaRi" target="_blank" rel="noopener noreferrer">View On Google Maps</a></p>
                    </div>
                </div>
                <div className="contactcard contactcard3">
                    <h1>socials :</h1>
                    <div className='contactcarddiv'>
                        <img src="./assets/svgs/instagram.png" alt="" />
                        <p><a href="https://www.instagram.com/aanya_green_farm/profilecard/?igsh=cjc3MjNmNXk3Y3pw" target="_blank" rel="noopener noreferrer">aanya_greens_farm</a></p>
                    </div>
                    <div className='contactcarddiv'>
                        <img src="./assets/svgs/facebook.png" alt="" />
                        <p><a href="">Facebook</a></p>
                    </div>
                </div>
            </div>

            <div className="instagram">
                <div className="username">
                    <img src="./assets/svgs/instagram.png" alt="" />
                    <a href="https://www.instagram.com/aanya_green_farm/profilecard/?igsh=cjc3MjNmNXk3Y3pw" target="_blank" rel="noopener noreferrer">aanya_greens_farm
                    </a>
                </div>

                <div className="postcards">
                    <div className="postcard"><a href="https://www.instagram.com/aanya_green_farm/profilecard/?igsh=cjc3MjNmNXk3Y3pw" target="_blank" rel="noopener noreferrer"><img src="./assets/instagram3.jpeg" alt="" /></a></div>
                    <div className="postcard"><a href="https://www.instagram.com/aanya_green_farm/profilecard/?igsh=cjc3MjNmNXk3Y3pw" target="_blank" rel="noopener noreferrer"><img src="./assets/instagram1.jpeg" alt="" /></a></div>
                    <div className="postcard"><a href="https://www.instagram.com/aanya_green_farm/profilecard/?igsh=cjc3MjNmNXk3Y3pw" target="_blank" rel="noopener noreferrer"><img src="./assets/instagram2.jpeg" alt="" /></a></div>
                    <div className="postcard"><a href="https://www.instagram.com/aanya_green_farm/profilecard/?igsh=cjc3MjNmNXk3Y3pw" target="_blank" rel="noopener noreferrer"><img src="./assets/instagram4.jpeg" alt="" /></a></div>
                </div>
            </div>

            <Form />

            <Footer />

        </>

    )
}
export default Contactus;   