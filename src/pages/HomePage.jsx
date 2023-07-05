// OtherComponent.js
import React from 'react';
import useIntersectionObserver from '../utils/IntersectionObserver/useIntersectionObserver';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Blogs from '../components/Blogs/Blogs';
import Contact from '../components/Contact/Contact';
import './HomePage.css';

const OtherComponent = () => {
  useIntersectionObserver()

  return (
    <div>
      <section className="hidden"><Home /></section>
      <section><About /></section>
      <section className="hidden"><Projects /></section>
      <section className="hidden"><Blogs /></section>
      <section className="hidden"><Contact /></section>
    </div>
  );
};

export default OtherComponent;
