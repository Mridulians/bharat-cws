// import React from 'react'
import Data from './Feature'

const Feature = () => {
  return (
    <div className='flex flex-row justify-center gap-[2rem] flex-wrap my-[2rem]'>
        {Data.map((item)=>(
            <div key={item.id} className='w-[100%] md:w-[40%] xl:w-[20%] shadow-custom p-[2rem] text-center hover:bg-gray-300'>
             <img src={item.img} alt="" className='m-auto'/>
             <h2 className='font-sans font-semibold text-violet-950 text-[2rem]'>{item.name}</h2>
             <p className='font-sans font-semibold mt-[10px]'>{item.desc}</p>
            </div>
        ))}
    </div>
  )
}

export default Feature