import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer" id='contact'>
    <div className="app__subscribe-box">
      <SubHeading title='Newsletter' />
      <h1 className="heatext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans sub-title">And Never Miss Latest Updates!</p>
      <div className="subscribe-info">
      <input type="text" placeholder="Ente your email address" />
      <button className="custom__button">Subscribe</button>
        </div>
    </div>
    <div className="app__contact">
      <div className="contact-us--info">
        <p className="app__footer-headtext">Contact Us</p>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__main">
        <div className="logo-desc-wrapper">
          <img className="footer-logo" src={images.gericht} alt="logo" />
          <p className="p__opensans small">
            The Best Way To Find Yourself Is To Lose Yourself In The Service Of
            Others.
          </p>
          <img className='footer__spoon' src={images.spoon} alt="spoon" />
        </div>
      </div>
      <div className="app__working">
      <p className='app__footer-headtext'>Working hours</p>
        <p>Monday-Friday:</p>
        <p>08:00 Am -12:00 Am</p>
        <p>Saturday-Sunday:</p>
        <p>07:00am -11:00 Pm</p>
      </div>
    </div>
    <div className="copyright">
        <p className="p__opensans">2021 Gerícht. All Rights Reserved.</p>
        </div>
  </div>
);

export default Footer;
