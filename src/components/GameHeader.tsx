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
    <div className="game-header mb-4">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#003366' }}>CodeHunt</h1>
          <p className="biorhyme-regular mb-1">Debug and learn!</p>
          <p className="biorhyme-regular mt-2">Playing as {username}</p>
        </div>
        
        <div className="flex flex-col items-end" style={{ minWidth: '150px', padding: '5px' }}>
          <p className="biorhyme-regular mb-2" style={{ fontWeight: 'bold', fontSize: '18px' }}>💯 Score: {score}</p>
          <div>
            <Timer initialTime={timeLeft} onTimeUp={onTimeUp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
