import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Code } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', to: 'home', offset: -100 },
    { name: 'About', to: 'about', offset: -80 },
    { name: 'Projects', to: 'projects', offset: -80 },
    { name: 'Resume', to: 'resume', offset: -80 },
    { name: 'Contact', to: 'contact', offset: -80 },
  ];

  const navbarVariants = {
    visible: { 
      backgroundColor: isScrolled ? 'rgba(30, 30, 30, 0.95)' : 'rgba(18, 18, 18, 0)',
      boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
    },
    hidden: { 
      backgroundColor: 'rgba(18, 18, 18, 0)' 
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      variants={navbarVariants}
      animate="visible"
      initial="hidden"
      transition={{ duration: 0.3 }}
    >
      <div className="container-custom mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Code size={28} className="text-primary" />
            <span className="text-xl font-bold">Sukanya Sharma</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                activeClass="active"
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center ml-4 space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-surface py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom mx-auto px-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                  activeClass="active"
                  className="nav-link py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center pt-4 space-x-5">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;