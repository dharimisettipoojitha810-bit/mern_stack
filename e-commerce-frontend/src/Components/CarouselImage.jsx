import React from 'react'
import text from "dom-helpers/esm/text";
const CarouselImage = (props) => {
  return (
    <div>
        <img src={props.text}  style={{height:"550px" ,width:"100vw"}}alt=""/> 
    </div>
  )
}

export default CarouselImage;