import React from "react";
import "./wedding.css";

function Wedding() {
    return (

        <>
            <div className="weddingheading"> Weddings By Aanya Greens</div>
            <div className="weddingimages">
                <div className="firstdouble">
                    <img src="./assets/main.jpg" alt="" />
                    <img src="./assets/main.jpg" alt="" />
                </div>
                <img className="verticalweddingimg" src="./assets/main.jpg" alt="" />
                <img className="horizontalweddingimg" src="./assets/main.jpg" alt="" />
                <img className="verticalweddingimg" src="./assets/main.jpg" alt="" />
                <div className="seconddouble">
                    <img src="./assets/main.jpg" alt="" />
                    <img src="./assets/main.jpg" alt="" />
                </div>
            </div>
        </>

    )
}
export default Wedding;