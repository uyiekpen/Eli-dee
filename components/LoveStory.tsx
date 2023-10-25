import Image from "next/image";
import React from "react";
import bgImage from "../assests/new2.png";
import pix from "../assests/pix.jpg";

const LoveStory = () => {
  return (
    <div className="md:h-[600px]   w-full flex justify-center items-center ">
      <div className=" flex justify-between w-[90%] flex-col md:flex-row items-center ">
        <div className="md:w-1/2 w-full flex  items-center  flex-col capitalize">
          <div className="  text-[#C03969] font-semibold text-2xl md:text-6xl tracking-wide mt-2 md:w-[300px] md:text-center">
            Our love Story
          </div>
        </div>
        <div className="md:w-1/2 w-full mt-2">
          <p className="md:w-[500px] text-center leading-8 ">
            four years ago, we were just two strangers. After
            countless play dates and real romantic dates later, here we are!
            We hope you can join us as our love story continues with us saying
            our I Do's.
          </p>
          <div className="w-[90%] h-[300px] rounded-lg mt-2">
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

export default LoveStory;
