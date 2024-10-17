import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import '../styles.css'; // Import the styles

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(15); // Timer for each question
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch('http://localhost:3000/questions');
        if (!res.ok) throw new Error('Failed to fetch questions');
        const data = await res.json();
        setQuestions(data || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (timer > 0 && loading === false) {
      const timerId = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(timerId);
    } else if (timer === 0) {
      goNext(); // Auto-move to the next question if time runs out
    }
  }, [timer, loading]);

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers);
  };

  const goBack = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const submitQuiz = () => {
    navigate(`/result?score=${calculateScore()}`);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) score += 1;
    });
    return score;
  };

  const goNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimer(15); // Reset timer for the next question
    } else {
      submitQuiz(); // Submit the quiz if it's the last question
    }
    setProgress(((nextQuestion) / questions.length) * 100);
  };

  const allAnswered = userAnswers.length === questions.length && userAnswers.every(answer => answer !== undefined);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!questions || questions.length === 0) return <p>No questions available. Please try again later.</p>;

  const question = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <h1>Quiz Time!</h1>
      <ProgressBar progress={progress} />
      <h2>Question {currentQuestion + 1} of {questions.length}</h2> {/* Display question numbers */}
      <h2>{question.question}</h2>
      <p className="timer">Time left: {timer} seconds</p> {/* Display the timer */}
      <div className="options">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            className={`answer-button ${userAnswers[currentQuestion] === option ? 'selected' : ''}`}
            onClick={() => handleAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="navigation-buttons">
        {currentQuestion > 0 && ( // Only show Go Back if not on first question
          <button onClick={goBack} disabled={currentQuestion === 0}>
            &#8592; Go Back {/* Left arrow symbol */}
          </button>
        )}
        <div style={{ flex: 1 }} /> {/* Spacer */}
        {currentQuestion < questions.length - 1 ? (
          <button onClick={goNext} disabled={userAnswers[currentQuestion] === undefined}>
            Next &#8594; {/* Right arrow symbol */}
          </button>
        ) : (
          <button onClick={submitQuiz} disabled={!allAnswered}>
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
