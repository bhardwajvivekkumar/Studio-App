import React from "react";
import "../styles/Reviews.css";
import MainProfile from "../img/mainprofle.png";
import RingImg from "../img/ringImg.png";
import Dot2 from "../img/dot2.png";
import Profile1 from "../img/profile1.png";
import Profile2 from "../img/profile2.png";
import Profile3 from "../img/profile3.png";
import Profile4 from "../img/profile4.png";
import Profile5 from "../img/profile5.png";
import Profile6 from "../img/profile6.png";
import Profile7 from "../img/profile7.png";
import CentreProfile from "../img/centreprofile.png";
import Circle from "../img/circle.png"

const Reviews = () => {
    return (
        <div>
            <div className="reviewsHeading">
                <p>What our happy client say</p>
            </div>
            <div className="reviewsAbout">
                <p>Several selected clients, who already believe in our service.</p>
            </div>
            <div className="leftprofile">
                <img src={MainProfile} alt="" />
                <img src={RingImg} alt="" />
                <img src={Dot2} alt="" />
            </div>
            <div className="reviewerName">
                <p>Matthew Paul</p>
            </div>
            <div className="review">
                <p>
                    Perfect, very good job! Thank you for the amazing design and work.
                    Really impressed with the high quality and quick turnaround time.
                    Highly recommend.
                </p>
            </div>
            <div className="profile1">
                <img src={Profile1} alt="" />
            </div>
            <div  className="profile2">
                <img src={Profile2} alt="" />
            </div>
            <div  className="profile3">
                <img src={Profile3} alt="" />
            </div>
            <div  className="profile4">
                <img src={Profile4}alt="" />
            </div>
            <div  className="profile5">
                <img src={Profile5} alt="" />
            </div>
            <div  className="profile6">
                <img src={Profile6} alt="" />
            </div>
            <div  className="profile7">
                <img src={Profile7} alt="" />
            </div>
            <div  className="centreprofile">
                <img src={CentreProfile} alt="" />
            </div>
            <div className="profilecircle">
                 <img src={Circle} alt="" />
            </div>
        </div>
    );
};

export default Reviews;
