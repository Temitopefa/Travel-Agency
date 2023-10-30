import React from 'react'
import { pay, intrax, master, nike, star} from "../assets/img"


const IMG = [
    {
        img: <img src={nike} alt="nike"/>
    },
    {
        img: <img src={pay} alt="pay"/>
    },
    {
        img: <img src={star} alt="star"/>
    },
    {
        img: <img src={intrax} alt="intrax"/>
    },
    {
        img: <img src={master} alt="master"/>
    }
]
const Brands:React.FC = () => {
  return (
    <div className='flex flex-row items-center justify-evenly bg-[#F8F9FC] h-[400px]'>
        {IMG.map((items, index) => {
            return(
                <div key={index}>
                    {items.img}
                </div>
            )
        })}
    </div>
  )
}

export default Brands
