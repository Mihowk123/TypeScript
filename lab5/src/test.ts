interface Question {
  question: string;
  options: string[];
  correct: string; // From JSON
}

interface ConvertedQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // Converted index
}

let questions: ConvertedQuestion[] = [];
let score = 0;

const testContainer = document.getElementById("test-container") as HTMLElement;
const submitButton = document.getElementById("submit-test") as HTMLButtonElement;
const resultContainer = document.getElementById("result") as HTMLElement;

// Завантаження тестів з json-server (db.json)
async function loadQuestions() {
  try {
    const response = await fetch("http://localhost:5000/tests/1"); // Отримуємо конкретний тест
    const data = await response.json();
    questions = data.questions.map((q: Question) => {
      const correctIndex = q.options.indexOf(q.correct);
      return {
        question: q.question,
        options: q.options,
        correctAnswer: correctIndex
      };
    });
    displayQuestions();
  } catch (error) {
    console.error("Error loading questions:", error);
  }
}

function displayQuestions() {
  testContainer.innerHTML = ""; // Clear previous content

  questions.forEach((question, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `
      <p><strong>${question.question}</strong></p>
      <ul>
        ${question.options
          .map(
            (option, i) =>
              `<li><input type="radio" name="q${index}" value="${i}"> ${option}</li>`
          )
          .join("")}
      </ul>
    `;
    testContainer.appendChild(div);
  });
}

function evaluateTest() {
  score = 0;

  questions.forEach((question, index) => {
    const selectedOption = (document.querySelector(
      `input[name="q${index}"]:checked`
    ) as HTMLInputElement)?.value;
    if (selectedOption && parseInt(selectedOption) === question.correctAnswer) {
      score++;
    }
  });

  resultContainer.innerHTML = `Your score is: ${score}/${questions.length}`;
}

submitButton.addEventListener("click", evaluateTest);

// Завантаження тесту при старті
document.addEventListener("DOMContentLoaded", loadQuestions);
