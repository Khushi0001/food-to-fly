import React from 'react'
import './style.css'
import bannerImg from './banner.png'
import Logo from '../../common/Logo'
const Banner = ({handleScrollMenu}) => {
  return (
    <header>
      <div className="header-content">
        <Logo/>
        <div className="content-main">
          <h1> Go grocery shopping. Live a little bit of life.</h1>
          <p>We deliver Fresh and healthy products with different sellers .</p>
          <button onClick={handleScrollMenu}>View Items <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <img src = {bannerImg} alt='banner' className="header-img"/>
    </header>
  )
}

export default Banner