import React, { useRef, useState } from 'react';
import images from '../../constants/images';
import {BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs';
import {meal} from '../../constants';

import './Intro.css';

const Intro = () => {
  const vidRef = useRef('');
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo((prevVideo) => !prevVideo)
    if(playVideo){
      vidRef.current.pause()
    }
    else if(!playVideo){
      vidRef.current.play()
    }
  }
 

return (
  <div className='app__intro'>
    <video 
    src={meal} 
    ref={vidRef}
    type="video/mp4"
    muted
    loop
    controls={false}
    />
    <div className="app__intro-overlay">
      <div className="app__intro-button" onClick={handleVideo}>
        {!playVideo ? <BsFillPlayFill className='play'/> : <BsFillPauseFill className='pause'/>}
        </div>
    </div>
  </div>
);

}

export default Intro;
