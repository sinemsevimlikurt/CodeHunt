import React, { useEffect, useState } from 'react';

interface TimerProps {
  initialTime: number;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // Reset timer when initialTime changes
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate percentage for progress bar
  const percentage = (timeLeft / initialTime) * 100;

  return (
    <div className="timer-container">
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
          <div 
            className="h-2.5 rounded-full" 
            style={{
              width: `${percentage}%`,
              backgroundColor: percentage > 50 ? '#22c55e' : percentage > 25 ? '#f59e0b' : '#ef4444'
            }}
          ></div>
        </div>
        <span className="biorhyme-regular text-lg font-medium">⏱️ {formatTime(timeLeft)}</span>
      </div>
    </div>
  );
};

export default Timer;