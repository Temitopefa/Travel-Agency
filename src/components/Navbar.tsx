import React, { useState } from "react";
import { bar, ellipse, flight, xcircle } from "../assets/img";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-screen fixed top-0 left-0 right-0 z-50">
      <div
        className={`md:px-10 py-4 md:flex md:justify-between justify-center h-full md:h-[100px] md:flex-row flex-col items-center ${
          isMenuOpen
            ? "bg-[rgba(5,41,97,0.75)] backdrop-blur-lg"
            : "md:bg-transparent md:backdrop-blur-none"
        }`}
      >
        <div className="flex gap-4 items-center p-[1rem]">
          <div className="relative">
            <img src={ellipse} className="absolute bg-white-400" />
            <img src={flight} className="relative" />
          </div>
          <h3 className="text-xl not-italic font-bold leading-normal tracking-tight text-white">
            Arctic Travels
          </h3>
        </div>
        {/* Hamburger Icon */}
        <div
          onClick={toggleMenu}
          className="md:hidden flex absolute top-4 right-8 cursor-pointer"
        >
          {isMenuOpen ? <img src={xcircle} /> : <img src={bar} />}
        </div>

        {/* {Mobile view} */}
        {isMenuOpen ? (
          <div
            className={`md:flex flex flex-col md:flex-row justify-between text-white gap-4 items-center md:text-sm text-4xl not-italic md:font-normal font-medium leading-normal transition-all duration-500 ease-in top-12`}
          >
            <h4>About Us</h4>
            <h4>Support</h4>
            <h4>FAQ</h4>
            <button className="md:static text-blue-400 bg-white rounded-lg items-center text-sm not-italic font-semibold leading-normal w-[151px] h-[48px] p-3.5">
              Sign Up
            </button>
          </div>
        ) : (
          <>
            <div className="hidden md:flex flex-row justify-evenly  text-white gap-4 items-center text-sm not-italic font-normal leading-normal transition-all duration-500 ease-in">
              <h4>About Us</h4>
              <h4>Support</h4>
              <h4>FAQ</h4>
            </div>
            <div className="hidden md:flex">
              <button className="md:static text-blue-400 bg-white rounded-lg items-center text-sm not-italic font-semibold leading-normal w-[151px] h-[48px] p-3.5">
                Sign Up
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
