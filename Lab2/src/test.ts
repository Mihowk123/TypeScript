interface Question {
    question: string;
    options: string[];
    correctAnswer: number; // index of the correct answer
  }
  
  const questions: Question[] = [
    {
      question: "What is TypeScript?",
      options: [
        "A superset of JavaScript",
        "A new programming language",
        "A database system"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of these is a JavaScript framework?",
      options: [
        "React",
        "Django",
        "Ruby on Rails"
      ],
      correctAnswer: 0
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language"
      ],
      correctAnswer: 0
    },
    {
      question: "Which company developed JavaScript?",
      options: [
        "Netscape",
        "Microsoft",
        "Google"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following is used to style web pages?",
      options: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of these is a programming language?",
      options: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      correctAnswer: 2
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets"
      ],
      correctAnswer: 0
    },
    {
      question: "What is React?",
      options: [
        "A JavaScript library for building user interfaces",
        "A JavaScript framework",
        "A web server"
      ],
      correctAnswer: 0
    },
    {
      question: "Which is a JavaScript runtime environment?",
      options: [
        "Node.js",
        "Apache",
        "Nginx"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of these is used for backend development?",
      options: [
        "Node.js",
        "React",
        "Angular"
      ],
      correctAnswer: 0
    },
    {
      question: "Which is the correct syntax for a JavaScript function?",
      options: [
        "function myFunction()",
        "function: myFunction()",
        "myFunction() function"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of these is a valid variable declaration in JavaScript?",
      options: [
        "var myVar",
        "let myVar",
        "Both are correct"
      ],
      correctAnswer: 2
    }
  ];
  
  let score = 0;
  
  const testContainer = document.getElementById("test-container") as HTMLElement;
  const submitButton = document.getElementById("submit-test") as HTMLButtonElement;
  const resultContainer = document.getElementById("result") as HTMLElement;
  
  function displayQuestions() {
    testContainer.innerHTML = ""; // Clear previous content
  
    questions.forEach((question, index) => {
      const div = document.createElement("div");
      div.className = "question";
      div.innerHTML = `
        <p><strong>${question.question}</strong></p>
        <ul>
          ${question.options.map((option, i) => 
            `<li><input type="radio" name="q${index}" value="${i}"> ${option}</li>`
          ).join('')}
        </ul>
      `;
      testContainer.appendChild(div);
    });
  }
  
  function evaluateTest() {
    score = 0;
  
    questions.forEach((question, index) => {
      const selectedOption = (document.querySelector(`input[name="q${index}"]:checked`) as HTMLInputElement)?.value;
      if (selectedOption && parseInt(selectedOption) === question.correctAnswer) {
        score++;
      }
    });
  
    resultContainer.innerHTML = `Your score is: ${score}/${questions.length}`;
  }
  
  submitButton.addEventListener("click", evaluateTest);
  
  displayQuestions();
  