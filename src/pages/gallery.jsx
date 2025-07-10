import React from 'react';
import './gallery.css';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollToTop from '../rarecomponents/scrolltotop.jsx';
import Fixedsvg from '../components/fixedsvg.jsx';

function Gallery (){
    return(
    <>
    <ScrollToTop/>
        <Navbar/>
        <Fixedsvg/>

        <div className="galleryheading">A Glimpse into the Heart of Aanya Greens</div>

            <div className="galleryimages">
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />
                <img src="./assets/main.jpg" alt="" />


            </div>

        <Footer/>
    </>

    )
}

export default Gallery;
