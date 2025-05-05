import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
  index,
}) => {
  return (
    <motion.div 
      className="card group h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary bg-background/50 p-2 rounded-full backdrop-blur-sm transition-colors"
                aria-label={`GitHub repository for ${title}`}
              >
                <Github size={18} />
              </a>
            )}
            
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary bg-background/50 p-2 rounded-full backdrop-blur-sm transition-colors"
                aria-label={`Live demo for ${title}`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-text-secondary mb-6 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;