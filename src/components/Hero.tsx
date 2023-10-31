import React from 'react'
import { mountain } from '../assets/img'
import Booking from './Booking'


const Hero:React.FC = () => {
  return (
      <div className='relative w-screen'>
        <img src={mountain} className='top-0 left-0 right-0 bg-cover bg-top bg-no-repeat items-center w-full'/>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-screen gap-8'>
          <p className='flex items-center justify-center text-white text-[56px] not-italic font-bold capitalize leading-10 '>Plan the perfect winter trip</p>
          <p className='flex items-center justify-center text-center text-white text-[22px] not-italic'>Easily plan your ideal ski trip from home with the<br/> help of professionals</p>
        </div>
        <Booking />
      </div>
      
  )
}

export default Hero
