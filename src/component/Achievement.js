import React from "react";
import "../styles/Achievement.css";
import VideoImg from "../img/videoimg.png";
import PlayCircle from "../img/playcircle.png";
import Circle from "../img/circle.png";
import HeadingBg from "../img/headingbg.png";


const Achievement = () => {
  return (
    <div>
      <div className="videoimg">
        <img src={VideoImg} alt="" />
        <div className="videoPlay">
            <img src={PlayCircle} alt="" />
        </div>
      </div>
      <div className="circleimg">
        <img src={Circle} alt="" />
      </div>
      <div className="achievementHeading">
        <p>Great Digital Product Agency since 2016</p>
      </div>
      <div className="headingBgImg">
        <img src={HeadingBg} alt="" />
      </div>
      <div className="achievementBrief">
        <p>
          Our Business Plan is a written document describing a company's core
          business activites, Objectives, and how it plans to achieve its goals.
          Our goal is to provide our client high quality Product with modern
          idea accordingly their budgets and according thir reuirements.
        </p>
      </div>
    </div>
  );
};

export default Achievement;
