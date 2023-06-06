import React from 'react'
import { images } from '../../constants';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G_overlay" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">At GERICHT, we are passionate about creating exceptional dining experiences that go beyond mere sustenance. Our culinary journey began with a vision to redefine the boundaries of gastronomy.</p>
          <button type="button" className="custom__button">Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Since our humble beginnings, GERICHT has been on a remarkable journey, marked by culinary excellence, unwavering passion, and a commitment to creating unforgettable dining experiences.</p>
          <button type="button" className="custom__button">Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

