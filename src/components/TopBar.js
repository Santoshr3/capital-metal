import React from "react";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div>
          <i className="fas fa-phone-alt"></i> (386) 752-2950
          <span className="ms-3">
            <i className="fas fa-envelope"></i> sales@capitalmetalsupply.com
          </span>
        </div>
        <div>
          <a href="#" className="text-light ">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-light ">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-light ">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
