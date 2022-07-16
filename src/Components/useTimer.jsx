import { useEffect, useState } from "react";

const useTimer = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [msecond, setMsecond] = useState(0);
  const [stop, setStop] = useState(true);

  const onStart = () => {
    setStop(false);
  };
  const onStop = () => {
    setStop(true);
  };
  useEffect(() => {
    let interval;
    if (!stop) {
      interval = setInterval(() => {
        if (second > 59) {
          setMinute(minute + 1);
          setSecond(0);
          clearInterval(interval);
        }
        if (msecond > 99) {
          setSecond(second + 1);
          setMsecond(0);
          clearInterval(interval);
        }
        if (msecond <= 99) {
          setMsecond(msecond + 1);
        }
      }, 10);
    } else {
      setInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return {  minute, second, msecond, onStart, onStop };
};

export { useTimer };
