import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const Quiz = () => {
  const [questions, setQuestions] = useState([]); // Initialize as an empty array
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch('http://localhost:3000/questions'); // Fetching from json-server
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        console.log(data);
        setQuestions(data); // Store the fetched questions
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  // Handle answer submission
  const handleAnswerSubmit = (isCorrect) => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1); // Move to the next question
    } else {
      navigate(`/result?score=${isCorrect ? 1 : 0}`); // Navigate to the result page with score
    }
  };

  // Check for loading and error states
  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!questions || questions.length === 0) {
    console.log('Questions array:', questions);
    return <p className="text-center">No questions available.</p>;
  }

  return (
    <div className="quiz-container p-6 bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-6">Quiz Time!</h1>
      <ProgressBar progress={(currentQuestion + 1) / questions.length * 100} />
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md my-4">
        <h2 className="text-3xl font-semibold my-4 text-center">{questions[currentQuestion]?.question}</h2>
        <div className="options grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions[currentQuestion]?.options.map((option, idx) => (
            <button 
              key={idx} 
              onClick={() => handleAnswerSubmit(option === questions[currentQuestion].correctAnswer)}
              className="bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
