import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { CourseList } from './components/CourseList';
import { ChatBox } from './components/ChatBox';
import { Test } from './components/Test';

const App: React.FC = () => (
  <Router>
    <nav className="p-4 bg-gray-200 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/tests">Tests</Link>
      <Link to="/chat">Chat</Link>
    </nav>
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/tests" element={<Test />} />
        <Route path="/chat" element={<ChatBox />} />
      </Routes>
    </div>
  </Router>
);

export default App;
