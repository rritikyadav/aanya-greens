import React from "react";
import "./aboutus.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import Amenities from "../rarecomponents/aboutusamenities.jsx";
import ScrollToTop from "../rarecomponents/scrolltotop.jsx";
import Fixedsvg from "../components/fixedsvg.jsx";

function AboutUs() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Fixedsvg />

            <div className="outer-white-box">
                <div className="white-box">
                    <div className="property-info">
                        <h2>Property Information</h2>
                        <p>
                           Aanya Greens – A soulful retreat beneath the Aravalli Hills, rooted in nature, harmony, and wild beauty.
                        </p>
                    </div>
                    <div className="aboutus-separationline"></div>
                    <div className="property-amenities">
                        <h3 className="h3">Property Amenities</h3>
                        <div className="amenities-box">
                            <Amenities image={"./assets/svgs/check-in-out.svg"} text={"Private check-in/out"} />
                            <Amenities image={"./assets/svgs/lounge.svg"} text={"Lounge"} />
                            <Amenities image={"./assets/svgs/fireplace.svg"} text={"Fireplace"} />
                            <Amenities image={"./assets/svgs/garden.svg"} text={"Garden"} />
                            <Amenities image={"./assets/svgs/bar.svg"} text={"Bar-crawls"} />
                            <Amenities image={"./assets/svgs/open-airpool.svg"} text={"open-Air Bath"} />
                            <Amenities image={"./assets/svgs/opensitting.svg"} text={"open-Air Sitting"} />
                            <Amenities image={"./assets/svgs/pet.svg"} text={"Pet-Friendly Environment"} />
                            <Amenities image={"./assets/svgs/parking.svg"} text={"Guest Parking"} />
                            <Amenities image={"./assets/svgs/wifi.svg"} text={"Free Internet"} />
                            <Amenities image={"./assets/svgs/amenitiesac.svg"} text={"Air Condetioning"} />
                            <Amenities image={"./assets/svgs/first-aidkit.svg"} text={"First-Aid kits"} />
                            <Amenities image={"./assets/svgs/spray.svg"} text={"Disinfected Areas"} />
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

            <Footer />
        </>
    );
}
export default AboutUs;
