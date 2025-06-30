import { React, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Form from "./components/form.jsx";
import Footer from "./components/Footer.jsx";
import { Link } from "react-router-dom";
import ScrollToTop from "./rarecomponents/scrolltotop.jsx";
import Activities from "./rarecomponents/activities.jsx";
import Wedding from "./rarecomponents/wedding.jsx";

const AccomodationBoxes = [
  {
    id: 1,
    image: "./src/assets/main.jpg",
    text: "Mud Room",
    link: "/Accomodations",
  },
  {
    id: 2,
    image: "./src/assets/main.jpg",
    text: "Mud Room",
    link: "/Accomodations",
  },
  {
    id: 3,
    image: "./src/assets/main.jpg",
    text: "Mud Room",
    link: "/Accomodations",
  },
  {
    id: 4,
    image: "./src/assets/main.jpg",
    text: "Mud Room",
    link: "/Accomodations",
  },
  {
    id: 5,
    image: "./src/assets/main.jpg",
    text: "Mud Room",
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

      <div className="mainimg">
        {" "}
        <img src="./src/assets/main.jpg" alt="ritik" />
      </div>

      <div className="mainpagegallerysection">
        <div className="mainpagegalleryimg">
          <img src="./src/assets/main.jpg" alt="" />
        </div>
        <div className="mainpagegalleryimg">
          <img src="./src/assets/main.jpg" alt="" />
        </div>
        <div className="mainpagegalleryimg">
          <img src="./src/assets/main.jpg" alt="" />
        </div>
        <div className="mainpagegalleryimg">
          <img src="./src/assets/main.jpg" alt="" />
        </div>
        <div className="mainpagegalleryimg">
          <img src="./src/assets/main.jpg" alt="" />
        </div>
        <div className="mainpagegalleryimg">
          <img src="./src/assets/main.jpg" alt="" />
        </div>
      </div>

      <div className="mainaccomodationheading">
        <h1>Accomodations</h1>
      </div>

      <div className="mainaccomodation">
        {AccomodationBoxes.map((box, i) => (
          <Link
            to={box.link}
            key={box.id}
            className={`Accomodationbox ${focusedIndex === i
              ? "focused"
              : focusedIndex !== null
                ? "shrunk"
                : ""
              }`}
            onMouseEnter={() => setFocusedIndex(i)}
            onMouseLeave={() => setFocusedIndex(null)}
          >
            <img src={box.image} alt={box.text} />
            <div className="overlay">
              <h3>{box.text}</h3>
            </div>
          </Link>
        ))}
      </div>

      {/* <Form /> */}

      <Wedding />

      <div className="mainpageeventheading">Events</div>
      <div className="mainpageeventinfo">
        <div className="eventpara">
         <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
          doloribus veritatis! Ad quasi facilis itaque soluta ex nam, placeat
          non illum nemo sed perspiciatis, adipisci cupiditate ducimus molestiae
          esse accusamus?</p>
          <Link to="/event&activities" className="eventlink">View More</Link>
        </div>
        <div className="eventimages">
          <div className="eventimagesbox1">
            <img src="./src/assets/main.jpg" alt="" />
            <img src="./src/assets/main.jpg" alt="" />
          </div>
          <div className="eventimagesbox2">
            <img src="./src/assets/main.jpg" alt="" />
            <img src="./src/assets/main.jpg" alt="" />
          </div>
        </div>
      </div>

       <Activities/> 
      <Footer />
    </>
  );
}

export default App;
