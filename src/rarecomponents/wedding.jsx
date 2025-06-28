import React from "react";
import "./wedding.css";

function Wedding() {
    return (

        <>
            <div className="weddingheading"> Weddings By Aanya Greens</div>
            <div className="weddingimages">
                <div className="firstdouble">
                    <img src="./src/assets/main.jpg" alt="" />
                    <img src="./src/assets/main.jpg" alt="" />
                </div>
                <img className="verticalweddingimg" src="./src/assets/main.jpg" alt="" />
                <img className="horizontalweddingimg" src="./src/assets/main.jpg" alt="" />
                <img className="verticalweddingimg" src="./src/assets/main.jpg" alt="" />
                <div className="seconddouble">
                    <img src="./src/assets/main.jpg" alt="" />
                    <img src="./src/assets/main.jpg" alt="" />
                </div>
            </div>
        </>

    )
}
export default Wedding;