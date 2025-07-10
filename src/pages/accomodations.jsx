import React from "react";
import "./accomodations.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import ScrollToTop from "../rarecomponents/scrolltotop.jsx";
import Fixedsvg from "../components/fixedsvg.jsx";

function Accomodations() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Fixedsvg/>

      <div className="accomodationheading">
        <h1>Accomodations</h1>
        <p>Experience serene comfort in every form — from cozy mud rooms to elegant glass suites.
          Choose from luxury suites, tent stays, or unwind by your private pool amidst nature.</p>
      </div>

      <div className="accomodation-box accomodation-box1">
        <h1>Mud Room</h1>
        <p>
          <b>
            Experience the Earth’s Embrace in Our Traditional Mudroom — a true
            retreat for body and soul.
          </b>
          <br /><br/> &gt;&nbsp; Crafted using ancient Indian techniques with natural
          mud and cow dung, this serene space offers a cool, toxin-free, and
          grounding atmosphere.
          <br /> &gt;&nbsp; The walls breathe with nature, promoting better
          sleep, improved air quality, and a deep sense of calm. Step into a
          room where tradition meets wellness .<br />
        </p>
        <div className="accomodation-line"></div>
        <div className="accomodationbox-img">
          <div className="accomodationbox-mainimg">
            <img src="./assets/main.jpg" alt="" />
          </div>
          <div className="accomodationbox-sideimg">
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
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
        <h1>Luxury Suites</h1>
        <p>
          <b>
            Indulge in the Elegance of Our Luxury Suites — A seamless blend of
            privacy and community .
          </b>
          <br /><br/>
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
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
          </div>
          <div className="accomodationbox-mainimg">
            <img src="./assets/main.jpg" alt="" />
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
        <h1>Tent Suites</h1>
        <p>
          <b>
            Reconnect with Nature in Comfort and Style — A Unique Glamping
            Experience.
          </b>
          <br /><br/>
          &gt;&nbsp; Our air-conditioned luxury tents offer the charm of outdoor
          living with the comfort of modern amenities.
          <br /> &gt;&nbsp; Each tent features a spacious layout, private
          attached bathroom, and elegant interiors inspired by nature.
        </p>
        <div className="accomodation-line"></div>
        <div className="accomodationbox-img">
          <div className="accomodationbox-mainimg">
            <img src="./assets/main.jpg" alt="" />
          </div>
          <div className="accomodationbox-sideimg">
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
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
        <h1>Glass Room</h1>
        <p>
          <b>
            Dine, Dance, and Dream in Our Glass Room — A space crafted for
            intimacy, celebration, and timeless memories.
          </b>
          <br /><br/>
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
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
          </div>
          <div className="accomodationbox-mainimg">
            <img src="./assets/main.jpg" alt="" />
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

      <div className="accomodation-box">
        <h1>Open-Air Pool</h1>
        <p>
          <b>
            Relax, Refresh, and Rejuvenate by the Pool — Relax, Refresh, and
            Rejuvenate by the Pool .
          </b>
          <br /><br/>
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
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
            <img src="./assets/main.jpg" alt="" />
          </div>
          <div className="accomodationbox-mainimg">
            <img src="./assets/main.jpg" alt="" />
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

      <Footer />
    </>
  );
}
export default Accomodations;
