/* eslint-disable react/prop-types */
// import React from 'react'
import Cross from "../../assets/cross.png";
import { useEffect, useRef } from "react";
import './Modal.css'

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    // Add the no-scroll class to the body element when the modal is opened
    document.body.classList.add("no-scroll");

    // Remove the no-scroll class from the body element when the modal is closed
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);


  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="mt-10 flex flex-col gap-5 bg-indigo-600 py-[2rem] px-[4rem] rounded-[10px]">
        
        <button onClick={onClose} className="place-self-end">
          <img src={Cross} alt="" />
        </button>
        <form className="flex flex-col">
        <h2 className="text-white font-sans font-bold text-[1.5rem] text-center mb-[20px]">Get in Touch</h2>
          <div className="flex flex-col mb-[10px]">
            <label htmlFor="" className="font-semibold font-sans text-white">Name</label>
            <input type="text" placeholder="Enter Name" required  className="p-[10px] rounded-[10px]"/>
          </div>
          <div className="flex flex-col mb-[10px]">
            <label htmlFor="" className="font-semibold font-sans text-white">Email</label>
            <input type="email" placeholder="Enter Email" required  className="p-[10px] rounded-[10px]"/>
          </div>
          <div className="flex flex-col mb-[10px]">
            <label htmlFor="" className="font-semibold font-sans text-white">Message</label>
            <input type="text" placeholder="Enter Message" required className="p-[10px] rounded-[10px]"/>
          </div>
          

          <button className="bg-black text-white py-[8px] px-[15px] rounded-[10px] m-auto mt-[15px] flex cursor-pointer">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
