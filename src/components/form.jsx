import React, { useState } from "react";
import "./form.css";
import axios from "axios";

function Form() {
  const [FormData, setformData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    event: "",
  });

  const handleChange = (e) => {
    setformData({
      ...FormData,[e.target.name] : e.target.value
    });

  };

  const handlesubmit = async(e) => {
    e.preventDefault();
    const a = await axios.post(`https://server-aanyagreens.onrender.com/dashboard`,FormData)
    console.log(a);
  };

  return (
    <>
      <div className="formstart">
        <div className="formheading">
          <h1>For Booking</h1>
          <p>Feel Free To Fill The Form and We Will Reach Out To You</p>
        </div>
        <div className="forminput">
          <form onSubmit={handlesubmit}>
            <input
              onChange={handleChange}
              className="form-name"
              type="text"
              name="name"
              value={FormData.name}
              placeholder="Name"
              required
            />
            <input
              onChange={handleChange}
              className="form-phone"
              type="tel"
              name="phone"
              minLength={10}
              maxLength={10}
              value={FormData.phone}
              placeholder="Phone"
              required
            />
            <input
              onChange={handleChange}
              className="form-email"
              type="email"
              name="email"
              value={FormData.email}
              placeholder="E-Mail"
              required
            />
            <input
              onChange={handleChange}
              className="form-guests"
              type="number"
              name="guests"
              value={FormData.guests}
              placeholder="No. of Guests"
              required
            />
            <input
              onChange={handleChange}
              className="form-event"
              type="text"
              name="event"
              value={FormData.specificDetails}
              placeholder="Type of Event And Other Details"
            />
            <input type="submit" id="booknow" value="Book Now" />
          </form>
        </div>
      </div>
    </>
  );
}
export default Form;
