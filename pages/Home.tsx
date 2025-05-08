import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => (
  <div className="text-center mt-10">
    <h1 className="text-3xl font-bold">Welcome to StudySync</h1>
    <p className="my-4">Enhance your learning experience with interactive courses, tests, and discussions.</p>
    <Link to="/courses" className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</Link>
  </div>
);
