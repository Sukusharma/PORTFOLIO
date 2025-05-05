import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        className="section-title inline-block mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {title}
        <motion.span 
          className={`absolute -bottom-2 left-0 h-1 bg-primary rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        />
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-text-secondary text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;