import React from 'react'
import { fuji, lake, resort } from '../assets/img'

const Locations:React.FC = () => {
  return (
    <div className='flex flex-row justify-center h-[64rem] w-screen '>
      <div className='h-[64rem] w-[30rem] relative '>
        <img src={resort} className='object-cover h-full w-full'/>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p className='transform -rotate-90 origin-top absolute text-white text-6xl mt-[-20rem] ml-[6rem] font-semibold tracking-tight leading-normal' style={{ width:"max-content" }}>Mountain Resort</p>
      </div>
      <div className='h-[64rem] w-[30rem] relative'>
        <img src={lake} className='object-cover h-full w-full' />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p className='transform -rotate-90 origin-top absolute text-white text-6xl mt-[-18rem] ml-[9rem] font-semibold tracking-tight leading-normal' style={{ width:"max-content" }}>Fuji Mountain</p>
      </div>
      <div className='h-[64rem] w-[30rem] relative'>
        <img src={fuji} className='object-cover h-full w-full' />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p className='transform -rotate-90 origin-top absolute text-white text-6xl mt-[-22rem] ml-[3rem] font-semibold tracking-tight leading-normal' style={{ width:"max-content" }}>Freezing WinterLake</p>
      </div>
    </div>
  )
}

export default Locations
