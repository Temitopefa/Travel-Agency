import React from "react";
import { ocean1, img1, snow1, winter1 } from "../assets/img";

const Resort: React.FC = () => {
  return (
    <>
      <div className="h-[120rem] w-screen mt-[28rem] md:mt-20 p-4 md:p-20">
        <div className="h-[1600px] md:flex flex flex-col md:flex-row gap-10 justify-center w-full">
          <div className="flex flex-col gap-4 justify-end">
            <div className="h-[200px] w-full md:w-[550px] flex ml-auto md:ml-[-3rem]">
              <p className="text-black text-2xl md:text-5xl font-semibold not-italic leading-relaxed">
                The best resorts to chill <br />
                and relax
              </p>
            </div>
            <img
              src={img1}
              className="object-cover w-full md:w-[484px] h-[533px] md:h-[711px] rounded-2xl shadow-lg"
            />

            <img
              src={ocean1}
              className="object-cover w-[484px] h-[533px] md:h-[711px] rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4 justify-start">
            <div className="flex flex-col relative items-center justify-end">
              <img
                src={winter1}
                className="object-cover w-[484px] h-[533px] md:h-[711px] rounded-2xl shadow-lg"
              />
              <div className="absolute flex flex-col gap-8 mb-14 w-full p-2">
                <p className="text-2xl font-semibold not-italic leading-normal text-white">
                  Winter landscape Chalet
                </p>
                <p className="text-slate-300 text-lg not-italic font-medium leading-normal">
                  Cambodia
                </p>
                <button className="w-full md:w-[436px] h-[64px] text-base font-semibold not-italic leading-normal p-8 text-white bg-[#3E86F5] flex items-center justify-center rounded-xl	">
                  Book Now
                </button>
              </div>
            </div>
            <img
              src={snow1}
              className="object-cover w-[484px] h-[533px] md:h-[711px] rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resort;
