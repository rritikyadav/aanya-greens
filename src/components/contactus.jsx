import React from 'react';
import './contactus.css';
import Nav from './nav.jsx';
import Footer from './footer.jsx';
import Form from './form.jsx';

function Contactus(){

    return(
<>
    <Nav/>

    <div className="imagesection"><img src="./src/assets/main.jpg" alt="" /></div>

    <div className="contactinfo">

    <div className="contactcard">
            <h1>Rahul Yadav</h1>
            <p>9999785857</p>
            <p>rahul@email.com</p>
            <p>instagram</p>
    </div>
    <div className="contactcard">
        <h1>Lalit Yadav</h1>
        <p>9898989899</p>
        <p>lalit@email.com</p>
        <p>instagram</p>
    </div>
    <div className="contactcard">
        <h1>socials</h1>
        <p></p>
        <p>lalit@email.com</p>
        <p>instagram</p>
    </div>
    </div>

    <div className="instagram">
    <div className="username">
        <img src="./src/assets/logo.png" alt="" />
        <h1>ananyagreens</h1>
    </div>

    <div className="postcards">
        <div className="postcard"></div>
        <div className="postcard"></div>
        <div className="postcard"></div>
        <div className="postcard"></div>
    </div>
    </div>

    <Form />

    <Footer />  

</>

    )
}
export default Contactus;   