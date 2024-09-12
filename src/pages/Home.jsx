// src/pages/Home.jsx
import React from 'react';
import HomeBanner from './HomeBanner';
import HomeNewsAndBlog from './HomeNewsAndBlog';
import HomeTestimonialPage from './HomeTestimonialSlider';
import HomeVideoBanner from './HomeVideoBanner';
import HomeWhatWeDoCarouselMain from './HomeWhatWeDoCarousel';
import HomeWhyWeChoose from './HomeWhyWeChoose';


const Home = () => {
  return (
    <>
    <HomeBanner />
        <HomeWhatWeDoCarouselMain />
        <HomeVideoBanner />
        <HomeWhyWeChoose />
        <HomeTestimonialPage />
        <HomeNewsAndBlog />
    </>
  );
};

export default Home;
