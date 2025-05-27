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
  nextQuestion: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  isAnswered,
  handleAnswerSelect,
  checkAnswer,
  nextQuestion
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-2 pt-0 mb-4" style={{ maxHeight: 'calc(100vh - 70px)', display: 'flex', flexDirection: 'column', overflow: 'visible', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
        <div>
          <h2 className="text-xl font-bold mb-0">Question {question.id}</h2>
          <p className="text-base font-semibold">{question.points} points</p>
        </div>
      </div>
      
      <div className="mb-1">
        <p className="biorhyme-regular mb-1 text-base">{question.text}</p>
      </div>

      <div className="space-y-1">
        {question.options.map((option, index) => (
          <div
            key={index}
            onClick={() => !isAnswered && handleAnswerSelect(option)}
            className="flex items-center p-3 border-2 rounded-lg mb-2 hover:bg-gray-50 transition-colors"
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
                'white',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              {/* Left side checkmark/icon - absolutely positioned to ensure proper alignment */}
              <div style={{ width: '30px', marginRight: '10px', display: 'flex', justifyContent: 'center' }}>
                {selectedAnswer === option && !isAnswered && (
                  <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '24px' }}>✓</span>
                )}
                {isAnswered && option === question.answer && (
                  <span style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '24px' }}>✓</span>
                )}
                {isAnswered && selectedAnswer === option && option !== question.answer && (
                  <span style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '24px' }}>✗</span>
                )}
                {!(selectedAnswer === option || (isAnswered && option === question.answer) || (isAnswered && selectedAnswer === option && option !== question.answer)) && (
                  <div style={{ width: '20px', height: '20px', border: '2px solid #9ca3af', borderRadius: '4px' }}></div>
                )}
              </div>
              
              {/* Option text */}
              <span className="text-gray-800 biorhyme-regular text-lg">{option}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Always show explanation when answered, regardless of correct/incorrect */}
      {isAnswered && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginTop: '-20px', marginBottom: '10px' }}>
          <h3 className="font-bold mb-1 text-base" style={{ color: selectedAnswer === question.answer ? '#166534' : '#991b1b', marginLeft: '10px' }}>{selectedAnswer === question.answer ? '✓ Correct!' : '✗ Incorrect!'}</h3>
          <div className={`explanation-box p-2 border-2 rounded-lg ${selectedAnswer === question.answer ? 'correct' : 'incorrect'}`} style={{
            borderColor: selectedAnswer === question.answer ? '#22c55e' : '#ef4444',
            backgroundColor: selectedAnswer === question.answer ? '#f0fdf4' : '#fef2f2',
            marginBottom: '15px',
            minHeight: 'auto',
            maxHeight: 'none',
            overflowY: 'visible',
            wordBreak: 'break-word',
            width: '100%',
            position: 'relative',
            zIndex: 5
          }}>
            <p className="biorhyme-regular text-sm font-medium" style={{ color: selectedAnswer === question.answer ? '#166534' : '#991b1b', maxWidth: '100%', display: 'inline-block' }}>{question.explanation}</p>
          </div>
        </div>
      )}

      {/* Submit Answer button when not answered yet */}
      {!isAnswered && (
        <div className="mt-8 flex justify-center sticky bottom-1 z-10">
          <button
            onClick={checkAnswer}
            disabled={!selectedAnswer}
            className="biorhyme-regular px-6 py-3 rounded-xl transition-colors duration-300"
            style={{
              backgroundColor: selectedAnswer ? '#2ecc71' : '#a7e9c3',
              color: 'white',
              cursor: selectedAnswer ? 'pointer' : 'not-allowed',
              border: 'none',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Submit Answer
          </button>
        </div>
      )}
      
      {/* Next Question button when answered - positioned at the bottom right of the card */}
      {isAnswered && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', marginBottom: '10px', position: 'absolute', bottom: '10px', right: '20px', zIndex: 100 }}>
          <button
            onClick={nextQuestion}
            className="biorhyme-regular px-5 py-3 rounded-xl transition-colors duration-300"
            style={{
              backgroundColor: '#8b5cf6', /* Purple color */
              color: 'white',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
              fontSize: '16px',
              fontWeight: 'bold',
              minWidth: '160px'
            }}
          >
            Next Question →
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;