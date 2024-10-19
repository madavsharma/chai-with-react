import { useNavigate } from 'react-router-dom';
import '../styles.css'; 
import quizLogo from '../assets/logo.png';

const Home = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="home-container">
      <img 
        src={quizLogo} 
        alt="Quiz Logo" 
        className="quiz-logo" 
      />
      <h1>Welcome to the Quiz!</h1>
      <button className="start-button" onClick={startQuiz}>
        <i className="fas fa-play"></i> Start Quiz
      </button>
    </div>
  );
};

export default Home;
