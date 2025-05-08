import React from 'react';

export const Test: React.FC = () => (
  <div>
    <p><strong>Question 1:</strong> What is TypeScript?</p>
    <ul className="list-disc ml-5">
      <li><input type="radio" name="q1" /> A superset of JavaScript</li>
      <li><input type="radio" name="q1" /> A new programming language</li>
      <li><input type="radio" name="q1" /> A database system</li>
    </ul>
  </div>
);
