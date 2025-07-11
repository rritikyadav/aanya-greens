import { React, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Form from "./components/form.jsx";
import Footer from "./components/Footer.jsx";
import { Link } from "react-router-dom";
import ScrollToTop from "./rarecomponents/scrolltotop.jsx";
import Activities from "./rarecomponents/activities.jsx";
import Wedding from "./rarecomponents/wedding.jsx";
import Fixedsvg from "./components/fixedsvg.jsx";

const AccomodationBoxes = [
  {
    id: 1,
    image: "./assets/main.jpg",
    text: "Mud Room",
    link: "/Accomodations",
  },
  {
    id: 2,
    image: "./assets/main.jpg",
    text: "Luxury Suites",
    link: "/Accomodations",
  },
  {
    id: 3,
    image: "./assets/main.jpg",
    text: "Tent Suites",
    link: "/Accomodations",
  },
  {
    id: 4,
    image: "./assets/main.jpg",
    text: "Glass Room",
    link: "/Accomodations",
  },
  {
    id: 5,
    image: "./assets/main.jpg",
    text: "Open-Air Pool",
    link: "/Accomodations",
  },
  // {id:6,image:"./src/assets/main.jpg",text:"Mud Room"},
];

function App() {
  const [focusedIndex, setFocusedIndex] = useState(null);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Fixedsvg/>

      <div className="mainimg">
        {" "}
        <img src="./assets/main.jpg" alt="ritik" />
      </div>

      <div className="mainpagegallerysection">
      <div className="mainpagegallerytext">
        <h1>Aravalli Views. Leopard Trails. One Unique Stay.</h1>
      </div>
      <div className="mainpage-gallery-imagesection">
        <div className="mainpagegalleryimg">
          <img src="./assets/main.jpg" alt="" />
        </div>
        <div className="mainpagegalleryimg">
          <img src="./assets/main.jpg" alt="" />
        </div>
        <div className="mainpagegalleryimg">
          <img src="./assets/main.jpg" alt="" />
        </div>
        <div className="mainpagegalleryimg">
          <img src="./assets/main.jpg" alt="" />
        </div>
        <div className="mainpagegalleryimg">
          <img src="./assets/main.jpg" alt="" />
        </div>
        <div className="mainpagegalleryimg">
          <img src="./assets/main.jpg" alt="" />
        </div>
      </div>
      </div>

      <div className="mainpageaccomodationheading">
        <h1>Accomodations</h1>
        <p>Experience serene comfort in every form — from cozy mud rooms to elegant glass suites.
Choose from luxury suites, tent stays, or unwind by your private pool amidst nature.</p>
      </div>

      <div className="mainpageaccomodation">
        {AccomodationBoxes.map((box, i) => (
          <Link
            to={box.link}
            key={box.id}
            className={`mainpageAccomodationbox ${focusedIndex === i ? "focused" : focusedIndex !== null ? "shrunk" : "" }`}
            
            onMouseEnter={() => setFocusedIndex(i)}
            onMouseLeave={() => setFocusedIndex(null)}
          >
            <img src={box.image} alt={box.text} />
            <div className="mainpageaccomodationtext">
              <h3>{box.text}</h3>
            </div>
          </Link>
        ))}
      </div>

      <Wedding />

          <div className="mainpageeventbox">
      <div className="mainpageeventheading">Events</div>
      <div className="mainpageeventinfo">
        <div className="eventpara">
          <p>
            <b>Where Every Occasion Becomes a Grand Celebration —</b>
            <br />
            <br />
            From <b>elegant weddings</b> , <b>corporate retreats</b> , and{" "}
            <b>milestone birthdays</b> to <b>poolside soirées</b> ,{" "}
            <b>bonfire evenings</b> , and enchanting <b>live music nights</b> .
            we curate moments that matter. <br/><br/><b>Host your dream event in a setting of
            timeless luxury and unmatched hospitality .</b>
          </p>
          <Link to="/event&activities" className="eventlink">
            View More
          </Link>
        </div>
        <div className="eventimages">
          <img src="./assets/main.jpg" alt="" />
          <img src="./assets/main.jpg" alt="" />
        </div>
      </div>
      </div>

      <Activities />
      <Form />
      <Footer />
    </>
  );
}

export default App;
