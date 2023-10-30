import React from 'react'
import { ellipse, flight } from '../assets/img'


const Navbar:React.FC = () => {
  return (
    <div className='flex flex-row justify-evenly mt-5 items-center fixed top-0 left-0 right-0 z-50'>
      <div className='flex gap-4 items-center'>
        <div className='relative'>
            <img src={ellipse}  className='absolute bg-white-400'/>
            <img src={flight} className='relative' />
        </div>
        <h3 className='text-xl not-italic font-bold leading-normal tracking-tight text-white'>Arctic Travels</h3>
      </div>
      <div className='flex justify-between text-white gap-4 items-center text-sm not-italic font-normal leading-normal'>
        <h4>About Us</h4>
        <h4>Support</h4>
        <h4>FAQ</h4>
      </div>
      <div>
        <button className='text-blue-400 bg-white rounded-lg items-center text-sm not-italic font-semibold leading-normal w-[151px] h-[48px] p-3.5'>
            Sign Up
        </button>
      </div>
    </div>
  )
}

export default Navbar
