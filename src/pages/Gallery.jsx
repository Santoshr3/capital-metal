import React from 'react';
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.jpg";
import gallery9 from "../assets/gallery9.png";
import gallery10 from "../assets/gallery10.png";
import gallery11 from "../assets/gallery11.png";
import gallery12 from "../assets/gallery12.png";
import HeaderTitle from './HeaderTitle';

const Gallery = () => {
  return (
    <>
    <HeaderTitle  title = "Gallery"/>
   
    <div className='container'>
      <div className='row gallery_dropdown_div'>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  dropdown">
              <label style={{color:"#000", fontWeight:"600", paddingBottom:"5px"}}>Panel Profile</label>
                  <button className="btn  dropdown-toggle  buttoncss" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Select an Option...
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className="dropdown-item">Options</li>
                  </ul>
            </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 dropdown">
              <label  style={{color:"#000", fontWeight:"600", paddingBottom:"5px"}}>Color</label>
                     <button className="btn  dropdown-toggle buttoncss" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Select an Option...
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li className="dropdown-item">Options</li>                   
                      </ul>
            </div>
      </div>
      <div className='gallery_flex'>
        <div><img src={gallery1} alt = "gallery1" width={400} height={300}/></div>
        <div><img src={gallery2} alt = "gallery1" width={400} height={300}/></div>
        <div><img src={gallery3} alt = "gallery1" width={400} height={300}/></div>
        <div><img src={gallery4} alt = "gallery1" width={400} height={300}/></div>
        <div><img src={gallery5} alt = "gallery1" width={400} height={300}/></div>
        <div><img src={gallery6} alt = "gallery1" width={400} height={300}/></div>
        <div><img src={gallery7} alt = "gallery1" width={400} height={300}/></div>
        <div><img src={gallery8} alt = "gallery1" width={400} height={300}/></div>
        <div><img src={gallery9} alt = "gallery1" width={400} height={300}/></div>
        <div><img src={gallery10} alt = "gallery1" width={400} height={300}/></div>
        <div><img src={gallery11} alt = "gallery1" width={400} height={300}/></div>
        <div><img src={gallery12} alt = "gallery1" width={400} height={300}/></div>
      </div>
    </div>
    </>
  );
}

export default Gallery;
