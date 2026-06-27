import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { WebinarsSection } from './components/WebinarsSection';
import { MethodologySection } from './components/MethodologySection';
import { AchievementsSection } from './components/AchievementsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfaf6] flex flex-col selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <WhyChooseUsSection />
        <WebinarsSection />
        <MethodologySection />
        <AchievementsSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
