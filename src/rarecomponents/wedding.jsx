import React from "react";
import "./wedding.css";

function Wedding() {
    return (

        <>
            <div className="weddingbox">
                <div className="weddingheading"> <span className="greenheading">Vivaah </span> At Aanya Greens</div>
                <div className="weddingimages">
                    <div className="verticalweddingimg">
                        <video muted playsInline autoPlay loop preload="auto" > <source src='./assets/videos/video1.mp4' type="video/mp4" /></video>
                    </div>
                    <div className="horizontalweddingimg">
                        <video muted playsInline autoPlay loop preload="auto" > <source src='./assets/videos/video7.mp4' type="video/mp4" /></video>
                    </div>
                    <div className="verticalweddingimg">
                        <video muted playsInline autoPlay loop preload="auto" > <source src='./assets/videos/video6.mp4' type="video/mp4" /></video>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Wedding;