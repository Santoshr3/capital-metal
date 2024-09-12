import React from "react";

import whatwedo3 from "../assets/whatwedo3.jpg";

const HomeNewsAndBlog = () => {
  return (
    <div className="home_news_blog">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 home_news_blog_para">
            <h4>NEWS & BLOG</h4>
            <p>
              Lorem as the Ipum available but our majority have suffered lorem
              alterations in some form, by our byrand clit omised worlds. David
              Parker Roating Expert
            </p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <div class="home-whatwedo-card">
              <img className="cart" src={whatwedo3} alt="whatwedo3" />
              <div class="home-card-equipement">
             <span>12</span>
                <h6>Create Your Structure</h6>
                
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="home-whatwedo-card">
              <img className="cart" src={whatwedo3} alt="whatwedo3" />
              <div class="home-card-equipement">
              <span>16</span>
                <h6>Create Your Structure</h6>
                
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="home-whatwedo-card">
              <img className="cart" src={whatwedo3} alt="whatwedo3" />
              <div class="home-card-equipement">
              <span>18</span>
                <h6>Create Your Structure</h6>
                
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsAndBlog;
