import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';

const Score = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = new URLSearchParams(location.search).get('score');
  const totalQuestions = 10; 
  const message = score >= totalQuestions / 2 ? "Great job!" : "Thanks for participating!";

  return (
    <div className="result-container">
      <h1>Your Result</h1>
      <div className="score">{score} / {totalQuestions}</div>
      <p className="result-message">{message}</p>
      <div className="button-container">
        <button onClick={() => navigate('/')} className="play-again-button">
          <i className="fas fa-redo"></i> Play Again 
        </button>
      </div>
    </div>
  );
};

export default Score;
