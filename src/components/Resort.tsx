import React from "react";
import { ocean, sea, snow, winter } from "../assets/img";

const Resort: React.FC = () => {
  return (
    <>
      <div className="h-[120rem] w-screen mt-20 p-10">
        <div className="h-[1600px] flex gap-10 justify-center">
          <div className="flex flex-col gap-4 justify-end">
            <div className="h-[200px] w-[550px] flex ml-[-3rem]">
              <p className="text-black text-5xl font-semibold not-italic leading-relaxed">
                The best resorts to chill <br />
                and relax
              </p>
            </div>
            <img
              src={winter}
              className="w-full h-full object-cover w-[484px] h-[711px]"
            />
            <img
              src={ocean}
              className="w-full h-full object-cover w-[484px] h-[711px]"
            />
          </div>
          <div className="flex flex-col gap-4 justify-start">
            <img
              src={sea}
              className="w-full h-full object-cover w-[484px] h-[711px]"
            />
            <img
              src={snow}
              className="w-full h-full object-cover w-[484px] h-[711px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resort;
