import React from 'react';
import Timer from './Timer';

interface GameHeaderProps {
  username: string;
  score: number;
  timeLeft: number;
  onTimeUp: () => void;
}

const GameHeader: React.FC<GameHeaderProps> = ({ username, score, timeLeft, onTimeUp }) => {
  return (
    <div className="game-header mb-6">
      <h1 className="text-3xl font-bold mb-4">CodeHunt</h1>
      <p className="biorhyme-regular mb-2">Debug and learn!</p>
      
      <div className="flex flex-wrap justify-between items-center mt-4">
        <div>
          <p className="biorhyme-regular">Playing as {username}</p>
        </div>
        
        <div>
          <p className="biorhyme-regular">Score: {score}</p>
        </div>
        
        <div className="w-full md:w-auto mt-2 md:mt-0">
          <Timer initialTime={timeLeft} onTimeUp={onTimeUp} />
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
