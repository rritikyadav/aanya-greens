import React, { useState } from "react";
import "./form.css";

function Form() {
  const [FormData, setformData] = useState({
    name: "",
    phone: "",
    event: "",
    guests: "",
    specificDetails: "",
  });

  const handleChange = (e) => {
    setformData({
      ...FormData,[e.target.name] : e.target.value
    });

  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
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
              value={FormData.phone}
              placeholder="Phone"
              required
            />
            <input
              onChange={handleChange}
              className="form-event"
              type="text"
              name="event"
              value={FormData.event}
              placeholder="Type Of Event"
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
              className="form-specific-details"
              type="text"
              name="specificDetails"
              value={FormData.specificDetails}
              placeholder="Specific Details"
            />
            <input type="submit" id="booknow" value="Book Now" />
          </form>
        </div>
      </div>
    </>
  );
}
export default Form;
