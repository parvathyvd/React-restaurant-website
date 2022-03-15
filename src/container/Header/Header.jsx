import React from 'react';

import './Header.css';
import images from '../../constants/images';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header'>
    <div className="app__header-info">
      <div className="subheading">
        <SubHeading title='Chase The New Flavour'/>
      </div>
        <h1 className='mainheading'>Key to Fine Dining</h1>
        <p className='description p__opensans'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
        <button className='custom__button'>Explore Menu</button>
    </div>
      <div className="app__header-img">
        <img className='welcome-img' src={images.welcome} alt="welcome" />
     </div>
  </div>
);

export default Header;
