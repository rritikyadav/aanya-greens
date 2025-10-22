import { useRef, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Form from "./components/form.jsx";
import Footer from "./components/footer.jsx";
import { Link } from "react-router-dom";
import ScrollToTop from "./rarecomponents/scrolltotop.jsx";
import Activities from "./rarecomponents/activities.jsx";
// import Wedding from "./rarecomponents/wedding.jsx";
import Fixedsvg from "./components/fixedsvg.jsx";

const AccomodationBoxes = [
  {
    id: 1,
    image: "./assets/mobile-mudroom.jpeg",
    text: "Mud Room",
    link: "/Accomodations",
  },
  {
    id: 2,
    image: "./assets/common.jpeg",
    text: "Luxury Suites",
    link: "/Accomodations",
  },
  {
    id: 3,
    image: "./assets/tent.jpeg",
    text: "Tent Suites",
    link: "/Accomodations",
  },
  {
    id: 4,
    image: "./assets/glassroom.jpg",
    text: "Glass Room",
    link: "/Accomodations",
  },
  {
    id: 5,
    image: "./assets/pool.jpg",
    text: "Open-Air Pool",
    link: "/Accomodations",
  },
];

function App() {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play();
    }
  }, []);



  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Fixedsvg />

      <div className="mainimg">
        <video muted playsInline autoPlay loop preload="auto" ref={videoRef} >
          <source src={window.innerWidth < 768 ? "/assets/video-mobile.mp4" : "/assets/video-desktop.mp4"} type="video/mp4" />
        </video>
      </div>

      <div className="mainpagegallerysection">
        <div className="mainpagegallerytext">
          <h1>Leopard Trails. Aravalli Views. One Unique Stay.</h1>
        </div>
        <div className="mainpage-gallery-imagesection">
          <div className="mainpagegalleryimg">
            <img src="./assets/pool.jpg" alt="" />
          </div>
          <div className="mainpagegalleryimg">
            <img src="./assets/pool1.jpeg" alt="" />
          </div>
          <div className="mainpagegalleryimg">
            <img src="./assets/bhole.jpeg" alt="" />
          </div>
          <div className="mainpagegalleryimg">
            <img src="./assets/mudroom.jpeg" alt="" />
          </div>
          <div className="mainpagegalleryimg">
            <img src="./assets/mainimg2.jpeg" alt="" />
          </div>
          <div className="mainpagegalleryimg">
            <img src="./assets/mainimg1.jpeg" alt="" />
          </div>
        </div>
      </div>

      <div className="mainpageaccomodationheading">
        <h1> Where You'll Be <span className="greenheading"> Staying</span>  </h1>
        <p>Experience serene comfort in every form — from cozy mud rooms to elegant glass suites.
          Choose from luxury suites, tent stays, or unwind by your private pool amidst nature.</p>
      </div>

      <div className="mainpageaccomodation">
        {AccomodationBoxes.map((box, i) => (
          <Link
            to={box.link}
            key={box.id}
            className={`mainpageAccomodationbox ${focusedIndex === i ? "focused" : focusedIndex !== null ? "shrunk" : ""}`}

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

      {/* <Wedding /> */}

      <div className="mainpageeventbox">
        <div className="mainpageeventheading"> Tailored  <span className="whiteheading"> Events </span>  For You  </div>
        <div className="mainpageeventinfo">
          <div className="eventpara">
            <p>
              <b>Where Every Occasion Becomes a Grand Celebration —</b>
              <br />
              <br />
              From <b>elegant weddings</b> , <b>corporate retreats</b> , and{" "}
              <b>milestone birthdays</b> to <b>poolside soirées</b> ,{" "}
              <b>bonfire evenings</b> , and enchanting <b>live music nights</b> .
              we curate moments that matter. <br /><br /><b>Host your dream event in a setting of
                timeless luxury and unmatched hospitality .</b>
            </p>
            <Link to="/Events" className="eventlink">
              View More
            </Link>
          </div>
          <div className="eventimages">
            <img src="./assets/birthday2.jpg" alt="" />
            <img src="./assets/event1.jpg" alt="" />
          </div>
        </div>
      </div>

      <Activities />

        <div className="foodsection">
          <div className="foodheading"><h1><span className="greenheading">Dining & Delights</span></h1>
</div>
          <div className="foodimgsection">
          <img src="./assets/food1.jpg" alt="" />
          <img src="./assets/food2.jpg" alt="" />
          <img src="./assets/food3.jpg" alt="" />
          <img src="./assets/food4.jpg" alt="" />
          <img src="./assets/food5.jpg" alt="" />
          <img src="./assets/food6.jpg" alt="" />
          </div>
        </div>

      <Form />
      <Footer />
    </>
  );
}

export default App;
