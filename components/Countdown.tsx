import React, { useState, useEffect } from 'react';
import { DATES } from '../constants';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +DATES.LAUNCH_DEADLINE - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Stop timer at 0
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Initial call
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper to pad numbers with leading zero
  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center space-x-2 font-mono text-gold font-bold text-lg md:text-xl tracking-wider">
      <div className="flex flex-col items-center leading-none">
        <span>{format(timeLeft.days)}</span>
        <span className="text-[10px] text-white/60 font-sans uppercase">Days</span>
      </div>
      <span className="pb-3 text-white">:</span>
      <div className="flex flex-col items-center leading-none">
        <span>{format(timeLeft.hours)}</span>
        <span className="text-[10px] text-white/60 font-sans uppercase">Hrs</span>
      </div>
      <span className="pb-3 text-white">:</span>
      <div className="flex flex-col items-center leading-none">
        <span>{format(timeLeft.minutes)}</span>
        <span className="text-[10px] text-white/60 font-sans uppercase">Min</span>
      </div>
      <span className="pb-3 text-white">:</span>
      <div className="flex flex-col items-center leading-none">
        <span>{format(timeLeft.seconds)}</span>
        <span className="text-[10px] text-white/60 font-sans uppercase">Sec</span>
      </div>
    </div>
  );
};

export default Countdown;