import React, { useEffect, useState } from "react";
import { getRemainingTimeUntilMsTimeStamp } from "./Utils/CountDownTimerUtil";

const defaultRemainingTimer = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountDown = ({countDownTimeStamps}) => {

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTimer);

  const [isAnimatingSeconds, setIsAnimatingSeconds] = useState(false)
  const [isAnimatingMinutes, setIsAnimatingMinutes] = useState(false)
  const [isAnimatingHours, setIsAnimatingHours] = useState(false)
  const [isAnimatingDays, setIsAnimatingDays] = useState(false)

  // call every time when update countDownTimeStamps
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownTimeStamps);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countDownTimeStamps]);

  // update function for remaining time
  const updateRemainingTime = (countDownStamp) => {
    setRemainingTime(getRemainingTimeUntilMsTimeStamp(countDownStamp))
  };

// animate when second update
  useEffect(() => {
    setIsAnimatingSeconds(true);
    
    setTimeout(() => {
        setIsAnimatingSeconds(false);
      }, 700);
  },[remainingTime.seconds])

  // animate when minutes update
  useEffect(() => {
    setIsAnimatingMinutes(true);
    
    setTimeout(() => {
        setIsAnimatingMinutes(false);
      }, 700);
  },[remainingTime.minutes])

  // animate when hour update
  useEffect(() => {
    setIsAnimatingHours(true);
    
    setTimeout(() => {
        setIsAnimatingHours(false);
      }, 700);
  },[remainingTime.hours])

  // animate when days update
  useEffect(() => {
    setIsAnimatingDays(true);    
    setTimeout(() => {
        setIsAnimatingDays(false);
      }, 700);
  },[remainingTime.days])

  return (
    <div className="timer-wrapper">
      {/* Day timing */}
      <div className="time-wrap">
        <div className="flip-card">
          <div className={`top-flip ${isAnimatingDays ? 'animate-top' : ''}`}>{remainingTime.days}</div>
          <div className="top">{remainingTime.days}</div>
          <div className="bottom">{remainingTime.days}</div>
          <div className={`bottom-flip ${isAnimatingDays ? 'animate-bottom' : ''}`}>{remainingTime.days}</div>
        </div>
        <p className="time-unit">Days</p>
      </div>
      <p className="colon">:</p>
      {/* Hours timing */}
      <div className="time-wrap">
        <div className="flip-card">
          <div className={`top-flip ${isAnimatingHours ? 'animate-top' : ''}`}>{remainingTime.hours}</div>
          <div className="top">{remainingTime.hours}</div>
          <div className="bottom">{remainingTime.hours}</div>
          <div className={`bottom-flip ${isAnimatingHours ? 'animate-bottom' : ''}`}>{remainingTime.hours}</div>
        </div>
        <p className="time-unit">Hours</p>
      </div>
      <p className="colon">:</p>
      {/* Mins timing */}
      <div className="time-wrap">
        <div className="flip-card flip">
          <div className={`top-flip ${isAnimatingMinutes ? 'animate-top' : ''}`}>{remainingTime.minutes}</div>
          <div className="top">{remainingTime.minutes}</div>
          <div className="bottom">{remainingTime.minutes}</div>
          <div className={`bottom-flip ${isAnimatingMinutes ? 'animate-bottom' : ''}`}>{remainingTime.minutes}</div>
        </div>
        <p className="time-unit">Mins</p>
      </div>
      <p className="colon">:</p>

{/* seconds */}
      <div className="time-wrap">
        <div className="flip-card">
          <div className={`top-flip ${isAnimatingSeconds ? 'animate-top' : ''}`}>{remainingTime.seconds}</div>
          <div className="top">{remainingTime.seconds}</div>
          <div className="bottom">{remainingTime.seconds}</div>
          <div className={`bottom-flip ${isAnimatingSeconds ? 'animate-bottom' : ''}`}>{remainingTime.seconds}</div>
        </div>
        <p className="time-unit">Sec</p>
      </div>
    </div>
  );
};

export default CountDown;
