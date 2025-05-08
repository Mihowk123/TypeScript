"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        "Course 1 - JavaScript Basics",
        "Course 2 - TypeScript Advanced",
        "Course 3 - React Fundamentals"
    ];
    const courseList = document.getElementById("course-list");
    if (courseList) {
        courses.forEach((course) => {
            const div = document.createElement("div");
            div.className = "course";
            div.textContent = course;
            courseList.appendChild(div);
        });
    }
    const chatMessages = [
        { user: "User1", message: "Hello, how do I complete the task?" },
        { user: "User2", message: "You need to follow the instructions in Lesson 2." }
    ];
    const chatBox = document.getElementById("chat-box");
    if (chatBox) {
        chatMessages.forEach((chat) => {
            const p = document.createElement("p");
            p.innerHTML = `<strong>${chat.user}:</strong> ${chat.message}`;
            chatBox.appendChild(p);
        });
    }
    const testContainer = document.getElementById("test-container");
    if (testContainer) {
        testContainer.innerHTML = `
            <p><strong>Question 1:</strong> What is TypeScript?</p>
            <ul>
                <li><input type="radio" name="q1"> A superset of JavaScript</li>
                <li><input type="radio" name="q1"> A new programming language</li>
                <li><input type="radio" name="q1"> A database system</li>
            </ul>
        `;
    }
});
