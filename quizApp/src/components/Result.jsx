import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = new URLSearchParams(location.search).get('score');
  const totalQuestions = 2; // Update this value to reflect the total number of questions
  const message = score >= totalQuestions / 2 ? "Great job!" : "Thanks for participating!";

  return (
    <div className="result-container">
      <h1>Your Result</h1>
      <div className="score">{score} / {totalQuestions}</div> {/* Display the score */}
      <p className="result-message">{message}</p> {/* Display message based on score */}
      <div className="button-container"> {/* New container for centering buttons */}
        <button onClick={() => navigate('/')} className="play-again-button">
          <i className="fas fa-redo"></i> Play Again {/* Redo icon */}
        </button>
      </div>
    </div>
  );
};

export default Result;
