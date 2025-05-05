import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Terminal, Video } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  const skillGroups = [
    {
      title: 'Web Development',
      icon: <Code2 className="text-primary" size={24} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'],
    },
    {
      title: 'Cybersecurity',
      icon: <ShieldCheck className="text-primary" size={24} />,
      skills: ['Linux OS', 'TryHackMe CTF', 'Network Security', 'Ethical Hacking'],
    },
    {
      title: 'Programming',
      icon: <Terminal className="text-primary" size={24} />,
      skills: ['Python', 'Java', 'SQL', 'Bash Scripting'],
    },
    {
      title: 'Content Creation',
      icon: <Video className="text-primary" size={24} />,
      skills: ['Video Editing', 'Content Design', 'Creative Direction'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container-custom">
        <SectionTitle 
          title="About Me" 
        />
        
        <div className="text-2xl font-semibold mb-4 text-[#39ff14] neon-flicker font-[Orbitron]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
          
            <div className="space-y-4 text-white

">
              <p>
                Hi, I'm Sukanya Sharma — a software developer and cybersecurity enthusiast, 
                passionate about building sleek, functional, and secure digital experiences. 
                I love crafting responsive websites using HTML, CSS, JavaScript, and React, 
                while also exploring the world of ethical hacking, scripting, and Linux systems.
              </p>
              <p>
                I bring both creative design and security-focused thinking into my work. 
                Whether it's a website or a custom tool, I aim to create solutions that 
                are both beautiful and robust.
              </p>
            </div>
          </motion.div>
          
          <div className="lg:pl-8">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-3xl font-bold text-white mb-6 glow-effect">My Skills</h3>
              <div className="grid grid-cols-1 gap-6">
                {skillGroups.map((group, groupIndex) => (
                  <motion.div
                    key={groupIndex}
                    className="bg-primary/10 text-white backdrop-blur-sm rounded-lg p-6 border border-primary/30 transition-all duration-300 hover:border-[#ff69b4]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{scale: 1.05, // SLIGHTLY INCREASE THE SCALE FOR EFFECT
                      boxShadow: '0 0 20px rgba(255, 105, 180, 0.9)', // PINK GLOW ON HOVER
                      borderColor: '#ff69b4' }}
                  >
                    <div className="flex items-center mb-4">
                      {group.icon}
                      <h4 className="text-xl font-semibold ml-3">{group.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/30 text-white rounded-full text-sm font-medium hover:bg-primary/40"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: 'rgba(109, 40, 217, 0.3)',
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: (groupIndex * group.skills.length + skillIndex) * 0.05,
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;