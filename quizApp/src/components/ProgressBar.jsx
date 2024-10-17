const ProgressBar = ({ progress }) => {
    return (
      <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  };
  
  export default ProgressBar;
  