import React from "react";
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
    <footer className="footer text-light">
      <div className="container">
        <div className="row ">
          <div className="col-md-3 mb-4 col-sm-12 col-xs-12">
            <img src={logo} alt="Logo" style={{ width: "150px" }} />
            <p className="mt-3" style={{ width: "80%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Mauris sed aliquam
            </p>
          </div>
          <div className="col-md-2  col-sm-12 col-xs-12 mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li className="text-light">
                <img src={doblearrow} alt="Arrow" />
                Home
              </li>
              <li className="text-light">
                <img src={doblearrow} alt="Arrow" />
                About Us
              </li>
              <li className="text-light">
                <img src={doblearrow} alt="Arrow" />
                Resources
              </li>
              <li className="text-light">
                <img src={doblearrow} alt="Arrow" />
                Products
              </li>
              <li className="text-light">
                <img src={doblearrow} alt="Arrow" />
                Contact Us
              </li>
            </ul>
          </div>
          <div className="col-md-2  col-sm-12 col-xs-12 mb-4">
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li className="text-light">
                <img src={doblearrow} alt="Arrow" />
                Installation Detail
              </li>
              <li className="text-light">
                <img src={doblearrow} alt="Arrow" />
                Metal Panel
              </li>
              <li className="text-light">
                <img src={doblearrow} alt="Arrow" />
                Trim Offerings
              </li>
              <li className="text-light">
                <img src={doblearrow} alt="Arrow" />
                Roof Panels
              </li>
              <li className="text-light">
                <img src={doblearrow} alt="Arrow" />
                Roofing Supplies
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <h6>Recent Ads</h6>
            <div className="recent-ads">
              <img src={ads1} alt="Logo" style={{ width: "80px" }} />
              <img src={ads2} alt="Logo" style={{ width: "80px" }} />
              <img src={ads3} alt="Logo" style={{ width: "80px" }} />
              <img src={ads4} alt="Logo" style={{ width: "80px" }} />
              <img src={ads5} alt="Logo" style={{ width: "80px" }} />
              <img src={ads6} alt="Logo" style={{ width: "80px" }} />
            </div>
          </div>
          <div className="col-md-2 col-sm-12 col-xs-12">
            <div className="follow-us">
              <h6>Follow us on:</h6>
              <a href="/" className="text-light  ">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="text-light  ">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="text-light  ">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="row mt-4  text-center">
          <div className="col-md-12 col-sm-12 col-xs-12 footer-rights">
            <p className="mb-0">
              Privacy Policy &nbsp; Terms & Conditions &nbsp; Support
            </p>
            <p className="mb-0">
              2024 All rights reserved | Powered by{" "}
              <a href="/" className="text-light text-decoration-none">
                Social Lexicon
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
