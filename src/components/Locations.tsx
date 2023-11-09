import React from "react";
import { fuji, lake, resort } from "../assets/img";
import { motion } from "framer-motion";

const Locations: React.FC = () => {
  const imageVariants = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 2, transition: { duration: 4, ease: "easeInOut" } },
  };

  return (
    <motion.div className="flex flex-col md:flex-row justify-center h-[64rem] w-screen">
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="h-[460px] md:h-[64rem] w-full md:w-[30rem] relative"
      >
        <img src={resort} className="object-cover h-full w-full" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p
          className="transform rotate-0 bottom-0 md:bottom-[20rem] right-0 left-0 md:-rotate-90 origin-top absolute text-white text-3xl md:text-6xl mt-[-20rem] ml-[5rem] font-semibold tracking-tight leading-normal"
          style={{ width: "max-content" }}
        >
          Mountain Resort
        </p>
      </motion.div>
      <motion.div
        variants={imageVariants}
        initial={{ x: -1000, opacity: 0 }} // Adjust initial x value for the second image
        animate="visible"
        className="h-[460px] md:h-[64rem] w-full md:w-[30rem] relative"
      >
        <img src={lake} className="object-cover h-full w-full" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p
          className="transform rotate-0 md:-rotate-90 bottom-0 md:bottom-[17rem] origin-top absolute text-white text-3xl md:text-6xl mt-[-18rem] ml-[7rem] font-semibold tracking-tight leading-normal"
          style={{ width: "max-content" }}
        >
          Fuji Mountain
        </p>
      </motion.div>
      <motion.div
        variants={imageVariants}
        initial={{ x: -1000, opacity: 0 }} // Adjust initial x value for the third image
        animate="visible"
        className="h-[460px] md:h-[64rem] w-full md:w-[30rem] relative"
      >
        <img src={fuji} className="object-cover h-full w-full" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p
          className="transform rotate-0 md:-rotate-90 bottom-0 md:bottom-[23rem] origin-top absolute text-white text-3xl md:text-6xl mt-[-22rem] ml-[2rem] font-semibold tracking-tight leading-normal"
          style={{ width: "max-content" }}
        >
          Freezing WinterLake
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Locations;
