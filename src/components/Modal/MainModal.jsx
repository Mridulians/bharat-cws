// import React from 'react'

import { useState } from "react"
import Modal from "./Modal"

const MainModal = () => {
   
    const [showModal, setShowModal] = useState(false)


  return (
    <div className="h-screen flex flex-col items-center gap-6 bg-[#14161b]">

        <h1>Popup Modal</h1>
        <button onClick={()=>setShowModal(true)} className="bg-indigo-500 px-4 py-2 rounded-lg text-lg">Get the modal</button>
        {showModal && <Modal onClose = {()=>setShowModal(false)}/>}
    </div>
  )
}

export default MainModal