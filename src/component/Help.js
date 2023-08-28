import React from "react";
import "../styles/Help.css";
import HelpImg from "../img/helpbgimg.png";
import BlueBg from "../img/bluebg.png";
import Box1Img from "../img/box1img.png";
import Box2Img from "../img/box2img.png";
import Box3Img from "../img/box3img.png";
import Box4Img from "../img/box4img.png";
import Dotimg from "../img/dot.png";
import Ringimg from "../img/ringImg.png"

const Help = () => {
  return (
    <>
      <div>
        <div className="helpHeading">
          <p>How can we help your Bussiness?</p>
        </div>
        <div className="helpBgImg">
          <img src={HelpImg} alt="" />
        </div>
        <div className="HelpBrief">
          <p>
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>
        <div className="blueBg">
          <img src={BlueBg} alt="" />
        </div>
        <div className="box1">
          <div className="innerBox1">
            <img src= {Box1Img} alt=""  />
          </div>
          <div className="box1Heading">
            <p>Bussiness Idea Planning</p>
          </div>
          <div className="box1Brief">
            <p>We present you a proposal and discuss niffty-gritty like</p>
          </div>
        </div>
        <div className="box2">
          <div className="innerBox2">
          <img src= {Box2Img} alt=""  />
          </div>
          <div className="box2Heading">
            <p>Financial Planning System</p>
          </div>
          <div className="box2Brief">
            <p>Protocols apart from aengage models, pricing billing</p>
          </div>
        </div>
        <div className="box3">
          <div className="innerBox3">
          <img src= {Box3Img} alt=""  />
          </div>
          <div className="box3Heading">
            <p>Development Website and App</p>
          </div>
          <div className="box3Brief">
            <p>Communication protocols apart from engagement models</p>
          </div>
        </div>
        <div className="box4">
          <div className="innerBox4">
          <img src= {Box4Img} alt=""  />
          </div>
          <div className="box4Heading">
            <p>Market Analysis Project</p>
          </div>
          <div className="box4Brief">
            <p>Protocols apart from aengage models, pricing billing</p>
          </div>
        </div>
        <div className="dotimg">
          <img src={Dotimg} alt="" />
        </div>
        <div className="ringimg">
          <img src={Ringimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Help;
