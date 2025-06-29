import React from "react";
import './form.css';

function Form({ style }) {
  return (

    <>
      <div className="formstart">
        <div className="formheading">
          <h1>For Booking</h1>
          <p>Wanna Book For Parties? Feel Free To Fill The Form</p>
        </div>
        <div className="forminput">
          <form method="post">
            .formrow1
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Phone" required />
            <input type="text" name="event" placeholder="Event" required />
            <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              required
            />
            <input
              type="text"
              name="specific details"
              placeholder="Specific Details"
            />
            <input type="submit" id="booknow" value="Book Now" />
          </form>
        </div>
      </div>
    </>
  )
}
export default Form;