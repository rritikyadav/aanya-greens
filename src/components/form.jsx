import React from "react";
import './form.css';

function Form({ style }) {
  return (

    <>
      <div className="formstart">
        <div className="formheading">
          <h1>For Booking</h1>
          <p>Feel Free To Fill The Form and We Will Reach Out To You</p>
        </div>
        <div className="forminput">
          <form method="post">
            {/* <div className="form-row1"> */}
            <input className="form-name" type="text" name="name" placeholder="Name" required />
            {/* </div> */}
            {/* <div className="form-row2"> */}
            <input className="form-phone" type="tel" name="phone" placeholder="Phone" required />
            <input className="form-event" type="text" name="event" placeholder="Type Of Event" required />
            <input className="form-guests" type="number" name="guests" placeholder="No. of Guests" required />
            {/* </div> */}
            <input className="form-specific-details" type="text" name="specific details" placeholder="Specific Details" />
            <input type="submit" id="booknow" value="Book Now" />
          </form>
        </div>
      </div>
    </>
  )
}
export default Form;