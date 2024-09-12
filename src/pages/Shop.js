import React from 'react';
import shop1 from "../assets/shop1.png";
import shop2 from "../assets/shop2.png";
import shop3 from "../assets/shop3.png";
import shop4 from "../assets/shop4.png";
import shop5 from "../assets/shop5.png";
import shop6 from "../assets/shop6.png";
import shop7 from "../assets/shop7.png";
import shop8 from "../assets/shop8.png";
import shop9 from "../assets/shop9.png";
import shop10 from "../assets/shop10.png";
import shop11 from "../assets/shop11.png";
import shop12 from "../assets/shop12.png";
import shop13 from "../assets/shop13.png";
import shop14 from "../assets/shop14.png";
import shop15 from "../assets/shop15.png";
import shop16 from "../assets/shop16.png";
import HeaderTitle from './HeaderTitle';


function Shop() {
  return (
    <>
        <HeaderTitle  title = "Shop"/>
       <div className = "container section-shop">
         <label style={{color:"#000", fontWeight:"600", paddingBottom:"5px"}}>Panel Profile</label>
         <div className="input-group mb-3">
       
              <input type="text" className="form-control" placeholder = "Cannonbails Stopper" aria-label="Text input with dropdown button" />
             
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Default Scrolling</button>
              <ul className="dropdown-menu dropdown-menu-end">
              <li>Cannonbails Stopper</li>
              </ul>
          </div>
    </div>
    <div className='container shop-flex'>
     <div>
          <img src={shop1} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Cannonball Stopper</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$10.34</p>
     </div>
     <div>
          <img src={shop2} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Metal to  Wood Screws</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$54.34</p>
     </div>

     <div>
          <img src={shop3} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Cannonball Trolleys</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$71.60</p>
     </div>
     <div>
          <img src={shop4} alt = "" />
          
          <p style={{fontSize:"25px", fontWeight:"600"}}>DoubleTrack Bracket</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$27.23</p>
     </div>
     <div>
          <img src={shop5} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Drip Edge Folding Tool</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$73.25</p>
     </div>
     <div>
          <img src={shop6} alt = "" />
       
          <p style={{fontSize:"25px", fontWeight:"600"}}>Hand Notcher Tool</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$61.23</p>
     </div>
     <div>
          <img src={shop7} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Pipe Boot</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>18.18-$155.6</p>
     </div>
    
     <div>
          <img src={shop9} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Left Hand Aviation</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$10.34</p>
     </div>
     <div>
          <img src={shop10} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Turbo Shears</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$113.39</p>
     </div>
     <div>
          <img src={shop11} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Right Hand Aviation</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$10.34</p>
     </div>
     <div>
          <img src={shop12} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Cannonball Stopper</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$10.34</p>
     </div>
     <div>
          <img src={shop13} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Caulking Gun</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$54.24</p>
     </div>
     <div>
          <img src={shop14} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Poly Barn Window</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$149.00</p>
     </div>

     <div>
          <img src={shop15} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Cannonball Stopper</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$10.34</p>
     </div> 
     <div>
          <img src={shop16} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Avlanche Snow Guard</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$6.58</p>
     </div>
      
     <div>
          <img src={shop9} alt = "" />
          <p style={{fontSize:"25px", fontWeight:"600"}}>Left Hand Aviation</p>
          <p style = {{color:"#005E82", fontSize:"18px", fontWeight:"500"}}>$10.34</p>
     </div>

    </div>
    </>
 
    
  );
}

export default Shop;
