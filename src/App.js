import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BMICalculator from './components/BMICalculator';
import Testimonials from './components/Testimonials';
import About from './components/About';
import BeforeAfter from './components/BeforeAfter';
import Contact from './components/Contact';
import Footer from './components/Footer';

const WHATSAPP_URL =
  'https://wa.me/201100690997?text=' +
  encodeURIComponent('السلام عليكم دكتور 🌿 أرغب في الاستفسار وحجز موعد.');

// ===== Pages =====

function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Services />
      <BMICalculator />
      <Testimonials />
    </>
  );
}

function AboutPage() {
  return <About />;
}

function ResultsPage() {
  return <BeforeAfter />;
}

function ContactPage() {
  return <Contact />;
}

// ===== App =====

export default function App() {
  const [page, setPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home':    return <HomePage onNavigate={setPage} />;
      case 'about':   return <AboutPage />;
      case 'results': return <ResultsPage />;
      case 'contact': return <ContactPage />;
      default:        return <HomePage onNavigate={setPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={page} onNavigate={setPage} />
      <main className="page">
        {renderPage()}
      </main>
      <Footer onNavigate={setPage} />

      {/* ===== زرار واتساب متثبت ===== */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="تواصل عبر واتساب"
      >
        <FaWhatsapp size={20} />
        <span className="whatsapp-float__label">احجز موعد</span>
      </a>
    </div>
  );
}
