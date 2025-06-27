import React from "react";
import "./aboutus.css";
import Nav from "../components/nav.jsx";
import Footer from "../components/Footer.jsx";
import Amenities from "../components/aboutusamenities.jsx";
import ScrollToTop from "../components/scrolltotop.jsx";

function AboutUs() {
    return (
        <>
            <ScrollToTop />
            <Nav />

            <div className="about">
                <div className="ourvision">
                    <h1>Our Vision</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                        suscipit dolor repudiandae iste placeat voluptas necessitatibus et
                        sunt voluptatum debitis!
                    </p>
                </div>
                <div className="middleline"></div>
                <div className="ourmission">
                    <h1>Our Mission</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Accusantium esse sequi omnis sint dolor facilis deleniti consectetur
                        est atque nostrum.
                    </p>
                </div>
            </div>
            <div className="outerwhitebox">
                <div className="whitebox">
                    <div className="propertyinfo">
                        <h2>Property Information</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            tempora numquam consequuntur tenetur saepe magnam?
                        </p>
                    </div>
                    <div className="separation"></div>
                    <div className="propertyamenities">
                        <h3>Property Amenities</h3>
                        <div className="amenitiesbox">
                            <Amenities image={"./src/assets/svgs/ac.svg"} text={"AC"} />
                            <Amenities image={"./src/assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./src/assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./src/assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./src/assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./src/assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./src/assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./src/assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./src/assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./src/assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./src/assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./src/assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./src/assets/svgs/wifi.svg"} text={"Free Wifi"} />
                            <Amenities image={"./src/assets/svgs/wifi.svg"} text={"Free Wifi"} />
                        </div>
                    </div>
                    <div className="separation"></div>
                    <div className="checkinout">
                        <h3>Check-In and Check-out policies</h3>
                        <ul>
                            <li>Check-in : 4:00 PM</li>
                            <li>Check-out : 10:00 AM</li>
                        </ul>
                    </div>
                    <div className="separation"></div>
                    <div className="cancellation">
                        <h3>Cancellation Policies</h3>
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
