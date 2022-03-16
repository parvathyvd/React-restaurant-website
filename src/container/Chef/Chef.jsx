import React from "react";
import images from "../../constants/images";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__chef">
    <div className="chef__details">
    <div className="chef-img">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="chef-info">
      <SubHeading title="Chef’s Word" />
      <h3 className="p__cormorant title">What We Believe In</h3>
      <div className="chef-desc">
        <img src={images.quote} alt="quote" />
        <p className="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .
        Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit.
        Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie
        Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
      </div>
      <div className="chef-name-desgn">
        <h5>Kevin Luo</h5>
        <h4 className="p__opensans">Chef & Founder</h4>
      </div>
      <div className="chef-sign">
        <img src={images.sign} alt="signature" />
      </div>
    </div>
    </div>
  </div>
);

export default Chef;
