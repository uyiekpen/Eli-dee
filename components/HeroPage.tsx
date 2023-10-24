import Image from "next/image";
import React from "react";
import pix from "../assests/pix.jpg";
import bgImage from "../assests/new2.png";
import Countdown from "./Countdown";

const HeroPage = () => {
  return (
    <div className="h-[600px]  w-full flex justify-center items-center">
      <div className="w-full bg-cover h-[600px] relative">
        <Image
          src={bgImage}
          alt="image.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute flex justify-between w-[90%] flex-col md:flex-row items-center ">
        <div className="md:w-1/2 w-full flex justify-center items-center  flex-col capitalize space-y-5">
          <div className="text-sm font-light  text-[#C03969] ">
            save the date!
          </div>
          <div className="w-full text-center ">
            <Countdown />
          </div>
          <h1 className="text-6xl text-center font-bold">
            Elizabeth <br /> &<br /> Daniel
          </h1>
          <button className="border px-8 py-2 rounded-2xl border-[#C03969] text-[#C03969] font-semibold">
            RSVP
          </button>
        </div>
        <div className="w-1/2 md:block justify-center items-center hidden ">
          <div className="w-[70%] h-[400px] rounded-lg ">
            <Image
              src={pix}
              alt="our.png"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
