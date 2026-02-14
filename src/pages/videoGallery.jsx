import './videoGallery.css';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollToTop from '../rarecomponents/scrolltotop.jsx';
import Fixedsvg from '../components/fixedsvg.jsx';

function Videogallery() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Fixedsvg />

            <div className='videoGallery-main-line'></div>

            <div className="videoGalleryheading">Stories and Moments from the Heart of <span className='greenheading'>Aanya Greens</span></div>

            <div className='videoGallery-heading-line'></div>

            <div className="videoGalleryvideos">
                <video muted playsInline autoPlay loop preload="auto" ><source src='./assets/videos/video1.mp4' type="video/mp4" /></video>
                <video muted playsInline autoPlay loop preload="auto" ><source src='./assets/videos/video2.mp4' type="video/mp4" /></video>
                <video muted playsInline autoPlay loop preload="auto" ><source src='./assets/videos/video3.mp4' type="video/mp4" /></video>
                <video muted playsInline autoPlay loop preload="auto" ><source src='./assets/videos/video4.mp4' type="video/mp4" /></video>
                <video muted playsInline autoPlay loop preload="auto" ><source src='./assets/videos/video5.mp4' type="video/mp4" /></video>
                <video muted playsInline autoPlay loop preload="auto" ><source src='./assets/videos/video6.mp4' type="video/mp4" /></video>
                <video muted playsInline autoPlay loop preload="auto" ><source src='./assets/videos/video7.mp4' type="video/mp4" /></video>
                <video muted playsInline autoPlay loop preload="auto" ><source src='./assets/videos/video8.mp4' type="video/mp4" /></video>
                <video muted playsInline autoPlay loop preload="auto" ><source src='./assets/videos/video9.mp4' type="video/mp4" /></video>
            </div>

            <Footer />
        </>

    )
}

export default Videogallery;
