import React from "react";
import flower from "../assests/pix2.jpg";
import Image from "next/image";

const Details = () => {
  return (
    <div className="h-[500px] bg-red-200 w-full flex justify-center items-center mt-2">
      <div className="w-full bg-cover h-[500px] relative">
        <Image
          src={flower}
          alt="image.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-[70%]  w-[90%] absolute bg-[#E7D3D0] p-5 rounded-2xl flex flex-col">
        <h1 className="md:text-8xl text-4xl md:w-[500px] capitalize text-[#C03969] md:tracking-wider    font-bold">
          the wedding details
        </h1>
        <div className="flex justify-between  mt-8 flex-col md:flex-row">
          <div className="flex flex-col font-semibold text-xs md:text-sm ">
            <span> Date: December 16, 2023</span>
            <span>Time: 11:00 AM</span>
          </div>
          <div className="md:w-[400px] w-full font-semibold text-xs md:text-sm mt-4 md:mt-0">
            <span>
              Venue: Joy eternal evangelical Mission
              <br />
              15b, Shogbesan Street, off Ezeagu street ,Ojo road, Ajegunle,
              Lagos state
              <p className="mt-4 ">
                <span className="text-[#C03969] font-bold">Color of the Date</span> <br /> White, Gold and navy-blue
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
