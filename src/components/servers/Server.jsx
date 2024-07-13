// import React from 'react'
import { useState } from "react";
import Data from "./Server";
import Tilt from "react-parallax-tilt";
import Modal from "../Modal/Modal";

const Server = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-row flex-wrap justify-center items-center gap-[2rem] py-[3rem] px-[2rem] md:px-[6rem]">
      {Data.map((item, id) => (
        <Tilt  key={id}>
        <div
          className="bg-zinc-800 border-2 p-[2rem] h-[300px] rounded-[10px]"
          key={id}
        >
          <h2 className="text-white text-center font-sans font-bold text-[2rem]">
            {item.name}
          </h2>
          <p className="m-auto mt-[10px] text-[1.5rem] font-sans font-bold rounded-[50%] w-[100px] h-[50px] border-2 border-white text-center text-white">
            {item.size}
          </p>

          <p className="text-white mt-[20px] text-[1rem] font-sans font-semibold">
            Assured Rental : {item.rental}
          </p>
          <p className="text-white mt-[10px] text-[1rem] font-sans font-semibold">
            Rental Duration : {item.duration}
          </p>

          <button onClick={()=>setShowModal(true)}  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-[8px] px-[15px] rounded-[10px] m-auto mt-[15px] flex cursor-pointer">
            Know More
          </button>
        </div>
        </Tilt>
      ))}
      {showModal && <Modal onClose = {()=>setShowModal(false)}/>}
    </div>
  );
};

export default Server;

