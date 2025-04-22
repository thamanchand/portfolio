import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="group relative overflow-hidden rounded-xl aspect-video">
        <motion.div 
          className="w-full h-full bg-background/40 backdrop-blur-sm absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
          whileHover={{ opacity: 1 }}
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-hover="true"
            >
              <Github size={24} />
            </motion.a>
          )}
          
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-hover="true"
            >
              <ExternalLink size={24} />
            </motion.a>
          )}
        </motion.div>
        
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="flex flex-col">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-muted-foreground mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-hover="true"
            >
              <Github size={16} />
              Source Code
            </motion.a>
          )}
          
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-hover="true"
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;