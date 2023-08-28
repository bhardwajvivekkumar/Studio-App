import React from "react";
import "../styles/Footer.css";
import FbLogo from "../img/fblogo.png";
import TwitterLogo from "../img/twitterlogo.png";
import InLogo from "../img/inlogo.png"

const Footer = () => {
  return (
    <div>
      <div className="line1"></div>
      <div className="leftfooter">
        <p className="bold">A+</p>
        <p>Studio</p>
      </div>
      <div className="leftFooterBrief">
        <p>
          Leading digital agency with solid design and development expertise. We
          build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
      </div>
      <div className="logo">
          <img src={FbLogo} alt="" />
          <img src={TwitterLogo} alt="" />
          <img src={InLogo} alt="" />
      </div>
      <div className="rightfooter1">
        <p className="footerbold1">What we do</p>
        <ul>Web Design</ul>
        <ul>App Design</ul>
        <ul>Social Media Manage</ul>
        <ul>Market Analysis Project</ul>
      </div>
      <div className="rightfooter2">
        <p className="footerbold2">Comapny</p>
        <ul>About Us</ul>
        <ul>Career</ul>
        <ul>Become Investor</ul>
      </div>
      <div className="rightfooter3">
        <p className="footerbold3">Support</p>
        <ul>FAQ</ul>
        <ul>Policy</ul>
        <ul>Bussiness</ul>
      </div>
      <div className="rightfooter4">
        <p className="footerbold4">Contact</p>
        <ul>WhatsApp</ul>
        <ul>Support 24</ul>
      </div>
      <div className="line2"></div>
      <div className="signature">
        <p>Designed by vivek kumar</p>
      </div>
    </div>
  );
};

export default Footer;
