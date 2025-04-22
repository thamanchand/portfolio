import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const experiences: Experience[] = [
    {
      id: 1,
      role: 'Frontend Team Lead / UI/UX Designer',
      company: 'Aiforsite Oy',
      location: 'Espoo, Finland',
      period: 'Nov 2021 - Present',
      description: [
        'Led a team of 4 developers to build and optimize a SaaS platform, reducing page load time by 30% through performance optimization techniques.',
        'Designed reusable components and design systems, improving development efficiency by 20% and ensuring UI consistency.',
        'Managed the 360Reality Capture app lifecycle, from ideation to launch, delivering a user-centric product aligned with business goals.',
        'Created intuitive UI/UX designs for web and mobile apps, validated through user research and usability testing.',
        'Collaborated with cross-functional teams to deliver features on time, using agile methodologies to streamline workflows.',
      ],
    },
    {
      id: 2,
      role: 'Frontend Engineer',
      company: 'Invian Oy',
      location: 'Espoo, Finland',
      period: 'May 2017 - Nov 2021',
      description: [
        'Architected an ERP design system using Storybook, standardizing reusable React components and improving development efficiency.',
        'Developed key features like booking, map, and document functionalities, enhancing user navigation and system usability.',
        'Led a diverse team of freelancers, managing tasks and workflows to accelerate project delivery and improve team collaboration.',
      ],
    },
    {
      id: 3,
      role: 'Software Engineer',
      company: 'Turun yliopisto',
      location: 'Turku, Finland',
      period: 'Jan 2016 - May 2017',
      description: [
        'Engineered a Personnel Management System for the Turku Centre for Biotechnology, streamlining employee data management.',
        'Integrated with the University of Turku API, enabling seamless data synchronization and advanced search capabilities.',
        'Developed analytics and reporting tools, improving operational efficiency and decision-making for HR and management.',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience" className="section bg-background relative" ref={sectionRef}>
      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium mb-4"
            variants={itemVariants}
          >
            My Journey
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
            variants={itemVariants}
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg"
            variants={itemVariants}
          >
            Over 12 years of experience working with cutting-edge technologies and delivering impactful solutions.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="relative pl-8 border-l-2 border-muted max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="mb-12 relative"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[1.45rem] top-1.5" />
              
              <div className="bg-secondary p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-primary font-medium inline-flex items-center gap-1 text-sm">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
                
                <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                  <span className="font-medium">{exp.company}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground relative pl-6 before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary before:left-0 before:top-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;