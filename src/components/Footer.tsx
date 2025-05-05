import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', to: 'home', offset: -100 },
    { name: 'About', to: 'about', offset: -80 },
    { name: 'Projects', to: 'projects', offset: -80 },
    { name: 'Resume', to: 'resume', offset: -80 },
    { name: 'Contact', to: 'contact', offset: -80 },
  ];

  const socialLinks = {
    github: 'https://github.com/Sukusharma',
    linkedin: 'https://www.linkedin.com/in/sukanya-sharma-5ab589332',
    email: 'sukanyash1102@gmail.com'
  };

  return (
    <footer className="bg-surface pt-16 pb-8">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <Code size={24} className="text-primary mr-2" />
              <span className="text-xl font-bold">Sukanya Sharma</span>
            </div>
            <p className="text-text-secondary mb-6 max-w-md">
              Software developer and cybersecurity enthusiast focused on creating 
              elegant solutions and secure applications.
            </p>
            <div className="flex space-x-4">
              <a 
                href={socialLinks.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon bg-card p-2 rounded-md hover:bg-card/80"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon bg-card p-2 rounded-md hover:bg-card/80"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${socialLinks.email}`}
                className="social-icon bg-card p-2 rounded-md hover:bg-card/80"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={500}
                    className="text-text-secondary hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-text-secondary mb-2">Feel free to reach out!</p>
            <p className="text-text-secondary">
              <a 
                href={`mailto:${socialLinks.email}`}
                className="hover:text-primary transition-colors"
              >
                {socialLinks.email}
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-text-secondary">
          <p>© {currentYear} Sukanya Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;