import React from 'react'

function Amenities({image,text}){
    return(
<>
         <div className="aminitiesbox-value">
                <img src={image} alt="" />
                <p>{text}</p>
              </div>
</>

    )
}

export default Amenities;
