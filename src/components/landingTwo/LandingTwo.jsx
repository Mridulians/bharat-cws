// import React from 'react'
import IMG from "../../assets/main_img2.jpg";
import "./LandingTwo.css";
import Tilt from "react-parallax-tilt";

const LandingTwo = () => {
  return (
    <div className="banner2 gap-[2rem] md:gap-[2rem]">
      <div className="banner_img">
        <Tilt>
          <img src={IMG} alt="" className=""/>
        </Tilt>

        <img src={IMG} className="mobile" alt="" />
      </div>
      <div className="content">
        <h2 className="title text-white">
          CONTENT SERVICES TODAY AND IN FUTURE
        </h2>
        <p className="banner_info">
          Discover premium cloud services designed to elevate your business. Our
          solutions offer seamless scalability, security, and efficiency,
          empowering you to focus on innovation and growth. Join numerous
          successful businesses that have transformed with our cloud solutions
          and watch your business shine brighter than ever in the digital sky.
        </p>
      </div>
    </div>
  );
};

export default LandingTwo;
