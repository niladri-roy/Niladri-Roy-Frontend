import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import './scrollBar.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import HomePage from './pages/HomePage';
import { ReactLenis } from '@studio-freight/react-lenis';

const App = () => {
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </ReactLenis>
  );
};

export default App;
