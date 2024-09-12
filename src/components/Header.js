import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import RequestQuote from '../pages/RequestQuote';

export default function Header() {
  return (
    <>
      {/* Navbar */}
      <header className="main-header">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid m0 p0">
            {/* Logo Section */}
            <Link to="/" className="navbar-brand p0 m0">
              <img src={logo} alt="Logo" style={{ height: "50px" }} />
            </Link>

            {/* Navbar Toggle for Mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible Menu */}
            <div
              className="collapse navbar-collapse flex-header-div m0 p0"
              id="navbarNav"
            >
              <div
                className="top-bar bg-dark text-light py-1"
                style={{ padding: "10px" }}
              >
                <div className=" d-flex justify-content-between">
                  <div>
                    <i className="fas fa-phone-alt"></i> (386) 752-2950
                    <span className="ms-3">
                      <i className="fas fa-envelope"></i>{" "}
                      sales@capitalmetalsupply.com
                    </span>
                  </div>
                  <div>
                    <a href="#" className="text-light mx-2">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-light mx-2">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-light mx-2">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link  ">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link  ">
                    Products
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/gallery" className="nav-link  ">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Shop" className="nav-link  ">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact-us" className="nav-link  ">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/request-quote"
                    className="btn btn-primary sm rounded-0"
                    style={{
                      backgroundColor: "#006ba6",
                      borderColor: "#006ba6",
                    }}
                  >
                    Request a Quote
                  </Link>
                </li>
              </ul>

              {/* Request a Quote Button */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
