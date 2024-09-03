import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Introduction from './Introduction';
import './index.css';
import Experience from './Experience';
import Project from './Project';
import AnimatedCursor from './AnimatedCursor';
import Education from './Education'
import Contact from './Contact'
import Skills from './Skills'

ReactDOM.render(
  <Router>
    <AnimatedCursor /> {/* Add the AnimatedCursor to all pages */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/project" element={<Project />} />
      <Route path="/education" element={<Education />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
