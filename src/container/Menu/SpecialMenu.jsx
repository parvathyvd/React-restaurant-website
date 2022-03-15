import React from 'react';
import {images, data} from '../../constants/';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__special__menu' id='#menu'>
    <div className="app__special__menu--title">
      <SubHeading title='Menu That Fits You Palatte'/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className="app__special__menu__wrapper">
      <div className="app__special__menu__wrapper--wine">
          <h3 className=''>Wine & Beer</h3>
          {data.wines.map((wine, index)=>{
            return (<div className='wine-list'>
              <div className="wine-details">
              <p className='p__cormorant title'>{wine.title}</p>
              <span className='line'>&nbsp;</span>
            <span className='price'>{wine.price}</span>
                </div>
                <div className="wine-tags">
                <p className='tags'>{wine.tags}</p>

                  </div>
            </div>)
          })}
        </div>
        <div className='app__special__menu-img'>
        <img src={images.menu} alt="" />
          </div>
        <div className="app__special__menu__wrapper--cocktails">
        <h3>Cocktails</h3>
        {data.cocktails.map((cock, index)=>{
            return <p className='p__cormorant'>{cock.title}</p>
          })}
        </div>
    </div>
  </div>
);

export default SpecialMenu;
