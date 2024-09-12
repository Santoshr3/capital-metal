import React from "react";
import banner from "../assets/banner.jpg";
import icon2 from "../assets/icon2.png";
import icon1 from "../assets/icon1.png";
import homecontractors from "../assets/homecontractors.png";

const HomeBanner = () => {
  return (
    // banner starts
    <>
      <div className="home-banner-main">
        <div className="container-fluid">
          <div className="home-banner-sub">
            <h4>High Quality Craftsmanship and Materials.</h4>
            <h2>CAPITAL METAL SUPPLY</h2>
            <p>
              Our goal is to provide the best in roofing maintenance and
              repairs. Our roofing contractors are highly skilled and trained
              and wey reof lasts for many years, without having to replace it
              prematurely Outstanding service
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      {/* // banner ends */}

      <div className="home-why-contractor-refers">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="home-contractors-inner">
                <div className="home-banner-contract">
                  <img
                    className="cart"
                    src={homecontractors}
                    alt="homecontractors"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="home-contractors-inner">
                <h4>WHY CONTRACTORS PREFER</h4>
                <h2>We Are Committed To Provide Quality Roofing</h2>
                <p>
                  Contractors understand the challenges of locating and
                  acquiring custom- length steel roofing, as well as the need to
                  transport it to the job site promptly and damage-free. At
                  Capital Metal, we have created a technique, Contractors
                  understand the challenges of locating and acquiring
                </p>
                <div className="home-contractors-cards">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="homecard left">
                        <img className="cart" src={icon1} alt="icon2" />
                        <h5>Quality Material</h5>
                        <p>
                          Our goal is to provide the best in roofing maintenance
                          & repair
                        </p>
                        
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="homecard">
                        <img className="cart" src={icon2} alt="icon2" />
                        <h5>Quality Material</h5>
                        <p>
                          Our goal is to provide the best in roofing maintenance
                          & repair
                        </p>
                      </div>
                    </div>
                  </div>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
