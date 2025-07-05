import React from "react";
import "./activities.css";

function Activities() {
    return(

        <>
             <div className="activitiesheading">
                <h1>Activities</h1>
            </div>
            <div className="activitiesbox">
                <div className="activities activity1">
                    <img src="./assets/main.jpg" alt="" />
                    <h1>Trekking</h1>
                </div>
                <div className="activities activity2">
                    <img src="./assets/main.jpg" alt="" />
                   <h1>Bon-Fire</h1>
                </div>
                <div className="activities activity3">
                    <img src="./assets/main.jpg" alt="" />
                    <h1>Pool Volleyball</h1>
                </div>
                <div className="activities activity4">
                    <img src="./assets/main.jpg" alt="" />
                    <h1>Kids Activities</h1>
                </div>
            </div>
        </>

    )
}

export default Activities;