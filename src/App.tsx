import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookInterface, useBookNavigation } from './components/BookInterface';
import { Home } from './pages/Home';
import { Storytelling } from './pages/Storytelling';
import { Videography } from './pages/Videography';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CaseStudies } from './pages/CaseStudies';

const AppContent: React.FC = () => {
  useBookNavigation();
  
  return (
    <BookInterface>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/storytelling" element={<Storytelling />} />
        <Route path="/videography" element={<Videography />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BookInterface>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="no-scroll">
        <AppContent />
      </div>
    </Router>
  );
};

export default App;
