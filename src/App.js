import React from 'react';
import './App.css'; // Import CSS utama
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import Header from './components/Header'; // Header Component
import HeroSection from './components/HeroSection'; // Hero Section
import AboutSection from './components/AboutSection'; // About Section
import GamesSection from './components/GamesSection'; // Games Section
import ContactSection from './components/ContactSection'; // Contact Section
import Footer from './components/Footer'; // Footer

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <GamesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
