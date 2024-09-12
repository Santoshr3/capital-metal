import React from 'react'
import logo from "../assets/logo.png";
import doblearrow from "../assets/doble-arrow.png";
import ads1 from "../assets/ads1.png";
import ads2 from "../assets/ads2.png";
import ads3 from "../assets/ads3.png";
import ads4 from "../assets/ads4.png";
import ads5 from "../assets/ads5.png";
import ads6 from "../assets/ads6.png";


export default function Footer() {
  return (
<footer className="footer text-light pt-5">
        <div className="container">
          {/* <div className="row text-center text-md-start">
            <div className="col-md-4 mb-4">
              <div className="card border-0 bg-primary text-light">
                <div className="card-body d-flex align-items-center">
                  <i className="fas fa-phone-alt fa-2x"></i>
                  <div className="ms-3">
                    <h6>Call us Anytime</h6>
                    <p>(386) 752-2950</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 bg-primary text-light">
                <div className="card-body d-flex align-items-center">
                  <i className="fas fa-envelope fa-2x"></i>
                  <div className="ms-3">
                    <h6>Send Email</h6>
                    <p>info@support.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 bg-primary text-light">
                <div className="card-body d-flex align-items-center">
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <div className="ms-3">
                    <h6>Our Address</h6>
                    <p>145, Green Park, Street 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Footer Links and Info */}
          <div className="row mt-3">
            <div className="col-md-3 mb-4 col-sm-12 col-xs-12">
              <img src={logo} alt="Logo" style={{ width: '150px' }} />
              <p className="mt-3" style={{width:"80%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed aliquam</p>
            </div>
            <div className="col-md-2  col-sm-12 col-xs-12 mb-4">
              <h6>Quick Links</h6>
              <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none"><img src={doblearrow} />Home</a></li>
                <li><a href="/" className="text-light text-decoration-none"><img src={doblearrow} />About Us</a></li>
                <li><a href="/" className="text-light text-decoration-none"><img src={doblearrow} />Resources</a></li>
                <li><a href="/" className="text-light text-decoration-none"><img src={doblearrow} />Products</a></li>
                <li><a href="/" className="text-light text-decoration-none"><img src={doblearrow} />Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-2  col-sm-12 col-xs-12 mb-4">
              <h6>Company</h6>
              <ul className="list-unstyled">              
              <li><a href="/" className="text-light text-decoration-none"><img src={doblearrow} />Installation Detail</a></li>
                <li><a href="/" className="text-light text-decoration-none"><img src={doblearrow} />Metal Panel</a></li>
                <li><a href="/"className="text-light text-decoration-none"><img src={doblearrow} />Trim Offerings</a></li>
                <li><a href="/" className="text-light text-decoration-none"><img src={doblearrow} />Roof Panels</a></li>
                <li><a href="/" className="text-light text-decoration-none"><img src={doblearrow} />Roofing Supplies</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12 mb-4">
              <h6>Recent Ads</h6>
               <div className='recent-ads'>
               <img src={ads1} alt="Logo" style={{ width: '80px' }} />
               <img src={ads2} alt="Logo" style={{ width: '80px' }} />
               <img src={ads3} alt="Logo" style={{ width: '80px' }} />
               <img src={ads4} alt="Logo" style={{ width: '80px' }} />
               <img src={ads5} alt="Logo" style={{ width: '80px' }} />
               <img src={ads6} alt="Logo" style={{ width: '80px' }} />
               </div>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 mb-4">
              
              <div className="follow-us">
                <h6>Follow us on:</h6>
                <a href="/" className="text-light me-2"><i className="fab fa-facebook-f"></i></a>
                <a href="/" className="text-light me-2"><i className="fab fa-instagram"></i></a>
                <a href="/" className="text-light me-2"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="row mt-4  text-center">
            <div className="col-md-12 col-sm-12 col-xs-12 footer-rights">
              <p className="mb-0">Privacy Policy &nbsp;  Terms & Conditions  &nbsp;   Support</p>
              <p className="mb-0">2024 All rights reserved | Powered by <a href="/" className="text-light text-decoration-none">Social Lexicon</a></p>
            </div>
          </div>
        </div>
      </footer>  )
}
