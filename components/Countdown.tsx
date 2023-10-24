"use client";
import React, { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date(2023, 11, 16, 11, 0, 0);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetTime = targetDate.getTime();
    const timeDifference = targetTime - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const calculateAndSetTimeLeft = () => {
      setTimeLeft(calculateTimeLeft());
    };

    calculateAndSetTimeLeft(); // Initial calculation
    const interval = setInterval(calculateAndSetTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="md:text-sm mt-4 text-sm  text-[#C03969] font-bold">
        {`${timeLeft.days} days: ${timeLeft.hours} hours : ${timeLeft.minutes} minutes : ${timeLeft.seconds} seconds`}
      </div>
    </div>
  );
};

export default Countdown;
