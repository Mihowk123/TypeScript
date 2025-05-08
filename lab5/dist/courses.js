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
const courseList = document.getElementById("course-list");
function fetchCourses() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("http://localhost:5000/courses");
            const courses = yield response.json();
            displayCourses(courses);
        }
        catch (error) {
            courseList.innerHTML = "<p>Error loading courses.</p>";
            console.error("Failed to fetch courses:", error);
        }
    });
}
function displayCourses(courses) {
    courseList.innerHTML = ""; // очищення
    courses.forEach((course) => {
        const courseDiv = document.createElement("div");
        courseDiv.className = "course";
        courseDiv.innerHTML = `
      <h2>${course.name}</h2>
      <p>${course.description}</p>
      <button onclick="viewCourse(${course.id})">View Details</button>
    `;
        courseList.appendChild(courseDiv);
    });
}
// Обробник "деталі курсу"
window.viewCourse = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const res = yield fetch(`http://localhost:5000/courses/${courseId}`);
    const course = yield res.json();
    alert(`You selected: ${course.name}\nLessons: ${(_b = (_a = course.lessons) === null || _a === void 0 ? void 0 : _a.join(", ")) !== null && _b !== void 0 ? _b : "No lessons listed."}`);
});
document.addEventListener("DOMContentLoaded", fetchCourses);
