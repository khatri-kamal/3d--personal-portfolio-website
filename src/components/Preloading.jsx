import React from "react";
import "./styles.css"; // Assuming you have a separate CSS file for custom styles

/*
The Preloading animation I have is not my own, I got it from this website 
https://codemyui.com/hexagon-cube-loading-animation/ 
all the rights goes to the origional creator for this. 
The website doesn't mention who is the creator of this is.
*/

const Preloader = () => {
  return (
    <div className="container flex justify-center items-center h-screen">
      <div className="cube">
        <div className="sides">
          <div className="top"></div>
          <div className="right"></div>
          <div className="bottom"></div>
          <div className="left"></div>
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
