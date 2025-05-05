import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import Modal from 'react-modal';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

Modal.setAppElement('#root');

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Movie Website',
      description: 'A responsive movie website with search functionality, movie details, and watchlist features. Built with a focus on user experience and performance.',
      fullDescription: `
        A comprehensive movie browsing platform built with HTML, CSS, and JavaScript.
        
        Key Features:
        • Responsive design for all devices
        • Dynamic search functionality
        • Movie details with ratings and reviews
        • Personal watchlist management
        • Clean and intuitive user interface
        
        Technologies:
        • HTML5 for semantic structure
        • CSS3 for modern styling and animations
        • JavaScript for interactive features
        • RESTful API integration
      `,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/Sukusharma/movie-website',
    },
    {
      title: 'Hash Cracker',
      description: 'A Python-based tool for cracking various hash types using advanced algorithms and rainbow tables.',
      fullDescription: `
        A sophisticated hash cracking tool built with Python.
        
        Key Features:
        • Support for multiple hash types (MD5, SHA1, SHA256)
        • Dictionary attack implementation
        • Rainbow table integration
        • Performance optimization
        • Command-line interface
        
        Technologies:
        • Python
        • Cryptography libraries
        • File handling
        • Performance optimization techniques
      `,
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
      technologies: ['Python', 'Cryptography', 'Security'],
      githubLink: 'https://github.com/Sukusharma/hash-cracker',
    },
    {
      title: 'YouTube Video/Audio Downloader',
      description: 'A Python application for downloading YouTube videos and extracting audio in various formats.',
      fullDescription: `
        A versatile YouTube content downloader with multiple format support.
        
        Key Features:
        • Video download in multiple qualities
        • Audio extraction
        • Format conversion
        • Batch processing
        • Progress tracking
        
        Technologies:
        • Python
        • pytube library
        • FFmpeg integration
        • GUI implementation
      `,
      image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg',
      technologies: ['Python', 'pytube', 'FFmpeg'],
      githubLink: 'https://github.com/Sukusharma/youtube-audio-video-downloader',
    },
    {
      title: 'Chatbot using NLP',
      description: 'An intelligent chatbot developed during AICTE Internship using Natural Language Processing for automated reporting and data retrieval.',
      fullDescription: `
        A sophisticated chatbot developed during AICTE Internship - Techsaksham by Microsoft and SAP.
        
        Key Features:
        • Natural Language Processing integration
        • Automated reporting system
        • Data retrieval capabilities
        • Context-aware responses
        • Multi-platform support
        
        Technologies:
        • Botpress
        • NLP APIs
        • Node.js
        • Machine Learning
      `,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      technologies: ['NLP', 'Botpress', 'API Integration'],
      githubLink: 'https://github.com/Sukusharma/chatbot_usingNLP',
    },
    {
      title: 'CTF Writeups',
      description: 'Detailed documentation and solutions for various Capture The Flag challenges completed on TryHackMe platform.',
      fullDescription: `
        Comprehensive writeups for TryHackMe CTF challenges.
        
        Areas Covered:
        • Web Application Security
        • Network Security
        • Cryptography
        • Reverse Engineering
        • Binary Exploitation
        
        Skills Demonstrated:
        • Problem-solving
        • Security tool usage
        • Documentation
        • Ethical hacking
      `,
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
      technologies: ['CTF', 'Security', 'Documentation'],
      githubLink: 'https://github.com/Sukusharma',
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <SectionTitle 
          title="My Projects" 
          subtitle="Here are some of the projects I've worked on. Each project represents a unique challenge and solution."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card cursor-pointer"
              onClick={() => setSelectedProject(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubLink={project.githubLink}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject !== null && (
            <Modal
              isOpen={true}
              onRequestClose={() => setSelectedProject(null)}
              className="modal"
              overlayClassName="modal-overlay"
              style={{
                content: {
                  background: '#1E1E1E',
                  border: '1px solid rgba(109, 40, 217, 0.2)',
                  borderRadius: '12px',
                  padding: '2rem',
                  maxWidth: '800px',
                  width: '90%',
                  margin: '2rem auto',
                  position: 'relative',
                  maxHeight: '85vh',
                  overflow: 'auto',
                },
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1000,
                }
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-text-secondary hover:text-primary transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{projects[selectedProject].title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[selectedProject].technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <div className="text-text-secondary whitespace-pre-line">
                    {projects[selectedProject].fullDescription}
                  </div>
                </div>

                <div className="flex gap-4">
                  {projects[selectedProject].githubLink && (
                    <a
                      href={projects[selectedProject].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;