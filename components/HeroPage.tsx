"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import pix from "../assests/pix.jpg";
import bgImage from "../assests/new2.png";
import Countdown from "./Countdown";

const HeroPage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate: string[] = [
    "Save the Date !",
    "We would love you to celebrate with us",
    "On Our journey to say I Do",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

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
          <div className="text-sm font-normal  text-[#C03969] ">
            <span
              data-period="1000"
              data-rotate='["Save the Date !",
              "We would love you to celebrate with us",
              "On Our journey to say I Do","]'
            >
              <span className="wrap">{text}</span>
            </span>
          </div>
          <div className="w-full text-center ">
            <Countdown />
          </div>
          <h1 className="text-6xl text-center font-bold">
            Elizabeth <br /> &<br /> Daniel
          </h1>
          <button className="border px-8 py-2 rounded-2xl border-[#C03969] text-[#C03969] font-semibold">
            <a href="https://forms.gle/TZTptswfaFMkpK88A">RSVP</a>
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
