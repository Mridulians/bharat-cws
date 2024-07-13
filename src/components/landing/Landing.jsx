// import React from 'react'
import "./Landing.css";
import MainImg from "../../assets/main_img.jpg";
import Tilt from "react-parallax-tilt";
import Modal from "../Modal/Modal";
import { useState } from "react"

const Landing = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="banner gap-[2rem] md:gap-[2rem]">
      <div className="content">
        <h2 className="title text-white">CLOUD24 IS PERFECT FOR DATA PROTECTION</h2>
        <p className="banner_info">
          Discover premium cloud services designed to elevate your business. Our
          solutions offer seamless scalability, security, and efficiency,
          empowering you to focus on innovation and growth. Join numerous
          successful businesses that have transformed with our cloud solutions
          and watch your business shine brighter than ever in the digital sky.
        </p>
        <button onClick={()=>setShowModal(true)} className="shop_now">Know More</button>
      </div>

      <div className="banner_img">
        <Tilt>
          <img src={MainImg} alt="" />
        </Tilt>

        
          <img src={MainImg} className="mobile" alt="" />
        
      </div>

      {showModal && <Modal onClose = {()=>setShowModal(false)}/>}
    </div>
  );
};

export default Landing;
