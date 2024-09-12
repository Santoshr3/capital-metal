import React from "react";
import icon2 from "../assets/icon2.jpg";
import roofing from "../assets/roofing.jpg";
const HomeWhyWeChoose = () => {
  return (
    <div className="home-why-choose-us">
      <div className="container">
        <h4>WHY CHOOSE US</h4>
        <h2>Get your Roofing Solutions with our Profession</h2>

        <div className="row">
          <div className="col-sm-6">
            <div className="home-roofing-img">
              <img className="cart" src={roofing} alt="roofing" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <div className="home-roofing-cards">
                  <div className="home-roof-sub-card">
                    <div className="img-block">
                      <img className="cart" src={icon2} alt="icon2" />
                    </div>
                    <h5>Quality Material</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="home-roofing-cards">
                  <div className="home-roof-sub-card">
                    <div className="img-block">
                      <img className="cart" src={icon2} alt="icon2" />
                    </div>
                    <h5>100% Fill Rate</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="home-roofing-cards">
                  <div className="home-roof-sub-card">
                    <div className="img-block">
                      <img className="cart" src={icon2} alt="icon2" />
                    </div>
                    <h5>Fast Delivery</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="home-roofing-cards">
                  <div className="home-roof-sub-card">
                    <div className="img-block">
                      <img className="cart" src={icon2} alt="icon2" />
                    </div>
                    <h5>Color Options</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="home-roofing-cards">
                  <div className="home-roof-sub-card">
                    <div className="img-block">
                      <img className="cart" src={icon2} alt="icon2" />
                    </div>
                    <h5>Expert Roofing</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="home-roofing-cards">
                  <div className="home-roof-sub-card">
                    <div className="img-block">
                      <img className="cart" src={icon2} alt="icon2" />
                    </div>
                    <h5>Affordable Pring</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyWeChoose;
