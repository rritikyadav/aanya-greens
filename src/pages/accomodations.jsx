import React from "react";
import "./accomodations.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../rarecomponents/scrolltotop.jsx";
import Fixedsvg from "../components/fixedsvg.jsx";

function Accomodations() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Fixedsvg />

      <div className="accomodation-main-line"></div>

      <div className="accomodationheading">
        <h1>Where You'll Be <span className="greenheading"> Staying</span>  </h1>
        <p>Experience serene comfort in every form — from cozy mud rooms to elegant glass suites.
          Choose from luxury suites, tent stays, or unwind by your private pool amidst nature.</p>
      </div>
      <div className="accomodation-heading-line"></div>


      <div className="accomodation-box">
        <h1>Luxury Suites</h1>
        <p>
          <b style={{ color: "rgb(3, 45, 39)" }}>
            Indulge in the Elegance of Our Luxury Suites — A seamless blend of
            privacy and community .
          </b>
          <br /><br />
          &gt;&nbsp; Designed for comfort and sophistication, each
          air-conditioned suite features spacious interiors, premium
          furnishings, and serene views .
          <br /> &gt;&nbsp; Guests enjoy access to a beautifully appointed
          common sitting area — perfect for relaxing, reading, or quiet
          conversations .
        </p>
        <div className="accomodation-line"></div>
        <div className="accomodationbox-img">
          <div className="accomodationbox-sideimg">
            <img src="./assets/room1.jpeg" alt="" />
            <img style={{ objectPosition: "right" }} src="./assets/bathroom1.jpeg" alt="" />
            <img style={{ objectPosition: "right" }} src="./assets/bathroom2.jpeg" alt="" />
            <img src="./assets/room2.jpeg" alt="" />
          </div>
          <div className="accomodationbox-mainimg">
            <img src="./assets/common.jpeg" alt="" />
          </div>
        </div>
        <div className="accomodationbox-svgs">
          <div className="svg">
            <img src="./assets/svgs/wifi.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/roomservice.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/tv.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/ac.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/customersupport.svg" alt="" />
          </div>
        </div>
        <div className="svg-explain">
          <p>Wifi | Tv | RoomService | Ac | customersupport</p>
        </div>
        <div className="accomodation-svgline"></div>
      </div>

      <div className="accomodation-box">
        <h1>Glass Haul</h1>
        <p>
          <b style={{ color: "rgb(3, 45, 39)" }}>
            Dine, Dance, and Dream in Our Glass Haul — A space crafted for
            intimacy, celebration, and timeless memories.
          </b>
          <br /><br />
          &gt;&nbsp; Surrounded by serene views, this air-conditioned glass
          haven features a private minibar, ambient lighting, and live music for
          the perfect evening .
          <br />
          &gt;&nbsp; Whether it’s a romantic dinner or a night of dancing under
          the stars, every moment here is unforgettable .
        </p>
        <div className="accomodation-line"></div>
        <div className="accomodationbox-img">
          <div className="accomodationbox-sideimg">
            <img src="./assets/glassroom1.jpg" alt="" />
            <img src="./assets/glassroom2.jpg" alt="" />
            <img style={{ objectPosition: "left" }} src="./assets/glassroom.jpg" alt="" />
            <img src="./assets/glassroom3.jpg" alt="" />
          </div>
          <div className="accomodationbox-mainimg">
            <img src="./assets/glassroom.jpg" alt="" />
          </div>
        </div>
        <div className="accomodationbox-svgs">
          <div className="svg">
            <img src="./assets/svgs/wifi.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/roomservice.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/speaker.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/ac.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/customersupport.svg" alt="" />
          </div>
        </div>
        <div className="svg-explain">
          <p>Wifi | RoomService | Live Music | Ac | customersupport</p>
        </div>
        <div className="accomodation-svgline"></div>
      </div>

      <div className="accomodation-box accomodation-box1">
        <h1>Mud Room</h1>
        <p>
          <b style={{ color: "rgb(3, 45, 39)" }}>
            Experience the Earth’s Embrace in Our Traditional Mudroom — a true
            retreat for body and soul.
          </b>
          <br /><br /> &gt;&nbsp; Crafted using ancient Indian techniques with natural
          mud and cow dung, this serene space offers a cool, toxin-free, and
          grounding atmosphere.
          <br /> &gt;&nbsp; The walls breathe with nature, promoting better
          sleep, improved air quality, and a deep sense of calm. Step into a
          room where tradition meets wellness .<br />
        </p>
        <div className="accomodation-line"></div>
        <div className="accomodationbox-img">
          <div className="accomodationbox-mainimg">
            <img style={{ objectPosition: "top" }} src="./assets/mudroom.jpeg" alt="" />
          </div>
          <div className="accomodationbox-sideimg">
            <img src="./assets/mudroom4.jpeg" alt="" />
            <img src="./assets/mudroom3.jpg" alt="" />
            <img src="./assets/mudroom2.jpeg" alt="" />
            <img src="./assets/mudroom1.jpeg" alt="" />
          </div>
        </div>
        <div className="accomodationbox-svgs">
          <div className="svg">
            <img src="./assets/svgs/wifi.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/roomservice.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/ac.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/bathroom.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/customersupport.svg" alt="" />
          </div>
        </div>
        <div className="svg-explain">
          <p>Wifi | RoomService | Ac | Attached Washrooms | customersupport</p>
        </div>
        <div className="accomodation-svgline"></div>
      </div>


      <div className="accomodation-box">
        <h1>Tent Suites</h1>
        <p>
          <b style={{ color: "rgb(3, 45, 39)" }}>
            Reconnect with Nature in Comfort and Style — A Unique Glamping
            Experience.
          </b>
          <br /><br />
          &gt;&nbsp; Our air-conditioned luxury tents offer the charm of outdoor
          living with the comfort of modern amenities.
          <br /> &gt;&nbsp; Each tent features a spacious layout, private
          attached bathroom, and elegant interiors inspired by nature.
        </p>
        <div className="accomodation-line"></div>
        <div className="accomodationbox-img">
          <div className="accomodationbox-mainimg">
            <img src="./assets/tent.jpeg" alt="" />
          </div>
          <div className="accomodationbox-sideimg">
            <img src="./assets/tent1.jpeg" alt="" />
            <img src="./assets/tent2.jpeg" alt="" />
            <img src="./assets/tent3.jpeg" alt="" />
            <img src="./assets/tent4.jpeg" alt="" />
          </div>
        </div>
        <div className="accomodationbox-svgs">
          <div className="svg">
            <img src="./assets/svgs/wifi.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/roomservice.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/ac.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/bathroom.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/customersupport.svg" alt="" />
          </div>
        </div>
        <div className="svg-explain">
          <p>Wifi | RoomService | Ac | Attached Washrooms | customersupport</p>
        </div>
        <div className="accomodation-svgline"></div>
      </div>


      <div className="accomodation-box">
        <h1>Open-Air Pool</h1>
        <p>
          <b style={{ color: "rgb(3, 45, 39)" }}>
            Relax, Refresh, and Rejuvenate by the Pool — Relax, Refresh, and
            Rejuvenate by the Pool .
          </b>
          <br /><br />
          &gt;&nbsp; Our elegantly designed pool area features comfortable
          seating, tranquil ambiance, and an open-air shower for a refreshing
          rinse under the sky.
          <br />
          &gt;&nbsp; Whether you're soaking in the sun, enjoying a quiet evening
          by the water, or simply unwinding with loved ones .
        </p>
        <div className="accomodation-line"></div>
        <div className="accomodationbox-img">
          <div className="accomodationbox-sideimg">
            <img src="./assets/pool1.jpeg" alt="" />
            <img src="./assets/pool2.jpg" alt="" />
            <img style={{ objectPosition: "bottom" }} src="./assets/pool3.jpeg" alt="" />
            <img src="./assets/pool4.jpeg" alt="" />
          </div>
          <div className="accomodationbox-mainimg">
            <img src="./assets/pool.jpg" alt="" />
          </div>
        </div>
        <div className="accomodationbox-svgs">
          <div className="svg">
            <img src="./assets/svgs/wifi.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/openshower.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/swimtube.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/speaker.svg" alt="" />
          </div>
          <div className="svg">
            <img src="./assets/svgs/opensitting.svg" alt="" />
          </div>
        </div>
        <div className="svg-explain">
          <p>Wifi | Open Shower | Swim Tube | Live Music | open-Air Sitting</p>
        </div>
        <div className="accomodation-svgline"></div>
      </div>


      <div className="accomodation-box">
        <h1>Common Areas</h1>
        <p>
          <b style={{ color: "rgb(3, 45, 39)" }}>
            Relax, Refresh, and Rejuvenate by the Scenic Views - Breathe in calm, surrounded by green.
          </b>
          <br /><br />
          &gt;&nbsp; Stroll through lush, landscaped gardens where nature’s beauty meets serenity.
          <br />
          &gt;&nbsp; The vibrant flora, peaceful walking paths, and cozy seating nooks invite guests to relax, reflect, or enjoy a quiet morning coffee surrounded by greenery.
        </p>
        <div className="accomodation-line"></div>
        <div className="accomodationbox-img">
          <div className="accomodationbox-sideimg">
            <img src="./assets/gallery7.jpg" alt="" />
            <img src="./assets/mainimg1.jpeg" alt="" />
            <img style={{ objectPosition: "bottom" }} src="./assets/bonfire.jpg" alt="" />
            <img src="./assets/gallery8.jpg" alt="" />
          </div>
          <div className="accomodationbox-mainimg">
            <img src="./assets/mainimg2.jpeg" alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Accomodations;
