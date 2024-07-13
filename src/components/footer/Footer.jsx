// import React from 'react'
import Logo from "../../assets/b_logo.png";
import { FaMapMarked } from "react-icons/fa";

import { FaMessage } from "react-icons/fa6";
import Waves from "../wave/Wave";

const Footer = () => {
  return (
    <>
      <Waves />
      <div className="bg-zinc-900 text-white flex flex-col lg:flex-row py-[3rem] px-[1rem] lg:px-[6rem] items-center">
        <div className="w-[100%] lg:w-[50%]">
          <img src={Logo} alt="" className="w-[7rem]" />
          <p className="mt-[15px] break-all">
            {" "}
            Cloud 21 continues to lead in the content services industry while
            leveraging the power of the cloud Extend the value of your Cloud 21
            solutions The concept of the cloud may not be cutting-edge anymore.
            But the way it enables organizations to improve business processes
            and drive digital transformation is still pretty cool. Plus, Cloud
            21 broke industry barriers when we launched the Cloud 21 Cloud way
            back in 2004.{" "}
          </p>
        </div>

        <div className="mt-[20px] w-[100%] lg:w-[50%] flex flex-col sm:flex-row justify-center gap-[3rem]">
          <div className="">
            <h2 className="font-sans font-semibold text-[1.5rem]">
              Useful Links
            </h2>
            <ul>
              <li className="mt-[10px]">Home</li>
              <li className="mt-[10px]">Colocator</li>
              <li className="mt-[10px]">Services</li>
              <li className="mt-[10px]">Resources</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-sans font-semibold text-[1.5rem]">
              Contact Information
            </h2>
            <ul>
              <li className="flex items-center mt-[10px] gap-[10px]">
                <FaMapMarked /> <p>Bharat Cloud Web Services</p>
              </li>
              <li className="flex items-center mt-[10px] gap-[10px]">
                <FaMessage /> <p>info@bharatcws.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-zinc-700 text-center font-sans font-semibold p-[15px]">
        <p className="text-white">
          2024 All Rights Reserved{" "}
          <span className="text-orange-500">Bharat Cloud Web Services</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
