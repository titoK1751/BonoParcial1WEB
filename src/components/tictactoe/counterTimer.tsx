'use client';

import { useEffect, useState } from 'react';

function CounterTimer() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleIncreaseCounter = () => {
    if (!isRunning) {
      if (timeLeft === 0) {
        setCount(0);
      }

      setTimeLeft(10);
      setIsRunning(true);
      setCount((prev) => prev + 1);
      return;
    }

    setCount((prev) => prev + 1);
  };

  return (
    <div className="space-y-3 rounded-md border p-4">
      <p className="text-lg font-semibold">counter: {count}</p>
      <p className="text-sm">time left: {timeLeft} seconds</p>
      <button
        type="button"
        onClick={handleIncreaseCounter}
        className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-100"
      >
        aumentar contador
      </button>
    </div>
  );
}

export default CounterTimer;
