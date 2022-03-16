import React from 'react';
import { SubHeading } from '../../components';
import images from "../../constants/images";
import './FindUs.css'


const FindUs = () => (
  <div className='app__findus'>
    <div className="app__findus-info">
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant pb-2'>Find Us</h1>
      <p className='p__opensans pb-2'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <h3 className='p__cormorant pb-1' style={{color: '#dcca87'}}>Opening Hours</h3>
      <p className='p__opensans'>Mon - Fri: 10:00 Am - 02:00 Am</p>
      <p className='p__opensans'>Sat - Sun: 10:00 Am - 03:00 Am</p>
      <button className='custom__button'>Visit Us</button>
      </div>
      <div className="app__findus-img">
        <img src={images.findus} alt="" />
        </div>
  </div>
);

export default FindUs;
