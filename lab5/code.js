// Завантаження курсів з фейкового сервера
function loadCourses() {
    fetch('http://localhost:5000/courses')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('course-container');
            container.innerHTML = ''; // Очищаємо контейнер перед додаванням нових елементів
            data.forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.classList.add('course-card');
                courseCard.innerHTML = `
                    <h3>${course.name}</h3>
                    <p>${course.description}</p>
                    <button onclick="viewCourse(${course.id})">View Course</button>
                `;
                container.appendChild(courseCard);
            });
        })
        .catch(error => console.error('Error loading courses:', error));
}

// Завантаження тестів
let currentQuestion = 0;
function startTest() {
    fetch('http://localhost:5000/tests')
        .then(response => response.json())
        .then(data => {
            const testContainer = document.getElementById('test');
            const test = data[0];  // Для спрощення, ми беремо перший тест
            if (currentQuestion < test.questions.length) {
                const question = test.questions[currentQuestion];
                testContainer.innerHTML = `
                    <h2>${question.question}</h2>
                    ${question.options.map(option => `<button onclick="checkAnswer('${option}')">${option}</button>`).join('')}
                `;
            } else {
                alert('Test finished!');
            }
        })
        .catch(error => console.error('Error loading test:', error));
}

function checkAnswer(answer) {
    fetch('http://localhost:5000/tests')
        .then(response => response.json())
        .then(data => {
            const test = data[0];
            const correctAnswer = test.questions[currentQuestion].correct;
            if (answer === correctAnswer) {
                alert('Correct!');
            } else {
                alert('Incorrect!');
            }
            currentQuestion++;
            startTest(); // Завантаження наступного запитання
        });
}

// Чат
function sendMessage() {
    const message = document.getElementById('user-message').value;
    const messagesContainer = document.getElementById('messages');
    const newMessage = { text: message };

    fetch('http://localhost:5000/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
    })
    .then(response => response.json())
    .then(data => {
        messagesContainer.innerHTML += `<p>User: ${data.text}</p>`;
        document.getElementById('user-message').value = ''; // Очищуємо поле вводу
    })
    .catch(error => console.error('Error sending message:', error));
}

// Завантаження курсів при завантаженні сторінки (наприклад, на сторінці "courses.html")
window.onload = function() {
    loadCourses();
};
