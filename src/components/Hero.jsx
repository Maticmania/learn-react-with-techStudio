import React from "react";
import heroimage from "../assets/images/Monkey-Main.jpg";


const Hero = (props) => {
  // Destructuring props
  const {heading, image=heroimage} = props

  return (
    
    <div>
      
      <div style={{ backgroundColor: "green", color: "yellow" }}>
        <img src={image} />
      </div>
      {/* <h1>Welcome to my Page</h1> */}
      <h1>{heading}</h1>
    </div>
  );
};

export default Hero;
