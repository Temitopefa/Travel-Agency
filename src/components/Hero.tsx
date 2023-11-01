import React from 'react'
import { mountain } from '../assets/img'
import Booking from './Booking'

const Hero: React.FC = () => {
  return (
    <div className='relative w-screen h-screen'>
      <img src={mountain} className='w-full h-full object-cover object-center' alt="Mountain" />
      <div className='absolute flex flex-col gap-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full text-white py-4'>
        <p className='text-[28px] md:text-7xl font-bold leading-normal md:leading-10'>Plan the perfect winter trip</p>
        <p className='text-xl md:text-2xl'>Easily plan your ideal ski trip from home with the <br/>help of professionals</p>
      </div>
      <Booking />
    </div>
  )
}

export default Hero
