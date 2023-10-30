import React from "react";
import { ocean, sea, snow, winter } from "../assets/img";

const Resort: React.FC = () => {
  return (
    <>
      <div className="relative h-[120rem] w-screen mt-20 p-20 flex flex-wrap justify-center gap-4 ">
        <p className="flex mr-[4rem] h-52 p-4 justify-start text-black text-5xl font-semibold not-italic leading-relaxed">
          The best resorts to chill <br />
          and relax
        </p>
        <div className="w-[484px] h-[711px]">
          <img src={winter} className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-[484px] h-[711px] inset-x-56 top-72">
          <img src={ocean} className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-[484px] h-[711px] inset-x-56 top-72 mt-[46rem]">
          <img src={sea} className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-[484px] h-[711px] right-24 mr-[-0.3rem] top-96 mt-[27rem]">
          <img src={snow} className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default Resort;
