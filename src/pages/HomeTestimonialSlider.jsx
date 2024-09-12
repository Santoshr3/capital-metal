import React from "react";
import Slider from "react-slick";
import testimonial from "../assets/testimonial.jpg";

const HomeTestimonialSlider = () => {
  const settings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    speed: 3000, // Speed of the slide transition (in milliseconds)
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 1000, // Speed of auto-scrolling (in milliseconds)
  };

  return (
    <div className="home-testimonial-blog">
      <div className="container">
        <Slider {...settings}>
          <div className="testimonial-slider-card">
            <div className="home-test-slider">
              <div className="testimonial-img-block">
                <img className="cart" src={testimonial} alt="testimonial" />
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illum blanditiis eius aliquid nobis nisi quis voluptatibus
                  excepturi explicabo, ipsa
                </p>
                <h6>David Parker</h6>
                <span>Roofing Expert</span>
              </div>
            </div>
          </div>
          <div className="testimonial-slider-card">
            <div className="home-test-slider">
              <div className="testimonial-img-block">
                <img className="cart" src={testimonial} alt="testimonial" />
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illum blanditiis eius aliquid nobis nisi quis voluptatibus
                  excepturi explicabo, ipsa
                </p>
                <h6>David Parker</h6>
                <span>Roofing Expert</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

const HomeTestimonialPage = () => {
  return (
    <div className="home-testimonials">
      <div className="container">
        <h4>TESTIMONIALS</h4>
        <h2>Some of Our Respected Happy Clients Say</h2>
        <HomeTestimonialSlider />
      </div>
    </div>
  );
};

export default HomeTestimonialPage;
