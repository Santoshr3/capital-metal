// src/RequestQuote.js
import React from 'react';
// import './RequestQuote.css';

const RequestQuote = () => {
  return (
    <div className="request-quote-container">
      <h1>Request a Quote</h1>
      <img 
        src="https://via.placeholder.com/600x400?text=Request+a+Quote" 
        alt="Request a Quote" 
        className="quote-image"
      />
      <form className="quote-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="details">Details:</label>
          <textarea id="details" name="details" placeholder="Enter details here..." required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RequestQuote;
