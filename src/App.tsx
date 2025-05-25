import { useState, useEffect } from 'react';
import { questions } from './data/questions';
import codehuntLogo from './assets/codehunt_minimal_logo.svg';
import './index.css';

// Import components
import Login from './components/Login';
import QuestionCard from './components/QuestionCard';
import GameHeader from './components/GameHeader';

// Define Question interface for type safety
interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

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

  const cardStyle = {
    border: '1px solid #d1d5db', 
    borderRadius: '1.5rem', 
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3), 8px 8px 20px rgba(0, 0, 0, 0.2), -4px 4px 10px rgba(0, 0, 0, 0.1)', 
    padding: '3rem', 
    margin: 'auto',
    backgroundColor: 'white',
    width: '42rem', 
    minHeight: '36rem', 
    display: 'flex', 
    flexDirection: 'column' as const,
    overflow: 'hidden'
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Handle time up event from Timer component
  const handleTimeUp = () => {
    if (!isAnswered) {
      setIsAnswered(true);
    }
  };

  // Handle login from Login component
  const handleLogin = (username: string) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  // Handle answer selection from QuestionCard component
  const handleAnswerSelect = (answer: string) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
    }
  };

  // Check answer and calculate score
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

  // Move to next question
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(60);
    }
  };

  // If not logged in, show login screen
  if (!isLoggedIn) {
    return (
      <div style={containerStyle}>
        <div className="card-wrapper" style={{
          ...cardStyle,
          width: '36rem',
          height: '30rem',
          padding: '5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: '3rem'
        }}>
          <div className="text-center mb-8 flex flex-col items-center justify-center">
            <img 
              src={codehuntLogo} 
              alt="CodeHunt Logo" 
              className="mb-6" 
              style={{width: '220px', display: 'block', margin: '0 auto'}} 
            />
          </div>
          
          <Login onLogin={handleLogin} />
        </div>
      </div>
    );
  }

  // Main game screen
  return (
    <div style={containerStyle}>
      <div className="card-wrapper" style={cardStyle}>
        {/* Game header with username, score and timer */}
        <GameHeader 
          username={username} 
          score={score} 
          timeLeft={timeLeft} 
          onTimeUp={handleTimeUp} 
        />

        {/* Question card component */}
        <QuestionCard 
          question={{
            id: currentQuestion.id,
            text: currentQuestion.question,
            options: currentQuestion.options,
            answer: currentQuestion.answer,
            explanation: currentQuestion.explanation,
            points: currentQuestion.id <= 10 ? 10 : currentQuestion.id <= 20 ? 20 : 30
          }} 
          selectedAnswer={selectedAnswer} 
          isAnswered={isAnswered} 
          handleAnswerSelect={handleAnswerSelect} 
          checkAnswer={checkAnswer} 
        />
        
        {/* Next question button */}
        {isAnswered && (
          <div className="mt-6 flex justify-end">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
