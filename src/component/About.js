import React from "react";
import image from "../img/image8.png"
import About1 from "../img/about1.png"
import About2 from "../img/about2.png"
import Dot from "../img/dot.png"
import "../styles/About.css"

const About = () => {
  return (
    <div>
      <div className="heading">
        <p>A Digital Product Agency</p>
      </div>
      <div className="aboutBrief">
        <p>
          Leading digital agency with solid design and development expertise. We
          build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
      </div>
      <div className="Button">
        <button>Contact Now</button>
      </div>
      <div className="image">
        <img src={About1} alt=""  />
        <img src={image}  alt="" />
        <img src={About2} alt="" />
      </div>
      <div className="dots">
        <img src={Dot} alt="" />
      </div>
    </div>
  );
};

export default About;
