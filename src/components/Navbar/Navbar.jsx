import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [menuDisplay, setMenuDisplay] = useState(false);
    return(
  <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.gericht} alt='restuarant logo' />
    </div>
    <ul className="app__navbar-links">
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul>

    <div className="app__navbar-login">
      <a href="#login" className='p__opensans login'>Login/ Register</a>
      <a href="/" className='p__opensans book'>Book a Table</a>
    </div>
    {menuDisplay &&
      <GiHamburgerMenu className='hamburger' fontSize={27} onClick={()=>{setMenuDisplay(!menuDisplay)}}/>
      }
      {!menuDisplay && (<><MdOutlineRestaurantMenu className='navbar-overlay' fontSize={27}  onClick={()=>setMenuDisplay(!menuDisplay)}/>

    <div className="app__navbar-small-screen">
      <ul className="app__navbar-links-small-screen">
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul>
      </div>
      </> )}
  </nav>
    )}

export default Navbar;
