import React from 'react'
import './Hero.css';
import {AiOutlineSearch} from 'react-icons/ai';

import ResortHome from '../assets/ResortHome.jpg';
import Video from '../assets/WavesVideo.mp4';

function Hero() {
  return (
    <div className = "hero">
        <video autoPlay loop muted id = 'video'>
          <source src = {Video} type = 'video/mp4'/>
        </video>
        <div className = "overlay"></div>
        <div className = "content">
          <h1> The Ultimate in Relaxation</h1>
          <h2> Find your next getaway</h2>
          <form className = "form">
              <div>
                <input type = "text" placeholder = 'Search Destinations'/>
              </div>
              <div>
                <button> <AiOutlineSearch className = 'icon'/></button>
              </div>
          </form>
        </div>        
    </div>
  )
}

export default Hero