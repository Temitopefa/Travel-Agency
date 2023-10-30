import React from "react";
import { ellipse, facebook, flight, instagram, twitter } from "../assets/img";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col h-[500px] w-screen bg-white">
      <div className="flex flex-row justify-between p-32 w-full">
        <div className="flex flex-col justify-start gap-4">
          <div className="flex items-center relative">
            <img src={ellipse} className="absolute filter brightness-0" />
            <img src={flight} className="relative" />
          </div>
          <p className="text-xl font-semibold text-black not-italic leading-normal letter-spacing-[-0.4px]">
            Artic Travels
          </p>
          <p className="text-sm font-medium not-italic leading-5">
            Book your trip in minutes, get full <br />
            control for much longer.
          </p>
          <div className="flex flex-row items-center justify-between mt-4">
            <div className="flex items-center justify-center rounded-full border-zinc-200 w-[41px] h-[41px]">
              <img src={facebook} />
            </div>
            <div className="flex items-center justify-center rounded-full border-zinc-200 w-[45px] h-[45px]">
              <img src={instagram} />
            </div>
            <div className="flex items-center justify-center rounded-full border-zinc-200 w-[41px] h-[41px]">
              <img src={twitter} />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-around w-[592px] gap-4">
            <div className="flex flex-col justity-start gap-4 ">
                <p className="text-sm font-normal not-italic racking-widest leading-normal text-[#3E86F5]">COMPANY</p>
                <p className="text-sm font-normal not-italic racking-wide leading-normal text-black">About</p>
                <p className="text-sm font-normal not-italic racking-wide leading-normal text-black">Careers</p>
                <p className="text-sm font-normal not-italic racking-wide leading-normal text-black">Mobile</p>
            </div>
            <div className="flex flex-col justity-start gap-4 ">
                <p className="text-sm font-normal not-italic racking-widest leading-normal text-[#3E86F5]">CONTRACT</p>
                <p className="text-sm font-normal not-italic racking-wide leading-normal text-black">FAQ</p>
                <p className="text-sm font-normal not-italic racking-wide leading-normal text-black">Press</p>
                <p className="text-sm font-normal not-italic racking-wide leading-normal text-black">Affiliation</p>
            </div>
            <div className="flex flex-col justity-start gap-4 ">
                <p className="text-sm font-normal not-italic racking-widest leading-normal text-[#3E86F5]">MORE</p>
                <p className="text-sm font-normal not-italic racking-wide leading-normal text-black">Airlines</p>
                <p className="text-sm font-normal not-italic racking-wide leading-normal text-black">Airfees</p>
                <p className="text-sm font-normal not-italic racking-wide leading-normal text-black">Lowfare Tips</p>
            </div>
        </div>
      </div>
      <div className="flex flex-row justify-between p-32 w-full">
        <p className="text-base font-medium not-italic leading-8 text-slate-400">© 2022 Arctic Travels - All right reserved.</p>
        <div className="flex flex-row items-center justify-start mr-40 w-[370px]">
        <div className="flex flex-row justify-start gap-4 ">
            <p className="text-xs not-italic font-medium leading-6 text-slate-400">Privacy Policy</p>
            <p className="text-xs not-italic font-medium leading-6 text-slate-400">Terms of Use</p>
        </div>
           
        </div>
      </div>
    </div>
  );
};

export default Footer;
