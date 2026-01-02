import React, { useEffect, useState } from "react";
import "./Timer.css";

const Timer = ({ minutes, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    setTimeLeft(minutes * 60);
  }, [minutes]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeout]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  const danger = timeLeft <= 60;
  const warning = timeLeft <= minutes * 60 * 0.3;

  return (
    <div
      className={`timer ${danger ? "danger" : warning ? "warning" : ""}`}
    >
      ⏳ {mins}:{secs.toString().padStart(2, "0")}
    </div>
  );
};

export default Timer;
