import React from "react";
import flower from "../assests/flowe.png";
import Image from "next/image";

const Final = () => {
  return (
    <div className="h-[500px] w-full bg-red-200 flex justify-center items-center mt-2 flex-col md:flex-row">
      <div className="md:h-[200px]  md:w-[40%]">
        <Image src={flower} alt="flower.png" />
      </div>
      <div className="flex flex-col justify-center items-center text-center space-y-5">
        <div className="md:text-6xl text-xl font-semibold md:w-[60%]  w-[90%]">
          We look forward to celebrating with you!
        </div>
        <div className=" mt-2 text-xs">
          <span> Your presence is already a priceless present.</span>
          <p>Should you wish to send us a little something besides</p>
          <p className="mt-4">Send in your cash gift via account</p>
          <p>
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
