import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = new URLSearchParams(location.search).get('score');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-5xl font-bold mb-4 text-white">Quiz Completed!</h1>
      <p className="text-3xl text-white mb-6">Your Score: {score}</p>
      <button 
        onClick={() => navigate('/')} 
        className="mt-4 px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
      >
        Play Again
      </button>
    </div>
  );
};

export default Result;
