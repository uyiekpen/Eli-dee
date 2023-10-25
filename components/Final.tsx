"use client";
import React, { useEffect } from "react";
import flower from "../assests/pix2.jpg";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

const Final = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-[500px] w-full bg-red-200 flex justify-center items-center mt-2 flex-col md:flex-row">
      <div className="w-full bg-cover h-[500px] relative">
        <Image
          src={flower}
          alt="image.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center text-center md:w-[60%] w-[90%] space-y-5 rounded-[20px] bg-[#E7D3D0] h-[70%] p-2">
        <div className="md:text-6xl text-xl font-semibold   w-[90%] mt-2 ">
          We look forward to celebrating with you!
        </div>
        <div className=" mt-2 text-xs font-bold ">
          <span> Your presence is already a priceless present.</span>
          <p>Should you wish to send us a little something besides</p>
          <p className="mt-4 font-bold ">Send in your cash gift via account</p>
          <p className="mt-4 font-bold uppercase">
            Bank name: Wema Bank
            <br />
            Account name: uyiekpen osazie elizabeth <br />
            account number: 0275557917
          </p>
        </div>
        <button className="border px-8 py-2 rounded-2xl border-[#C03969] text-[#C03969] font-semibold">
          RSVP
        </button>
      </div>
    </div>
  );
};

export default Final;
