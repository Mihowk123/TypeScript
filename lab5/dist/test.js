"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let questions = [];
let score = 0;
const testContainer = document.getElementById("test-container");
const submitButton = document.getElementById("submit-test");
const resultContainer = document.getElementById("result");
// Завантаження тестів з json-server (db.json)
function loadQuestions() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("http://localhost:5000/tests/1"); // Отримуємо конкретний тест
            const data = yield response.json();
            questions = data.questions.map((q) => {
                const correctIndex = q.options.indexOf(q.correct);
                return {
                    question: q.question,
                    options: q.options,
                    correctAnswer: correctIndex
                };
            });
            displayQuestions();
        }
        catch (error) {
            console.error("Error loading questions:", error);
        }
    });
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
            .map((option, i) => `<li><input type="radio" name="q${index}" value="${i}"> ${option}</li>`)
            .join("")}
      </ul>
    `;
        testContainer.appendChild(div);
    });
}
function evaluateTest() {
    score = 0;
    questions.forEach((question, index) => {
        var _a;
        const selectedOption = (_a = document.querySelector(`input[name="q${index}"]:checked`)) === null || _a === void 0 ? void 0 : _a.value;
        if (selectedOption && parseInt(selectedOption) === question.correctAnswer) {
            score++;
        }
    });
    resultContainer.innerHTML = `Your score is: ${score}/${questions.length}`;
}
submitButton.addEventListener("click", evaluateTest);
// Завантаження тесту при старті
document.addEventListener("DOMContentLoaded", loadQuestions);
