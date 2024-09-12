import React from "react";
import vicon from "../assets/vicon.jpg";

const HomeVideoBanner = () => {
  return (
    <div className="home-video-banner">
      <div className="container">
        <div className="video-inner">
          <div className="vtext">
            <h1>Providing Best Quality Roofing and Fixinig Service to all</h1>
          </div>
          <div className="vimg">
            <img className="cart" src={vicon} alt="vicon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVideoBanner;
