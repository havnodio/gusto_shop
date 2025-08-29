import React from 'react';
import HomeNavbar from '@/components/home/HomeNavbar';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import ContactSection from '@/components/home/ContactSection';
import HomeFooter from '@/components/home/HomeFooter';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeNavbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>
      <HomeFooter />
    </div>
  );
};

export default HomePage;