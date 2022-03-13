import React from 'react';
import './ResortPage.css';

import Resort1 from '../assets/Resort1.jpg';
import Resort2 from '../assets/Resort2.jpg';
import Resort3 from '../assets/Resort3.jpg';
import Resort4 from '../assets/Resort4.jpg';
import ResortHome from '../assets/ResortHome.jpg';

const ResortPage = () => {
  return (
    <div className = 'resorts'>
        <div className = "container">
            <h1>Some of our featured resorts</h1>
            <p> Caribbean dream</p>
            <div className = "img-container">
                <img className = 'span-3 image-grid-row-2' src = {Resort1} alt = "/"/>
                <img src = {Resort2} alt = "/"/>
                <img src = {Resort3} alt = "/"/>
                <img src = {Resort4} alt = "/"/>
                <img src = {ResortHome} alt = "/"/>
            </div>
        </div>
    </div>
  )
}

export default ResortPage