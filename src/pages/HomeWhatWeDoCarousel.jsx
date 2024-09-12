import React from "react";
import Slider from "react-slick";
import whatwedo1 from "../assets/whatwedo1.jpg";
import whatwedo2 from "../assets/whatwedo2.jpg";
import whatwedo3 from "../assets/whatwedo3.jpg";
import wicon1 from "../assets/wicon1.jpg";

const WhatWeDoCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,responsive: [
      
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="home-news-blog">
      <div className="container">
        <Slider {...settings}>
          <div class="home-whatwedo-card">
            <img className="cart" src={whatwedo3} alt="whatwedo3" />
            <div class="home-card-equipement">
              <img className="cart" src={wicon1} alt="wicon1" />
              <h6>Create Your Structure</h6>
              <p>
                Our Goal is to provide the best in roofing maintainnace and
                repairing
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="home-whatwedo-card">
            <img className="cart" src={whatwedo2} alt="whatwedo2" />
            <div class="home-card-equipement">
              <img className="cart" src={wicon1} alt="wicon1" />

              <h6>Create Your Structure</h6>
              <p>
                Our Goal is to provide the best in roofing maintainnace and
                repairing
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="home-whatwedo-card">
            <img className="cart" src={whatwedo3} alt="whatwedo3" />
            <div class="home-card-equipement">
              <img className="cart" src={wicon1} alt="wicon1" />

              <h6>Create Your Structure</h6>
              <p>
                Our Goal is to provide the best in roofing maintainnace and
                repairing
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="home-whatwedo-card">
            <img className="cart" src={whatwedo1} alt="whatwedo1" />
            <div class="home-card-equipement">
              <img className="cart" src={wicon1} alt="wicon1" />

              <h6>Create Your Structure</h6>
              <p>
                Our Goal is to provide the best in roofing maintainnace and
                repairing
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="home-whatwedo-card">
            <img className="cart" src={whatwedo2} alt="whatwedo2" />
            <div class="home-card-equipement">
              <img className="cart" src={wicon1} alt="wicon1" />

              <h6>Create Your Structure</h6>
              <p>
                Our Goal is to provide the best in roofing maintainnace and
                repairing
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="home-whatwedo-card">
            <img className="cart" src={whatwedo3} alt="whatwedo3" />
            <div class="home-card-equipement">
              <img className="cart" src={wicon1} alt="wicon1" />

              <h6>Create Your Structure</h6>
              <p>
                Our Goal is to provide the best in roofing maintainnace and
                repairing
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

function HomeWhatWeDoCarouselMain() {
  return (
    <div className="home-what-we-do-carousel">
      <h4>WHAT WE DO</h4>
      <h2>We Offer High-Quality Roofing Services.</h2>
      <div className="container"></div>
      <WhatWeDoCarousel />
    </div>
  );
}

export default HomeWhatWeDoCarouselMain;
