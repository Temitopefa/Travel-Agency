import React from "react";
import { calendar, down, flight, location, user } from "../assets/img";

const Booking: React.FC = () => {
  return (
    <div className="absolute mb-[-20rem] md:mb-[-4rem] bottom-0 left-0 right-0 flex justify-center">
      <div className="w-[327px] md:w-[1200px] h-[450px] md:h-[140px] p-4 md:p-10 flex flex-col md:flex-row items-start md:items-center bg-white shadow-xl justify-around md:justify-between rounded-t-2xl ">
        <div className="flex flex-col items-start gap-2 justify-center text-start w-full md:w-auto">
          <div className="flex flex-row items-center justify-between gap-4">
            <img src={location} className="w-[24px] h-[24px] text-[#3E86F5]" />
            <p className="text-gray-500 font-poppins text-base font-medium leading-normal tracking-wider">
              LOCATION
            </p>
          </div>
          <div className="flex flex-row items-center justify-between px-4 md:px-0 md:justify-center gap-4 w-full">
            <p className="text-black text-lg font-medium leading-normal not-italic">
              iceland
            </p>
            <img src={down} className="w-[24px] h-[24px] text-[#666666]" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 justify-center text-start w-full md:w-auto">
          <div className="flex flex-row items-center justify-between gap-4">
            <img src={user} className="w-[24px] h-[24px] text-[#3E86F5]" />
            <p className="text-gray-500 font-poppins text-base font-medium leading-normal tracking-wider">
              PERSONS
            </p>
          </div>
          <div className="flex flex-row items-center justify-between px-4 md:px-0 md:justify-center gap-4 w-full">
            <p className="text-black text-lg font-medium leading-normal not-italic">
                4 Persons
            </p>
            <img src={down} className="w-[24px] h-[24px] text-[#666666]" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 justify-center text-start w-full md:w-auto">
          <div className="flex flex-row items-center justify-between gap-4">
            <img src={calendar} className="w-[24px] h-[24px] text-[#3E86F5]" />
            <p className="text-gray-500 font-poppins text-base font-medium leading-normal tracking-wider">
              CHECK IN
            </p>
          </div>
          <div className="flex flex-row items-center justify-between px-4 md:px-0 md:justify-center gap-4 w-full">
            <p className="text-black text-lg font-medium leading-normal not-italic">
                12 January 2022
            </p>
            <img src={down} className="w-[24px] h-[24px] text-[#666666]" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 justify-center text-start w-full md:w-auto">
          <div className="flex flex-row items-center justify-between gap-4">
            <img src={calendar} className="w-[24px] h-[24px] text-[#3E86F5]" />
            <p className="text-gray-500 font-poppins text-base font-medium leading-normal tracking-wider">
              CHECK OUT
            </p>
          </div>
          <div className="flex flex-row items-center justify-between px-4 md:px-0 md:justify-center gap-4 w-full">
            <p className="text-black text-lg font-medium leading-normal not-italic">
                18 January 2022
            </p>
            <img src={down} className="w-[24px] h-[24px] text-[#666666]" />
          </div>
        </div>
        <div className="w-full md:w-[213px] h-[64px]">
            <button className="flex flex-row gap-4 items-center justify-center bg-[#3E86F5] w-full h-[64px] p-10 rounded-xl ">
                <p className="text-white text-base font-semibold not-italic leading-normal">Book Trip</p>
                <img src={flight} className="filter brightness-0 invert rotate-45" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
