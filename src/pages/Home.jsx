import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ContactSection from '../components/home/ContactSection';
import GlobalStyles from '../components/GlobalStyles';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
      <GlobalStyles/>
    </div>
  );
};

export default Home; 