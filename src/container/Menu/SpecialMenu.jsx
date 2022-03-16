import React from "react";
import { images, data } from "../../constants/";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__special__menu" id="menu">
    <div className="app__special__menu--title">
      <SubHeading title="Menu That Fits You Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__special__menu__wrapper">
      <div className="app__special__menu__wrapper--wine">
        <h3 className="menu-heading">Wine & Beer</h3>
        {data.wines.map((wine, index) => {
          return (
            <div className="app__special__menu__wine-list">
              <MenuItem
                key={wine.title}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            </div>
          );
        })}
      </div>
      <div className="app__special__menu-img">
        <img src={images.menu} alt="" />
      </div>
      <div className="app__special__menu__wrapper--cocktails">
        <h3>Cocktails</h3>
        <div className="app__special__menu__cock-list">
          {data.cocktails.map((cock, index) => {
            return (
              <div className="app__special__menu__wine-list">
                <MenuItem
                  key={cock.title}
                  title={cock.title}
                  price={cock.price}
                  tags={cock.tags}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <button className="custom__button mtb-2">View More</button>

  </div>
);

export default SpecialMenu;
