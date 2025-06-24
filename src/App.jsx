import React from "react";
import './App.css';
import Nav from './components/nav.jsx';
import Form from './components/form.jsx';
import Footer from './components/footer.jsx';

function App() {


  return (
    <>
    <Nav/>

      <div className="mainimg"> <img src="./src/assets/main.jpg" alt="ritik" /></div>

      <div className="gallerysection">
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
        <div className="img"><img src="./src/assets/main.jpg" alt="" /></div>
      </div>


      <Form/>
      <Footer/>
    </>
  );
};

export default App
