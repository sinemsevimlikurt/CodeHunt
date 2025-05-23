import { useState, useEffect } from 'react';
import { questions } from './data/questions';
import './index.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

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
      <div className="w-full h-screen flex items-center justify-center">
        <div className="login-container">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600 mb-2">CodeHunt</h1>
            <p className="text-gray-600">
              Test your coding skills and debug like a pro!
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="input w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={!username.trim()}
            >
              Start Playing
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="game-container">
        <div className="flex justify-between items-center mb-6 text-white w-full">
          <div>
            <h1 className="text-2xl font-bold">CodeHunt</h1>
            <p className="text-white/80">Debug and learn!</p>
          </div>
          <div className="text-right">
            <p className="text-sm">Playing as <span className="font-bold">{username}</span></p>
            <p className="text-xl font-bold">Score: {score}</p>
          </div>
        </div>

        <div className="question-card">
          <div className="flex justify-between items-center mb-4 text-gray-700">
            <h2 className="text-xl font-bold">Question {currentQuestion.id}</h2>
            <div className="flex items-center space-x-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {currentQuestion.id <= 10 ? 10 : currentQuestion.id <= 20 ? 20 : 30} points
              </span>
              <span className="text-sm font-medium">
                Time: {timeLeft}s
              </span>
            </div>
          </div>
          
          <div className="mb-6 whitespace-pre-wrap text-gray-700">
            {currentQuestion.question}
          </div>

          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                onClick={() => !isAnswered && handleAnswerSelect(option)}
                className={`option-container ${
                  selectedAnswer === option ? 'selected' : ''
                } ${
                  isAnswered && option === currentQuestion.answer ? 'correct' : ''
                } ${
                  isAnswered && selectedAnswer === option && option !== currentQuestion.answer ? 'incorrect' : ''
                }`}
              >
                <div 
                  className={`radio-circle ${
                    selectedAnswer === option ? 'selected' : ''
                  } ${
                    isAnswered && option === currentQuestion.answer ? 'correct' : ''
                  } ${
                    isAnswered && selectedAnswer === option && option !== currentQuestion.answer ? 'incorrect' : ''
                  }`}
                ></div>
                <span className="text-gray-700">{option}</span>
              </div>
            ))}
          </div>

          {/* Always show explanation when answered, regardless of correct/incorrect */}
          {isAnswered && (
            <div className={`explanation-box ${selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect'}`}>
              <h3 className="font-bold mb-2">
                {selectedAnswer === currentQuestion.answer ? '✅ Correct!' : '❌ Incorrect!'}
              </h3>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="mt-6">
            {isAnswered ? (
              <button onClick={nextQuestion} className="btn btn-primary w-full">
                Next Question
              </button>
            ) : (
              <button
                onClick={checkAnswer}
                disabled={!selectedAnswer}
                className={`btn w-full ${
                  selectedAnswer ? 'btn-primary' : 'bg-gray-300 cursor-not-allowed text-gray-500'
                }`}
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
