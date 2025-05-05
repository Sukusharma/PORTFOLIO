import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ExternalLink, Briefcase, GraduationCap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Resume: React.FC = () => {
  const experiences = [
    {
      role: 'Software Development Intern',
      company: 'AICTE Internship - Techsaksham by Microsoft and SAP',
      period: 'Nov 2024 - Dec 2024',
      description: 'Developed a chatbot using Natural Language Processing (NLP). Developed an NLP-based chatbot to enhance automated reporting and data retrieval.',
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Electronics and Communication',
      institution: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
      period: '2022 - 2026',
      description: 'Currently pursuing B.Tech in Electronics and Communication Engineering.',
    },
    {
      degree: 'CBSE Class XII',
      institution: 'Butler Memorial Girls Sr. Sec. School',
      period: '2021',
      description: 'Completed senior secondary education with focus on science and mathematics.',
    },
    {
      degree: 'CBSE Class X',
      institution: 'Butler Memorial Girls Sr. Sec. School',
      period: '2019',
      description: 'Completed secondary education with excellent academic performance.',
    }
  ];

  const socialLinks = {
    github: 'https://github.com/Sukusharma',
    linkedin: 'https://www.linkedin.com/in/sukanya-sharma-5ab589332',
    email: 'sukanyash1102@gmail.com'
  };

  return (
    <section id="resume" className="py-20 bg-surface">
      <div className="container-custom">
        <SectionTitle 
          title="My Resume" 
          subtitle="An overview of my education and professional experience in software development and cybersecurity."
        />
        
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-8">
              <Briefcase size={24} className="text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1">
                    <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-text-secondary">
                      <span className="font-medium text-primary">{exp.company}</span>
                      <span className="hidden sm:block mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-text-secondary">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap size={24} className="text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-10">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1">
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-text-secondary">
                      <span className="font-medium text-primary">{edu.institution}</span>
                      <span className="hidden sm:block mx-2">•</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-text-secondary">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-text-secondary mb-6">
            For a more detailed view of my experience and qualifications, you can download my resume or connect with me on social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                alert('Resume download functionality would be implemented here.');
              }}
            >
              <FileDown className="mr-2" size={18} />
              Download Resume
            </a>
            <a 
              href={socialLinks.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <ExternalLink className="mr-2" size={18} />
              View LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;