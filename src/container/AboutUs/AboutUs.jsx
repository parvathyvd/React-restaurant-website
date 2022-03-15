import React from 'react';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__about-us' id="about">
      <div className="bg-img">
      <img className='img-g' src={images.G} alt='G letter' />
      </div>
      <div className="app__about-us--content">
          <h1 className='headtext__cormorant'>About Us</h1>
          <img className='img spoon' src={images.spoon} alt="spoon image" />
          <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
          <button className='custom__button'>Know More</button>
        </div>
        <div className="app__about-us--knife">
          <img classname="img-knife" src={images.knife} alt='knife' />
          </div>
      <div className="app__about-us--history">
      <h1 className='headtext__cormorant'>History</h1>
        <img src={images.spoon} alt="spoon image" />
        <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
        <button className='custom__button'>Know More</button>
      </div>
  </div>
);

export default AboutUs;
