import { useState, useEffect } from 'react';
import { questions } from './data/questions';
import codehuntLogo from './assets/codehunt_minimal_logo.svg';
import './index.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    background: 'linear-gradient(135deg, #3498db 0%, #2ecc71 50%, #27ae60 100%)',
    backgroundAttachment: 'fixed',
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden' as const
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Timer effect
  useEffect(() => {
    if (!isLoggedIn || isAnswered) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsAnswered(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isLoggedIn, isAnswered, currentQuestionIndex]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
    }
  };

  const checkAnswer = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === currentQuestion.answer;
    if (isCorrect) {
      // Calculate points based on question ID
      let points = 10;
      if (currentQuestion.id > 10 && currentQuestion.id <= 20) {
        points = 20;
      } else if (currentQuestion.id > 20) {
        points = 30;
      }
      setScore(score + points);
    }

    setIsAnswered(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(60);
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={containerStyle}>
        <div className="card-wrapper" style={{
          border: '1px solid #d1d5db', 
          borderRadius: '1.5rem', 
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3), 8px 8px 20px rgba(0, 0, 0, 0.2), -4px 4px 10px rgba(0, 0, 0, 0.1)', 
          padding: '5rem', 
          margin: 'auto',
          marginTop: '3rem',
          backgroundColor: 'white',
          width: '36rem', 
          height: '30rem', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'center',
          paddingTop: '3rem',
          overflow: 'hidden'
        }}>
          <div className="text-center mb-8 flex flex-col items-center justify-center">
            <img src={codehuntLogo} alt="CodeHunt Logo" className="mb-6" style={{width: '220px', display: 'block', margin: '0 auto'}} />
            <p className="text-gray-600 biorhyme-regular text-center">
              Test your coding skills and debug like a pro!
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col items-center justify-center w-full">
            <div className="mb-8 flex flex-col items-center justify-center w-full">
              <div className="mb-2 text-center">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2 biorhyme-regular">
                  Username:
                </label>
              </div>
              
              <div className="mt-4">
                <input
                  type="text"
                  id="username"
                  className="input w-64 biorhyme-regular text-center"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            <div className="mt-36 flex justify-center w-full">
              <button
                type="submit"
                className="biorhyme-regular px-8 py-4 rounded-xl transition-colors duration-300"
                style={{
                  backgroundColor: username.trim() ? '#2ecc71' : '#a7e9c3',
                  color: 'white',
                  cursor: username.trim() ? 'pointer' : 'not-allowed',
                  border: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)'
                }}
                disabled={!username.trim()}
              >
                Start Playing
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div className="card-wrapper" style={{
        border: '1px solid #d1d5db', 
        borderRadius: '1.5rem', 
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3), 8px 8px 20px rgba(0, 0, 0, 0.2), -4px 4px 10px rgba(0, 0, 0, 0.1)', 
        padding: '3rem', 
        margin: 'auto',
        backgroundColor: 'white',
        width: '42rem', 
        minHeight: '36rem', 
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <div className="flex justify-between items-center mb-6 w-full">
          <div>
            <h1 className="text-2xl biorhyme-bold text-blue-600">CodeHunt</h1>
            <p className="text-gray-600 biorhyme-light">Debug and learn!</p>
          </div>
          <div className="text-right">
            <p className="text-sm biorhyme-regular text-gray-700">Playing as <span className="biorhyme-bold">{username}</span></p>
            <p className="text-xl biorhyme-bold text-blue-600">Score: {score}</p>
            <div className="mt-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-bold">
              Time: {timeLeft}s
            </div>
          </div>
        </div>

        <div className="question-content w-full">
          <div className="flex justify-between items-center mb-4 text-gray-700">
            <h2 className="text-xl biorhyme-bold">Question {currentQuestion.id}</h2>
            <div className="flex items-center">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm biorhyme-medium">
                {currentQuestion.id <= 10 ? 10 : currentQuestion.id <= 20 ? 20 : 30} points
              </span>
            </div>
          </div>
          
          <div className="mb-6 whitespace-pre-wrap text-gray-700 biorhyme-regular">
            {currentQuestion.question}
          </div>

          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                onClick={() => !isAnswered && handleAnswerSelect(option)}
                className="flex items-center p-3 border rounded-lg mb-2 cursor-pointer hover:bg-gray-50 transition-colors"
                style={{
                  borderColor: 
                    selectedAnswer === option && !isAnswered ? '#3b82f6' : 
                    isAnswered && option === currentQuestion.answer ? '#22c55e' : 
                    isAnswered && selectedAnswer === option && option !== currentQuestion.answer ? '#ef4444' : 
                    '#e5e7eb',
                  backgroundColor: 
                    selectedAnswer === option && !isAnswered ? '#eff6ff' : 
                    isAnswered && option === currentQuestion.answer ? '#f0fdf4' : 
                    isAnswered && selectedAnswer === option && option !== currentQuestion.answer ? '#fef2f2' : 
                    'white'
                }}
              >
                <div 
                  className="w-7 h-7 rounded-full flex items-center justify-center border-2 mr-3 flex-shrink-0"
                  style={{
                    borderColor: 
                      selectedAnswer === option && !isAnswered ? '#3b82f6' : 
                      isAnswered && option === currentQuestion.answer ? '#22c55e' : 
                      isAnswered && selectedAnswer === option && option !== currentQuestion.answer ? '#ef4444' : 
                      '#9ca3af',
                    backgroundColor: 
                      selectedAnswer === option || 
                      (isAnswered && option === currentQuestion.answer) || 
                      (isAnswered && selectedAnswer === option) ? 
                        selectedAnswer === option && !isAnswered ? '#3b82f6' : 
                        isAnswered && option === currentQuestion.answer ? '#22c55e' : 
                        '#ef4444' : 
                        'white',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {(selectedAnswer === option || (isAnswered && option === currentQuestion.answer)) && (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-gray-700 biorhyme-regular">{option}</span>
              </div>
            ))}
          </div>

          {/* Always show explanation when answered, regardless of correct/incorrect */}
          {isAnswered && (
            <div className={`explanation-box ${selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect'}`}>
              <h3 className="biorhyme-bold mb-2">
                {selectedAnswer === currentQuestion.answer ? '✅ Correct!' : '❌ Incorrect!'}
              </h3>
              <p className="biorhyme-regular">{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="mt-6 flex justify-end">
            {isAnswered ? (
              <button
                onClick={nextQuestion}
                className="biorhyme-regular px-8 py-4 rounded-xl transition-colors duration-300"
                style={{
                  backgroundColor: '#60a5fa',
                  color: 'white',
                  border: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                  cursor: 'pointer'
                }}
              >
                Next Question
              </button>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
