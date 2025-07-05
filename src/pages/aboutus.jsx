import React from "react";
import "./aboutus.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import Amenities from "../rarecomponents/aboutusamenities.jsx";
import ScrollToTop from "../rarecomponents/scrolltotop.jsx";

function AboutUs() {
    return (
        <>
            <ScrollToTop />
            <Navbar />

            <div className="ourvision-ourmission">
                <div className="our-vision">
                    <h1>Our Vision</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                        suscipit dolor repudiandae iste placeat voluptas necessitatibus et
                        sunt voluptatum debitis!
                    </p>
                </div>
                <div className="ourvision-ourmission-middleline"></div>

                <div className="our-mission">
                    <h1>Our Mission</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Accusantium esse sequi omnis sint dolor facilis deleniti consectetur
                        est atque nostrum.
                    </p>
                </div>
            </div>
            <div className="outer-white-box">
                <div className="white-box">
                    <div className="property-info">
                        <h2>Property Information</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            tempora numquam consequuntur tenetur saepe magnam?
                        </p>
                    </div>
                    <div className="aboutus-separationline"></div>
                    <div className="property-amenities">
                        <h3 className="h3">Property Amenities</h3>
                        <div className="amenities-box">
                            <Amenities image={"./assets/svgs/ac.svg"} text={"AC"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Wifi"} />
                        </div>
                    </div>
                    <div className="aboutus-separationline"></div>
                    <div className="check-in-out">
                        <h3 className="h3">Check-In and Check-out policies</h3>
                        <ul>
                            <li>Check-in : 4:00 PM</li>
                            <li>Check-out : 10:00 AM</li>
                        </ul>
                    </div>
                    <div className="aboutus-separationline"></div>
                    <div className="cancellation">
                        <h3 className="h3">Cancellation Policies</h3>
                        <ul>
                            <li>Full refund for cancellations made at least 14 days prior to your check-in date.</li>
                            <li>50% refund for cancellations made at least 7 days prior to check-in.</li>
                            <li>No refunds for cancellations made within 7 days of check-in.</li>
                        </ul>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}
export default AboutUs;
