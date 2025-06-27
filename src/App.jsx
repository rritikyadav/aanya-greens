import { React, useState } from "react";
import './App.css';
import Nav from "./components/nav.jsx";
import Form from './components/form.jsx';
import Footer from "./components/Footer.jsx";
import { Link } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop.jsx";

const AccomodationBoxes = [

  { id: 1, image: "./src/assets/main.jpg", text: "Mud Room", link: "/Accomodations" },
  { id: 2, image: "./src/assets/main.jpg", text: "Mud Room", link: "/Accomodations" },
  { id: 3, image: "./src/assets/main.jpg", text: "Mud Room", link: "/Accomodations" },
  { id: 4, image: "./src/assets/main.jpg", text: "Mud Room", link: "/Accomodations" },
  { id: 5, image: "./src/assets/main.jpg", text: "Mud Room", link: "/Accomodations" },
  // {id:6,image:"./src/assets/main.jpg",text:"Mud Room"},

]

function App() {

  const [focusedIndex, setFocusedIndex] = useState(null);


  return (
    <>
      <ScrollToTop/>
      <Nav />

      <div className="mainimg"> <img src="./src/assets/main.jpg" alt="ritik" /></div>

      <div className="gallerysection">
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
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

      <Form />


      <Footer />
    </>
  );
};

export default App
