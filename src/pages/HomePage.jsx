import React, { useEffect } from 'react';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Blogs from '../components/Blogs/Blogs';
import Contact from '../components/Contact/Contact';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, []); // Empty dependency array

  return (
    <div>
      <section className="hidden">
        <Home />
      </section>
      <section className="hidden">
        <About />
      </section>
      <section className="hidden">
        <Projects />
      </section>
      <section className="hidden">
        <Blogs />
      </section>
      <section className="hidden">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
