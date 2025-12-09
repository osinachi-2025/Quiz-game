// Quiz questions database
const quizDatabase = {
  general: [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct: 1
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: 1
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      correct: 2
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
      correct: 1
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      correct: 1
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      correct: 2
    },
    {
      question: "What is the currency of Japan?",
      options: ["Won", "Yuan", "Yen", "Baht"],
      correct: 2
    },
    {
      question: "Which country is home to the kangaroo?",
      options: ["New Zealand", "Australia", "South Africa", "Brazil"],
      correct: 1
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Denali"],
      correct: 2
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1912", "1920", "1905", "1915"],
      correct: 0
    }
  ],
  science: [
    {
      question: "What is the chemical symbol for Gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correct: 2
    },
    {
      question: "How many bones are in the human body?",
      options: ["186", "206", "226", "246"],
      correct: 1
    },
    {
      question: "What is the speed of light?",
      options: ["300,000 km/s", "150,000 km/s", "400,000 km/s", "200,000 km/s"],
      correct: 0
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correct: 2
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
      correct: 2
    },
    {
      question: "What is the atomic number of Carbon?",
      options: ["4", "6", "8", "12"],
      correct: 1
    },
    {
      question: "What does DNA stand for?",
      options: ["Deoxyribonucleic Acid", "Diribonucleic Acid", "Dynamic Nucleic Acid", "Deoxyribose Nucleotide"],
      correct: 0
    },
    {
      question: "How many planets are in our solar system?",
      options: ["7", "8", "9", "10"],
      correct: 1
    },
    {
      question: "What is the boiling point of water in Celsius?",
      options: ["90", "100", "110", "120"],
      correct: 1
    },
    {
      question: "What is the most abundant gas in Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Argon", "Carbon Dioxide"],
      correct: 1
    }
  ],
  history: [
    {
      question: "In what year did Columbus discover America?",
      options: ["1491", "1492", "1493", "1494"],
      correct: 1
    },
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
      correct: 1
    },
    {
      question: "In which year did World War II end?",
      options: ["1943", "1944", "1945", "1946"],
      correct: 2
    },
    {
      question: "Who wrote the Declaration of Independence?",
      options: ["Benjamin Franklin", "John Adams", "Thomas Jefferson", "George Washington"],
      correct: 2
    },
    {
      question: "What ancient wonder is still standing?",
      options: ["Colossus of Rhodes", "Great Pyramid of Giza", "Hanging Gardens", "Lighthouse of Alexandria"],
      correct: 1
    },
    {
      question: "In which century did the Renaissance begin?",
      options: ["13th", "14th", "15th", "16th"],
      correct: 1
    },
    {
      question: "Who invented the printing press?",
      options: ["Gutenberg", "Gutenberg", "Caxton", "Jikji"],
      correct: 0
    },
    {
      question: "What year did the Titanic sink?",
      options: ["1910", "1911", "1912", "1913"],
      correct: 2
    },
    {
      question: "Who was the first emperor of Rome?",
      options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
      correct: 1
    },
    {
      question: "In which year did the Berlin Wall fall?",
      options: ["1987", "1988", "1989", "1990"],
      correct: 2
    }
  ],
  geography: [
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correct: 2
    },
    {
      question: "Which river is the longest in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correct: 1
    },
    {
      question: "What is the capital of Brazil?",
      options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
      correct: 2
    },
    {
      question: "Which country has the most islands?",
      options: ["Canada", "Indonesia", "Sweden", "Norway"],
      correct: 2
    },
    {
      question: "What is the capital of Egypt?",
      options: ["Giza", "Alexandria", "Cairo", "Luxor"],
      correct: 2
    },
    {
      question: "Which is the largest desert in the world?",
      options: ["Sahara", "Arabian", "Gobi", "Antarctica"],
      correct: 3
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      correct: 2
    },
    {
      question: "How many countries are in the European Union?",
      options: ["25", "27", "28", "30"],
      correct: 1
    },
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Bangalore", "New Delhi", "Kolkata"],
      correct: 2
    },
    {
      question: "Which country is home to Dracula's castle?",
      options: ["Hungary", "Romania", "Bulgaria", "Serbia"],
      correct: 1
    }
  ]
};

// Quiz state
let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;
let quizCategory = '';
let quizDifficulty = 'medium';

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadScoreHistory);

function startQuiz(category, difficulty = 'medium') {
  quizCategory = category;
  quizDifficulty = difficulty;
  
  document.getElementById('startScreen').classList.remove('active');
  document.getElementById('loadingScreen').classList.add('active');
  
  fetchQuestions(category, difficulty);
}

async function fetchQuestions(category, difficulty) {
  try {
    // Using Open Trivia Database API (free, no key required)
    const categoryMap = {
      'general': 9,
      'science': 17,
      'history': 23,
      'geography': 22,
      'sports': 21,
      'entertainment': 11
    };
    
    const categoryId = categoryMap[category] || 9;
    const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.response_code === 0 && data.results.length > 0) {
      currentQuiz = data.results.map(q => ({
        question: decodeHTML(q.question),
        options: shuffleArray([
          decodeHTML(q.correct_answer),
          ...q.incorrect_answers.map(a => decodeHTML(a))
        ]),
        correct: 0 // correct answer is always first after shuffle
      }));
      
      currentQuestion = 0;
      score = 0;
      selectedAnswer = null;
      answered = false;
      
      document.getElementById('loadingScreen').classList.remove('active');
      document.getElementById('quizScreen').classList.add('active');
      document.getElementById('totalQuestions').textContent = currentQuiz.length;
      
      loadQuestion();
    } else {
      throw new Error('Failed to fetch questions');
    }
  } catch (error) {
    console.error('Error fetching questions:', error);
    document.getElementById('loadingScreen').classList.remove('active');
    document.getElementById('startScreen').classList.add('active');
    alert('Failed to load questions. Please check your internet connection and try again.');
  }
}

function decodeHTML(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function loadQuestion() {
  const question = currentQuiz[currentQuestion];
  document.getElementById('questionNumber').textContent = currentQuestion + 1;
  document.getElementById('question').textContent = question.question;

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option';
    button.textContent = option;
    button.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(button);
  });

  updateProgressBar();
  selectedAnswer = null;
  answered = false;
  document.getElementById('nextBtn').disabled = true;
}

function selectAnswer(index) {
  if (answered) return;

  selectedAnswer = index;
  answered = true;

  const options = document.querySelectorAll('.option');
  const correctIndex = 0; // correct answer is always first

  options.forEach((option, i) => {
    if (i === correctIndex) {
      option.classList.add('correct');
    } else if (i === selectedAnswer && selectedAnswer !== correctIndex) {
      option.classList.add('incorrect');
    }
    option.disabled = true;
  });

  if (selectedAnswer === correctIndex) {
    score += 10;
    document.getElementById('score').textContent = score;
  }

  document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < currentQuiz.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function updateProgressBar() {
  const progress = ((currentQuestion + 1) / currentQuiz.length) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
}

function showResults() {
  document.getElementById('quizScreen').classList.remove('active');
  document.getElementById('resultScreen').classList.add('active');

  const percentage = score;
  document.getElementById('finalScore').textContent = percentage;
  document.getElementById('correctAnswers').textContent = `You answered ${score / 10} out of ${currentQuiz.length} questions correctly!`;

  let message = '';
  if (percentage >= 80) {
    message = '🌟 Excellent! You are a quiz master!';
  } else if (percentage >= 60) {
    message = '👍 Good job! Keep learning!';
  } else if (percentage >= 40) {
    message = '📚 Not bad! Practice more!';
  } else {
    message = '💪 Keep trying! You\'ll improve!';
  }

  document.getElementById('resultMessage').textContent = message;
  
  // Save score to cache
  saveScore(quizCategory, quizDifficulty, score);
}

// Score caching functions
function saveScore(category, difficulty, scoreValue) {
  const scoreData = {
    category: category,
    difficulty: difficulty,
    score: scoreValue,
    percentage: scoreValue,
    timestamp: new Date().toLocaleString()
  };
  
  let scores = JSON.parse(localStorage.getItem('quizScores')) || [];
  scores.push(scoreData);
  
  // Keep only last 20 scores
  if (scores.length > 20) {
    scores = scores.slice(-20);
  }
  
  localStorage.setItem('quizScores', JSON.stringify(scores));
}

function loadScoreHistory() {
  const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
  const scoreHistoryDiv = document.getElementById('scoreHistory');
  
  if (!scoreHistoryDiv) return;
  
  if (scores.length === 0) {
    scoreHistoryDiv.innerHTML = '<p>No scores yet. Start a quiz to save your score!</p>';
    return;
  }
  
  let html = '<h3>Score History (Last 20)</h3><table><tr><th>Category</th><th>Difficulty</th><th>Score</th><th>Date</th></tr>';
  
  scores.reverse().forEach(score => {
    html += `<tr>
      <td>${score.category.charAt(0).toUpperCase() + score.category.slice(1)}</td>
      <td>${score.difficulty}</td>
      <td>${score.score}%</td>
      <td>${score.timestamp}</td>
    </tr>`;
  });
  
  html += '</table>';
  scoreHistoryDiv.innerHTML = html;
}

function clearScores() {
  if (confirm('Are you sure you want to clear all score history?')) {
    localStorage.removeItem('quizScores');
    loadScoreHistory();
  }
}

function restartQuiz() {
  document.getElementById('resultScreen').classList.remove('active');
  document.getElementById('startScreen').classList.add('active');
  currentQuestion = 0;
  score = 0;
  selectedAnswer = null;
  answered = false;
}