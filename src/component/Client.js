import React from 'react';
import "../styles/Client.css"
import Google from "../img/google.png";
import Airbnb from "../img/airbnb.png";
import Uber from "../img/uber.png";
import Amazon from "../img/amazon.png";


const Client = () => {
  return (
    <div>
      <div className="clientheading">
        <p>Our Client</p>
      </div>
      <div className="about">
        <p> Several selected clients, who already believe in our service.</p>
      </div>
      <div className="images">
         <img src={Google} alt="" />
         <img src={Airbnb} alt="" />
         <img src={Uber} alt="" />
         <img src={Amazon} alt="" />
      </div>
    </div>
  )
}

export default Client
