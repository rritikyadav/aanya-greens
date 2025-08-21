import React from "react";
import "./aboutus.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import Amenities from "../rarecomponents/aboutusamenities.jsx";
import ScrollToTop from "../rarecomponents/scrolltotop.jsx";
import Fixedsvg from "../components/fixedsvg.jsx";
import { Link } from "react-router-dom";

function AboutUs() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Fixedsvg />

      <div className="about-main-line"></div>

            <div className="outer-white-box">
                <div className="white-box">
                    <div className="property-info">
                        <h2>Property Information</h2>
                        <p>
                            Aanya Greens – A soulful retreat beneath the Aravalli Hills and Leopard Trails,
                            rooted in nature, harmony, and wild beauty.
                        </p>
                    </div>
                    <div className="aboutus-separationline"></div>
                    <div className="property-amenities">
                        <h3 className="h3">Property Amenities</h3>
                        <div className="amenities-box">
                            <Amenities image={"./assets/svgs/check-in-out.svg"} text={"Private check-in/out"} />
                            <Amenities image={"./assets/svgs/bedroom.svg"} text={"5 Spacious Bedrooms"} />
                            <Amenities image={"./assets/svgs/lounge.svg"} text={" Elegant Lounge"} />
                            <Amenities image={"./assets/svgs/garden.svg"} text={" Lavish Garden"} />
                            <Amenities image={"./assets/svgs/sports.svg"} text={" Sports Equipments"} />
                            <Amenities image={"./assets/svgs/speaker1.svg"} text={"Bluetooth Speaker"} />
                            <Amenities image={"./assets/svgs/fireplace.svg"} text={" Beautiful Fireplace"} />
                            <Amenities image={"./assets/svgs/bar.svg"} text={"Bar-crawls"} />
                            <Amenities image={"./assets/svgs/open-airpool.svg"} text={"Spacios Swimming Pool"} />
                            <Amenities image={"./assets/svgs/powerbackup.svg"} text={"Power Backup"} />
                            <Amenities image={"./assets/svgs/opensitting.svg"} text={"open-Air Sitting"} />
                            <Amenities image={"./assets/svgs/pet.svg"} text={"Pet-Friendly Environment"} />
                            <Amenities image={"./assets/svgs/parking.svg"} text={"Guest Parking"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Internet"} />
                            <Amenities image={"./assets/svgs/fridge.svg"} text={"All Kitchen Equipments"} />
                            <Amenities image={"./assets/svgs/amenitiesac.svg"} text={"Fully Ac Rooms"} />
                            <Amenities image={"./assets/svgs/first-aidkit.svg"} text={"First-Aid kits"} />
                            <Amenities image={"./assets/svgs/spray.svg"} text={"Disinfected Areas"} />
                            <Amenities image={"./assets/svgs/person.svg"} text={"Full Time Care-Taker's"} />
                        </div>
                    </div>
                    <div className="aboutus-separationline"></div>
                    <div className="aboutus">
                        <h3 className="h3">About Us</h3>
                        <p>5 Bedroom luxury farmhouse with living area and pool. The Pool is big enough to accommodate up to 300 people. It is a spacious farmhouse and looks extremely pretty. It is an apt destination to host open-air lawn parties, pool parties, birthday parties, bachelors party, DJ night, luxurious get-togethers.</p>
                    </div>
                    <div className="aboutus-separationline"></div>

                    <div className="address-contact">
                        <h3 className="h3">Address And Contact Info</h3>
                        <div className="address-contact-divs"><img src="./assets/svgs/pin.png" alt="" /><a href="https://shorter.me/LuaRi" target="_blank" rel="noopener noreferrer">Vill-Teekli, Badshahpur, Sector-68, Haryana, 122101</a></div>
                        <div className="address-contact-divs"><img src="./assets/svgs/phone-call.png" alt="" /><a href="tel:+917838381836">Call Us : 7838381836</a></div>
                        <div className="address-contact-divs"><img src="./assets/svgs/whatsapp.png" alt="" /><a href="https://wa.me/7838381836" target="_blank" rel="noopener noreferrer">Text On : 7838381836</a></div>
                    </div>

                    <div className="aboutus-separationline"></div>

                    <div className="check-in-out">
                        <h3 className="h3">Check-In and Check-out policies</h3>
                        <ul>
                            <li>Check-in : 2:00 PM</li>
                            <li>Check-out : 11:00 AM</li>
                        </ul>
                    </div>
                    <div className="aboutus-separationline"></div>
                    <div className="cancellation">
                        <h3 className="h3">Cancellation Policies</h3>
                        <ul>
                            <li>
                                Full refund for cancellations made at least 14 days prior to
                                your check-in date.
                            </li>
                            <li>
                                50% refund for cancellations made at least 7 days prior to
                                check-in.
                            </li>
                            <li>
                                No refunds for cancellations made within 7 days of check-in.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="ourvision-ourmission">
                <div className="our-mission">
                    <h1>Our Mission</h1>
                    <p>
                        At Aanya Greens, our mission is to offer an eco-conscious retreat
                        where guests reconnect with nature, rejuvenate their spirit, and
                        experience true tranquility amidst lush greenery and sustainable
                        luxury.
                    </p>
                </div>

                <div className="ourvision-ourmission-middleline"></div>

                <div className="our-vision">
                    <h1>Our Vision</h1>
                    <p>
                        We envision Aanya Greens as a leading eco-resort, inspiring mindful
                        travel through harmony with the environment, exceptional
                        hospitality, and unforgettable experiences rooted in nature and
                        culture.
                    </p>
                </div>

            </div>

            <Footer />
        </>
    );
}
export default AboutUs;
