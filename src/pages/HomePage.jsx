import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CallToAction from '../components/CallToAction';
import HowItWorks from '../components/HowItWorks';

const HomePage = () => {
  return (
    <div className="font-sans">
      <HeroSection  className="pt-28 md:pt-32"/>
      <ServicesSection />
      <CallToAction />
      <HowItWorks/>
    </div>
  );
};

export default HomePage;