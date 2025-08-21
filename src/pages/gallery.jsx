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

        <div className='gallery-main-line'></div>

        <div className="galleryheading">A Glimpse into the Heart of <span className='greenheading'>Aanya Greens</span></div>

        <div className='gallery-heading-line'></div>

            <div className="galleryimages">
                <img src="./assets/bhole.jpeg" alt="" />
                <img src="./assets/mainimg3.jpeg" alt="" />
                <img src="./assets/pool1.jpeg" alt="" />
                <img src="./assets/mudroom.jpeg" alt="" />
                <img src="./assets/common.jpeg" alt="" />
                <img src="./assets/room1.jpeg" alt="" />
                <img src="./assets/pool2.jpeg" alt="" />
                <img src="./assets/room2.jpeg" alt="" />
                <img src="./assets/tent.jpeg" alt="" />
                <img src="./assets/pool3.jpeg" alt="" />
                <img src="./assets/tent1.jpeg" alt="" />
                <img src="./assets/birthday1.jpeg" alt="" />
                <img src="./assets/glassroom1.jpeg" alt="" />
                <img src="./assets/tent2.jpeg" alt="" />
                <img src="./assets/birthday2.jpeg" alt="" />
                <img src="./assets/mudroom1.jpeg" alt="" />
                <img src="./assets/mainimg1.jpeg" alt="" />
                <img src="./assets/mudroom2.jpeg" alt="" />
                <img src="./assets/mainimg2.jpeg" alt="" />
                <img src="./assets/tent3.jpeg" alt="" />
                <img src="./assets/mudroom3.jpeg" alt="" />
                <img src="./assets/bathroom1.jpeg" alt="" />
                <img src="./assets/tent4.jpeg" alt="" />
                <img src="./assets/trekking.jpeg" alt="" />
                <img src="./assets/bathroom2.jpeg" alt="" />
                <img src="./assets/gallery1.jpeg" alt="" />
                <img src="./assets/gallery2.jpeg" alt="" />
            </div>

        <Footer/>
    </>

    )
}

export default Gallery;
