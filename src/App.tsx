import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Storytelling } from './pages/Storytelling';
import { Videography } from './pages/Videography';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CaseStudies } from './pages/CaseStudies';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storytelling" element={<Storytelling />} />
        <Route path="/videography" element={<Videography />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
