import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import Aboutus from "./pages/Aboutus";
import RequestQuote from "./pages/RequestQuote";

const App = () => {
  return (
    <Router>
      <>
        {/* Top bar with phone and email */}
        {/* <TopBar /> */}

        {/* Header with navbar */}
        <Header />

        {/* Main Content (Routing) */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="capital-metal" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          {/* Add more routes here as needed */}
        </Routes>

        {/* Footer Section */}
        <Footer />
      </>
    </Router>
  );
};

export default App;
