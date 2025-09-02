import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div className="relative">
      <Hero />
      <Features />
      <Showcase />
      <About />
      <Pricing />
      <Testimonials />
    </div>
  );
};

export default HomePage;