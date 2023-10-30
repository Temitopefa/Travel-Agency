import React from "react";

const Region: React.FC = () => {
    return (
      <div className="relative flex gap-6 flex-col items-center text-center h-[693px]">
        <div className="mt-[7rem] flex gap-6 flex-col">
          <p className="text-center text-4xl font-semibold leading-tight tracking-wide text-black">
            Creating the best <span className="text-[#3E86F5]">ice-cold!</span>{" "}
            experience
            <br /> you would never forget.
          </p>
          <p className="text-center text-base font-normal leading-9 not-italic text-slate-500">
            Would you explore nature paradise in the world, find the
            <br /> best destination in the world with us.
          </p>
          <p className="text-center text-4xl font-semibold leading-normal tracking-wide text-black mt-[7rem]">
            View Regions available
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-25">
          <div className="bg-[url('assets/img/map2.webp')] bg-cover bg-no-repeat h-full"></div>
        </div>
      </div>
    );
  };
  

export default Region;
