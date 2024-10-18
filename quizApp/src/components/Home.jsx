import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the global stylesheet
import quizLogo from '../assets/upraised(1).png'; 

const Home = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="home-container">
      <img 
        src={quizLogo} // Use the imported image here
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
