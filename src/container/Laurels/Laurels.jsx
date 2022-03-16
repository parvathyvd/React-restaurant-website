import React from "react";
import images from "../../constants/images";
import { SubHeading } from "../../components";
import { data } from "../../constants";

import "./Laurels.css";

const Laurels = () => {
  const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
    return (
      <div className="award__card">
        <img src={imgUrl} alt={title} />
        <div className="award__card-content">
          <p className="p__cormorant" color={{ color: "##dcca87" }}>
            {title}
          </p>
          <p className="p__cormorant" color={{ color: "#DCCA87" }}>
            {subtitle}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="app__laurels" id="awards">
       <div className="app__laurels--logo">
          <img src={images.logo} alt="logo" />
        </div>
       <div className="app__heading-section">
      <SubHeading title="Awards & Recognition" />
      <h2 className="main-heading">Our Laurels</h2>
        </div>
      <div className="app__laurels--info">
        <div className="award__card__wrapper">
        {data.awards.map((award) => {
          return <AwardCard award={award} key={award.title} />;
        })}
          </div>
      <div className="app__laurels--img">
        <img src={images.laurels} alt="Laurels" />
      </div>
        </div>
    </div>
  );
};

export default Laurels;
