import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Resume from './sections/Resume';
import Footer from './components/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          Initializing system...
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="flex flex-col min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated cybersecurity background */}
        <div className="fixed inset-0 z-[-1] opacity-20">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background"
            style={{
              backgroundImage: `url(https://i.ibb.co/m5L2FzSq/20563839.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'hue-rotate(30deg) saturate(1.5)'
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.1)_0%,transparent_100%)] animate-pulse" />
        </div>
        
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <Resume />
          <Contact />
        </main>
        
        <Footer />
        
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-50 hover:bg-primary-700 transition-colors"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default App;