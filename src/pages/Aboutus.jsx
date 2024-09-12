import React from 'react';

import capital from "../assets/capital.jpg";
import icon1 from "../assets/icon1.jpg";
import aboutus1 from"../assets/aboutus1.png";
import cardil1 from "../assets/cardil1.jpg";
import cardil2 from "../assets/cardil2.jpg";
import cardil3 from "../assets/cardil3.jpg";
import whychooseus2 from "../assets/whychooseus2.jpg";
import whychooseus3 from "../assets/whychooseus3.jpg";
import whychooseus1 from "../assets/whychooseus1.jpg";

import HeaderTitle from './HeaderTitle';


const Aboutus = () => {
  return (
    <>
        <HeaderTitle  title = "About Us"/>
    <div className='container-fluid'>

    <div className="container about-conatiner">
      <div className="row">
        <div className="col-sm-6">
          <div className="about-wrapper">
            <h4>WHY CHOOSE US</h4>
            <h2>We Care for Your Roof as if it were Our Own</h2>
            <p>
              We Care for Your Roof as if it were Our Own Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris
              <br/> nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              int. Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint lint occaecat cupidatat non proident, esit anim id
              est laborum Sed iciatis id.
            </p>
            <button>READ MORE</button>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="about-whychoose-img">
            <div className="about-img-wrapper">
              <img className="cart" src={whychooseus1} alt="whychooseus2" />
            </div>
            <div className="about-img-wrapper">
              <img className="cart" src={whychooseus2} alt="whychooseus2" />
              <img className="cart" src={whychooseus3} alt="whychooseus2" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className=" about-roofing-container atbout-gradien">
      <div className="about-wrapper roofing-solutions">
        <h4>ROOFING SOLUTION</h4>
        <h2>Professional Roofing Contractors</h2>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="about-cards">
            <img className="cart" src={aboutus1} width = "80" alt="icon1" />
            <h3>Metal Panel Roofing</h3>
            <p>
              Our goal is to provide the best in roofing maintenance & repairs
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="about-cards">
            <img className="cart" src={aboutus1} width = "80" alt="icon1" />
            <h3>Commercial Roofing</h3>
            <p>
              Our goal is to provide the best in roofing maintenance & repairs
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="about-cards">
            <img className="cart" src={aboutus1} width = "80" alt="icon1" />
            <h3>Metal Panel Roofing</h3>
            <p>
              Our goal is to provide the best in roofing maintenance & repairs
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="about-cards">
            <img className="cart" src={aboutus1} width = "80" alt="icon1" />
            <h3>Roof Inspection</h3>
            <p>
              Our goal is to provide the best in roofing maintenance & repairs
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <section className='container-fluid about-section'>
    <div className="container about-reason-for-people">
      <div className="row  ">
        <div className="col-sm-6">
          <div className="about-reason-img">
            <img className="cart" src={capital} alt="capital" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="about-reason-right">
            <h4>WHY CHOOSE US</h4>
            <h2>Reasons For People Choosing Capital Metal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              dicta qui aliquam autem aperiam aliquid.
            </p>

            <div className="about-cards-wrapper">
              <div className="about-sub-card">
                <div className="about-inner">
                  <img className="cart" src={icon1} width = "40" alt="icon1" />
                  <h5>Quality Material</h5>
                </div>
              </div>
              <div className="about-sub-card">
                <div className="about-inner">
                  <img className="cart" src={icon1} width = "40" alt="icon2" />
                  <h5>Quality Material</h5>
                </div>
              </div>
              <div className="about-sub-card">
                <div className="about-inner">
                  <img className="cart" src={icon1} width = "40"alt="icon2" />
                  <h5>Quality Material</h5>
                </div>
              </div>
              <div className="about-sub-card">
                <div className="about-inner">
                  <img className="cart" src={icon1} width = "40" alt="icon3" />
                  <h5>Quality Material</h5>
                </div>
              </div>
              <div className="about-sub-card">
                <div className="about-inner">
                  <img className="cart" src={icon1} width = "40" alt="icon4" />
                  <h5>Quality Material</h5>
                </div>
              </div>
              <div className="about-sub-card">
                <div className="about-inner">
                  <img className="cart" src={icon1} width = "40" alt="icon4" />
                  <h5>Quality Material</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section className='container-fluid aboutend'>
    <div className="container  about-roofing-container  ">
      <div className="about-wrapper roofing-solutions">
        <h4>ROOFING SOLUTION</h4>
        <h2>Professional Roofing Contractors</h2>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="about-leading">
            <div className="about-leading-card">
              <img className="cart" src={cardil1} alt="cardil1" />
              <div className="about-equipement">
                <h6>Equipement 1</h6>
                <p>Equipment Details text</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="about-leading">
            <div className="about-leading-card">
              <img className="cart" src={cardil2} alt="cardil2" />
              <div className="about-equipement">
                <h6>Equipement 1</h6>
                <p>Equipment Details text</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="about-leading">
            <div className="about-leading-card">
              <img className="cart" src={cardil3} alt="cardil3" />
              <div className="about-equipement">
                <h6>Equipement 1</h6>
                <p>Equipment Details text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  
 
  
    </div>
   
    </>
  );

 
};


export default Aboutus;
