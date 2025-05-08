interface Course {
  id: number;
  name: string; // замість title
  description: string;
  lessons?: string[]; // необов’язкове поле
}

const courseList = document.getElementById("course-list") as HTMLElement;

async function fetchCourses() {
  try {
    const response = await fetch("http://localhost:5000/courses");
    const courses: Course[] = await response.json();
    displayCourses(courses);
  } catch (error) {
    courseList.innerHTML = "<p>Error loading courses.</p>";
    console.error("Failed to fetch courses:", error);
  }
}

function displayCourses(courses: Course[]) {
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
(window as any).viewCourse = async (courseId: number) => {
  const res = await fetch(`http://localhost:5000/courses/${courseId}`);
  const course: Course = await res.json();
  alert(`You selected: ${course.name}\nLessons: ${course.lessons?.join(", ") ?? "No lessons listed."}`);
};

document.addEventListener("DOMContentLoaded", fetchCourses);
