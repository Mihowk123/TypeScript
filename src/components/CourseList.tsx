import React from 'react';

const courses: string[] = [
  "Course 1 - JavaScript Basics",
  "Course 2 - TypeScript Advanced",
  "Course 3 - React Fundamentals"
];

export const CourseList: React.FC = () => (
  <div className="space-y-2">
    {courses.map((course, index) => (
      <div key={index} className="p-2 bg-blue-100 rounded">{course}</div>
    ))}
  </div>
);
