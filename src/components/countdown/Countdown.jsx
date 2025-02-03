import React, { useState, useEffect } from "react";
import "./countdown.css";

export const Countdown = () => {
  const countdownDate = new Date("Mar 06, 2025 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="countdown">
      <div id="timer">
        <div className="timerBox">{timeLeft.days} Días</div>
        <div className="timerBox">{timeLeft.hours} horas</div>
        <div className="timerBox">{timeLeft.minutes} minutos</div>
        <div className="timerBox">{timeLeft.seconds} segundos</div>
      </div>
    </div>
  );
};
