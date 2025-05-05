import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center">
      {/* Cyberpunk Background with Matrix effect */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/m5L2FzSq/20563839.jpg"
          alt="Cybersecurity Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-3/5 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block text-white font-mono mb-6 p-4 border-2 border-white bg-white/5 rounded-md shadow-[0_0_30px_10px_rgba(255,255,255,0.5)] text-xl sm:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  'whoami',
                  1000,
                  '> Sukanya Sharma',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight glitch-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <span className="text-primary">Software Developer</span> & {" "}
              <span className="text-secondary">Cybersecurity Enthusiast</span>
            </motion.h1>
            
            <motion.p 
              className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto lg:mx-0 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <TypeAnimation
                sequence={[
                  '> Building secure & elegant web solutions\n> Exploring the digital frontier\n> Ready to collaborate?_',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="whitespace-pre-line"
              />
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn btn-primary w-full sm:w-auto group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Sukusharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline p-3"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sukanya-sharma-5ab589332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline p-3"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:sukanyash1102@gmail.com"
                  className="btn btn-outline p-3"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        
          <motion.div 
            className="lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-96 h-96 sm:w-[450px] sm:h-[450px] rounded-full overflow-hidden border-4 border-primary/30 relative group 
  ring-8 ring-pink-500 shadow-[0_0_60px_20px_rgba(255,105,180,0.8)] transition-all duration-500">
                <img 
                  src="public/suku.png"
                  alt="Sukanya Sharma" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
              
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-card px-4 py-2 rounded-lg shadow-lg border border-primary/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <p className="text-primary font-mono">./connect.sh</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;