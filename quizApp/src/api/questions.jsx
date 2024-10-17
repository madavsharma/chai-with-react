export default function handler(req, res) {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      id: 2,
      question: "Which is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      correctAnswer: "Jupiter"
    }
  ];

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ questions });
}
