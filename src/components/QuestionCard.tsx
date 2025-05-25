import React from 'react';

interface Question {
  id: number;
  text: string;
  options: string[];
  answer: string;
  explanation: string;
  points: number;
}

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  isAnswered: boolean;
  handleAnswerSelect: (option: string) => void;
  checkAnswer: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  isAnswered,
  handleAnswerSelect,
  checkAnswer
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-2">Question {question.id}</h2>
      <p className="text-sm mb-4">{question.points} points</p>
      
      <div className="mb-6">
        <p className="biorhyme-regular mb-2">{question.text}</p>
      </div>

      <div className="space-y-2">
        {question.options.map((option, index) => (
          <div
            key={index}
            onClick={() => !isAnswered && handleAnswerSelect(option)}
            className="flex items-center p-3 border rounded-lg mb-2 cursor-pointer hover:bg-gray-50 transition-colors"
            style={{
              borderColor: 
                selectedAnswer === option && !isAnswered ? '#3b82f6' : 
                isAnswered && option === question.answer ? '#22c55e' : 
                isAnswered && selectedAnswer === option && option !== question.answer ? '#ef4444' : 
                '#e5e7eb',
              backgroundColor: 
                selectedAnswer === option && !isAnswered ? '#eff6ff' : 
                isAnswered && option === question.answer ? '#f0fdf4' : 
                isAnswered && selectedAnswer === option && option !== question.answer ? '#fef2f2' : 
                'white'
            }}
          >
            {/* Prominent round checkbox */}
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center border-4 mr-4 flex-shrink-0 cursor-pointer hover:shadow-lg"
              style={{
                borderColor: 
                  selectedAnswer === option && !isAnswered ? '#3b82f6' : 
                  isAnswered && option === question.answer ? '#22c55e' : 
                  isAnswered && selectedAnswer === option && option !== question.answer ? '#ef4444' : 
                  '#4b5563',
                backgroundColor: 'white',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Show colored dot when selected or answered correctly */}
              {(selectedAnswer === option || (isAnswered && option === question.answer)) && (
                <div 
                  className="w-6 h-6 rounded-full" 
                  style={{
                    backgroundColor: 
                      selectedAnswer === option && !isAnswered ? '#3b82f6' : 
                      isAnswered && option === question.answer ? '#22c55e' : 
                      '#ef4444',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                  }}
                ></div>
              )}
              {/* Show empty circle when not selected */}
              {!(selectedAnswer === option || (isAnswered && option === question.answer)) && (
                <div className="w-6 h-6 rounded-full border-3 border-gray-600 hover:border-gray-800"></div>
              )}
            </div>
            <span className="text-gray-700 biorhyme-regular">{option}</span>
          </div>
        ))}
      </div>

      {/* Always show explanation when answered, regardless of correct/incorrect */}
      {isAnswered && (
        <div className={`explanation-box ${selectedAnswer === question.answer ? 'correct' : 'incorrect'}`}>
          <h3 className="font-bold mb-2">{selectedAnswer === question.answer ? '✓ Correct!' : '✗ Incorrect!'}</h3>
          <p className="biorhyme-regular">{question.explanation}</p>
        </div>
      )}

      {!isAnswered && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={checkAnswer}
            disabled={!selectedAnswer}
            className="biorhyme-regular px-8 py-4 rounded-xl transition-colors duration-300"
            style={{
              backgroundColor: selectedAnswer ? '#2ecc71' : '#a7e9c3',
              color: 'white',
              cursor: selectedAnswer ? 'pointer' : 'not-allowed',
              border: 'none',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)'
            }}
          >
            Submit Answer
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;