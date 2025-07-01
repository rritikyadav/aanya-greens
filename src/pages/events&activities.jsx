import React from "react";
import "./event&activities.css";
import ScrollToTop from "../rarecomponents/scrolltotop.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Activities from "../rarecomponents/activities.jsx";
import Wedding from "../rarecomponents/wedding.jsx";

function EventsActivities() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Wedding />

            <div className="eventheading">
                <h1>Events</h1>
            </div>

            <div className="eventbox eventbox1">
                <div className="eventboximg">
                    <img src="./src/assets/main.jpg" alt="" />
                    <img src="./src/assets/main.jpg" alt="" />
                </div>
                <div className="eventboxinfo">
                    <h1>Corporate Parties</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        qui vel enim deserunt explicabo. Similique ipsa quibusdam non
                        eaque deleniti nostrum obcaecati. Doloribus esse aliquam ex nulla
                        asperiores necessitatibus repudiandae!
                    </p>
                </div>
            </div>

            <div className="eventmiddleline"></div>

            <div className="eventbox eventbox2">
                <div className="eventboxinfo">
                    <h1>Corporate Parties</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        qui vel enim deserunt explicabo. Similique ipsa quibusdam non
                        eaque deleniti nostrum obcaecati. Doloribus esse aliquam ex nulla
                        asperiores necessitatibus repudiandae!
                    </p>
                </div>
                <div className="eventboximg">
                    <img src="./src/assets/main.jpg" alt="" />
                    <img src="./src/assets/main.jpg" alt="" />
                </div>
            </div>

            <div className="eventmiddleline"></div>

            <div className="eventbox eventbox3">
                <div className="eventboximg">
                    <img src="./src/assets/main.jpg" alt="" />
                    <img src="./src/assets/main.jpg" alt="" />
                </div>
                <div className="eventboxinfo">
                    <h1>Corporate Parties</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        qui vel enim deserunt explicabo. Similique ipsa quibusdam non
                        eaque deleniti nostrum obcaecati. Doloribus esse aliquam ex nulla
                        asperiores necessitatibus repudiandae!
                    </p>
                </div>
            </div>

            <div className="eventmiddleline"></div>

            <div className="eventbox eventbox4">
                <div className="eventboxinfo">
                    <h1>Corporate Parties</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        qui vel enim deserunt explicabo. Similique ipsa quibusdam non
                        eaque deleniti nostrum obcaecati. Doloribus esse aliquam ex nulla
                        asperiores necessitatibus repudiandae!
                    </p>
                </div>
                <div className="eventboximg">
                    <img src="./src/assets/main.jpg" alt="" />
                    <img src="./src/assets/main.jpg" alt="" />
                </div>
            </div>

            <div className="eventmiddleline"></div>
           
            <Activities/>
            <Footer />
        </>
    );
}

export default EventsActivities;
