import React from "react";
import { frame } from "../assets/img";

const View: React.FC = () => {
  return (
    <>
      <div className="w-screen relative flex justify-start ">
        <img
          src={frame}
          className="bg-cover left-0 right-0 bg-no-repeat bg-center w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute p-16 text-white mt-40 flex flex-col gap-10">
            <p className=" text-7xl font-semibold leading-normal tracking-wide" >View Passes We’ve Made<br/> Available For You</p>
            <button className="flex w-[285px] h-[72px] p-4 justify-center items-center text-white text-sm font-semibold rounded-xl bg-blue-500">view passes</button>
        </div>
        
      </div>
    </>
  );
};

export default View;
