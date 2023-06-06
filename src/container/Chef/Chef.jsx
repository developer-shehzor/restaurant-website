import React from 'react'
import { SubHeading } from '../../components';
import { images } from '../../constants';
import "./Chef.css"

function Chef() {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
            <div className="app__chef-content_quote">
                <img src={images.quote} alt="quote_image" />
                <p className="p__opensans">As the CEO of GERICHT, I am privileged to lead a team of talented individuals.</p>
            </div>
            <p className="p__opensans"> A team who shares my unwavering belief in the power of exceptional dining experiences. At our core, we believe that food has the ability to transcend mere sustenance and become an expression of art, culture, and connection.</p>
        </div>

        <div className="app__chef-sign">
            <p>Kevin Luo</p>
            <p className="p__opensans">Chef & Founder</p>
            <img src={images.sign} alt="sign_image" />
        </div>
      </div>
    </div>
  )
}

export default Chef
