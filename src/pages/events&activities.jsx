import React from "react";
import "./event&activities.css";
import ScrollToTop from "../rarecomponents/scrolltotop.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import Activities from "../rarecomponents/activities.jsx";
// import Wedding from "../rarecomponents/wedding.jsx";
import Fixedsvg from "../components/fixedsvg.jsx";

function EventsActivities() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Fixedsvg/>

      <div className="event-main-line"></div>

      <div className="eventheading">
        <h1> Tailored  <span className="greenheading"> Events </span>  For You  </h1>
      </div>
      <div className="event-heading-line"></div>

      <div className="eventbox eventbox1">
        <div className="eventboximg">
          <img src="./assets/corporate1.jpeg" alt="" />
          <img src="./assets/corporate2.jpeg" alt="" />
        </div>
        <div className="eventboxinfo">
          <h1>Corporate Events</h1>
          <p>
            &gt;&nbsp; Whether it's a business retreat, team celebration, or a
            formal gathering, our serene resort offers the perfect setting to
            connect, collaborate, and celebrate.
            <br />
            <br /> &gt;&nbsp; With well-appointed spaces, customized dining, and
            a relaxing ambiance, we turn routine meetings into memorable moments .
            <br/><br/> &gt;&nbsp; Let your team unwind, bond, and recharge — all in one exceptional destination .
          </p>
        </div>
      </div>

      <div className="eventmiddleline"></div>

      <div className="eventbox eventbox2">
        <div className="eventboxinfo">
          <h1>Pool Parties</h1>
          <p>
            &gt;&nbsp; Dive into fun with our stunning poolside setting —
            perfect for lively gatherings, birthday bashes, or sunset
            celebrations.
            <br />
            <br /> &gt;&nbsp; With ambient lighting, open-air showers, and ample
            lounge seating, every pool party turns into a vibrant, refreshing
            escape.
            <br/><br/> &gt;&nbsp; Celebrate with music, mocktails, and moments that linger long after the sun sets .
          </p>
        </div>
        <div className="eventboximg">
          <img src="./assets/poolparty1.jpeg" alt="" />
          <img src="./assets/poolparty2.jpeg" alt="" />
        </div>
      </div>

      <div className="eventmiddleline"></div>

      <div className="eventbox eventbox3">
        <div className="eventboximg">
          <img src="./assets/birthday1.jpeg" alt="" />
          <img style={{objectFit:"fill"}} src="./assets/birthday2.jpeg" alt="" />
        </div>
        <div className="eventboxinfo">
          <h1>Birthday Parties</h1>
          <p>
            &gt;&nbsp;  From intimate gatherings to grand birthday bashes, our resort
            provides the perfect backdrop for unforgettable celebrations. <br/><br/> &gt;&nbsp;  With
            beautifully decorated spaces, personalized setups, and a touch of
            nature, every birthday becomes a cherished memory .
            <br/><br/> &gt;&nbsp; Let us take care of the details — you just enjoy the smiles, laughter, and magic of the moment.
          </p>
        </div>
      </div>

      <div className="eventmiddleline"></div>

      <div className="eventbox eventbox4">
        <div className="eventboxinfo">
          <h1>Engagement Celebrations</h1>
          <p>
           &gt;&nbsp; Celebrate the joy of saying “yes” in a setting as beautiful as your love story.<br/><br/>
              &gt;&nbsp; Our resort offers a romantic ambiance, exquisite dining, and personalized touches to make your engagement unforgettable.
                <br/><br/> &gt;&nbsp; From intimate gatherings to grand celebrations, we create moments that reflect your unique love story.
          </p>
        </div>
        <div className="eventboximg">
          <img src="./assets/engagement1.jpeg" alt="" />
          <img src="./assets/engagement2.jpeg" alt="" />
        </div>
      </div>

      <div className="eventmiddleline"></div>

      <Activities />
      <Footer />
    </>
  );
}

export default EventsActivities;
