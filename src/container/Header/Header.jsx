import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css';

function Header() {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour" />
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Welcome to GERICHT Restaurant, where culinary delights and exceptional dining experiences await. Immerse yourself in a world of delectable flavors, artfully crafted dishes, and warm hospitality. </p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  )
}

export default Header
