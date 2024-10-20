export default function handler(req, res) {
  const questions = [
    {
      id: 1,
      question: "What does 'HTML' stand for?",
      options: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "HyperTech Markup Language",
        "HyperText Markdown Language"
      ],
      correctAnswer: "HyperText Markup Language"
    },
    {
      id: 2,
      question: "Which of the following is a valid binary number?",
      options: ["1021", "1101", "2345", "5789"],
      correctAnswer: "1101"
    },
    {
      id: 3,
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Selection Sort"],
      correctAnswer: "Merge Sort"
    },
    {
      id: 4,
      question: "Which of these data structures operates on a First-In-First-Out (FIFO) basis?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      correctAnswer: "Queue"
    },
    {
      id: 5,
      question: "What is the time complexity of searching for an element in a balanced binary search tree?",
      options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
      correctAnswer: "O(log n)"
    },
    {
      id: 6,
      question: "Which protocol is used for securely transmitting data over the web?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      correctAnswer: "HTTPS"
    },
    {
      id: 7,
      question: "Which language is known as the mother of all programming languages?",
      options: ["C", "Assembly", "Fortran", "Java"],
      correctAnswer: "C"
    },
    {
      id: 8,
      question: "Which of the following algorithms is used to find the shortest path in a graph?",
      options: ["Binary Search", "Dijkstra's Algorithm", "Merge Sort", "Linear Search"],
      correctAnswer: "Dijkstra's Algorithm"
    },
    {
      id: 9,
      question: "Which of the following is a non-relational database?",
      options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
      correctAnswer: "MongoDB"
    },
    {
      id: 10,
      question: "In Big-O notation, which of the following represents linear time complexity?",
      options: ["O(n^2)", "O(log n)", "O(n)", "O(1)"],
      correctAnswer: "O(n)"
    }
  ];

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ questions });
}
