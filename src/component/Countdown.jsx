// src/component/Countdown.jsx
import React, { useState, useEffect } from 'react';

const Countdown = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        DAY: Math.floor(difference / (1000 * 60 * 60 * 24)),
        TIME: Math.floor((difference / (1000 * 60 * 60)) % 24),
        MINUTE: Math.floor((difference / 1000 / 60) % 60),
        SECOND: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (Object.keys(newTimeLeft).length === 0 && !eventStarted) {
        setEventStarted(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, eventStarted]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="inline-block mx-3">
        <span className="block text-5xl md:text-8xl font-bold">{timeLeft[interval]}</span>
        <span className="block text-xl uppercase  text-white">{interval}</span>
      </span>
    );
  });

  return (
    <div className="bg-[#B13E91] border border-[#921a70] p-8 rounded-lg shadow-md w-full mx-auto text-center">
      <h2 className="text-2xl font-bold text-[#5E0DA0] mb-6 bg-white p-2 rounded-2xl">Road to SKIN & PLANT CARE 2025!</h2>
      {eventStarted ? (
        <p className="text-3xl text-green-600 font-semibold">Acara telah dimulai! Selamat datang!</p>
      ) : (
        <div className="flex justify-center countdown-timer text-white">
          {timerComponents.length ? timerComponents : <span className="text-lg text-gray-600">Loading Countdown...</span>}
        </div>
      )}
    </div>
  );
};

export default Countdown;