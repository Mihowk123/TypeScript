interface Course {
    id: number;
    title: string;
    description: string;
    lessons: string[];
  }
  
  const courses: Course[] = [
    {
      id: 1,
      title: "JavaScript Basics",
      description: "Learn the basics of JavaScript, including variables, functions, and loops.",
      lessons: [
        "Lesson 1: Introduction to JavaScript",
        "Lesson 2: Variables and Data Types",
        "Lesson 3: Functions and Loops"
      ]
    },
    {
      id: 2,
      title: "TypeScript Advanced",
      description: "Dive deep into TypeScript features like interfaces, generics, and type annotations.",
      lessons: [
        "Lesson 1: Introduction to TypeScript",
        "Lesson 2: Interfaces and Types",
        "Lesson 3: Generics in TypeScript"
      ]
    },
    {
      id: 3,
      title: "React Fundamentals",
      description: "Understand React basics, including components, state, and props.",
      lessons: [
        "Lesson 1: Introduction to React",
        "Lesson 2: Components and JSX",
        "Lesson 3: State and Props"
      ]
    }
  ];
  
  const courseList = document.getElementById("course-list") as HTMLElement;
  
  function displayCourses() {
    courses.forEach(course => {
      const courseDiv = document.createElement("div");
      courseDiv.className = "course";
      courseDiv.innerHTML = `
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <button onclick="viewCourse(${course.id})">View Details</button>
      `;
      courseList.appendChild(courseDiv);
    });
  }
  
  function viewCourse(courseId: number) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
  
    // Redirect to a new page or open a modal for course details
    alert(`You selected the course: ${course.title}\nLessons: ${course.lessons.join(", ")}`);
  }
  
  // Initialize the courses list when the page is loaded
  document.addEventListener("DOMContentLoaded", displayCourses);
  