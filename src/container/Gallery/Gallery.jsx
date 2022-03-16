import React from 'react';
import images from "../../constants/images";
import { SubHeading } from "../../components";
import { data } from "../../constants";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      console.log('scroll left',current);
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft += 300;
  }
  }

  const gallery = [images.gallery01,images.gallery02,images.gallery03,images.gallery04];

  
  return(
  <div className='app__gallery' id='gallery'>
    <div className="app__gallery-info">
       <SubHeading title='Instagram'/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
        <button className='custom__button'>View More</button>
      </div>
      <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {gallery.map((gall,index)=>{
              return <div className='app__gallery-images_card' key={index}>
                  <img src={gall} alt='gallery'/>
                  <div className='instagram_icon'><BsInstagram/></div>
                </div>
            })}
            </div>
            <div className="app__gallery-images_arrow">
                <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')} />
                <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll('right')} />
              </div>
        </div>

    </div>
  );
  }

export default Gallery;
