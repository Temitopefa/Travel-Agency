import React from "react";
import { frame } from "../assets/img";
import { motion } from "framer-motion";

const View: React.FC = () => {
  return (
    <>
      <div className="w-screen relative mt-[14rem] md:mt-0">
        <div className="flex justify-start">
          <img
            src={frame}
            className="bg-cover object-fit bg-center w-full"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute p-4 md:p-16 text-white mt-4 md:mt-40 flex flex-col gap-10">
            <p className="text-2xl md:text-7xl font-semibold leading-9 md:leading-normal tracking-wide">
              View Passes We’ve Made
              <br /> Available For You
            </p>
            <motion.button 
              whileHover={{ scale:1.1 }}
              whileTap={{ scale:0.9 }}
              className="flex w-[215px] md:w-[285px] h-[64px] md:h-[72px] p-4 justify-center items-center text-white text-sm font-semibold rounded-xl bg-blue-500">
              view passes
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
