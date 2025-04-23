import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Zap,
  LightbulbIcon,
  GitBranch,
} from "lucide-react";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

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

  const highlights = [
    {
      icon: <Users size={24} />,
      title: "Team Player",
      description:
        "Collaborating effectively with cross-functional teams, sharing knowledge, and contributing to a positive work environment.",
    },
    {
      icon: <Zap size={24} />,
      title: "Fast Learner",
      description:
        "Quickly adapting to new technologies and methodologies, staying current with industry trends and best practices.",
    },
    {
      icon: <LightbulbIcon size={24} />,
      title: "Problem Solving",
      description:
        "Breaking down complex challenges into manageable solutions, with a focus on efficiency and scalability.",
    },
    {
      icon: <GitBranch size={24} />,
      title: "Agile",
      description:
        "Embracing iterative development, adaptability, and continuous improvement in project delivery.",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      url: "https://github.com/thamanchand",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/thamanchand",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      url: "mailto:thaman.me@gmail.com",
    },
  ];

  return (
    <section
      id="about"
      className="section bg-background relative"
      ref={sectionRef}
    >
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-secondary text-md font-medium"
            variants={itemVariants}
          >
            About Me
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            variants={itemVariants}
          >
            Crafting digital experiences with{" "}
            <span className="gradient-text">precision</span> and{" "}
            <span className="gradient-text">purpose</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg"
            variants={itemVariants}
          >
            I build exceptional digital experiences with modern technologies,
            focusing on product engineering and user-centric design. As a
            Hands-on Product Engineer with over 12 years of experience, I
            specialize in building web applications that solve complex problems.
            My expertise spans product development, user experience, and
            technical architecture, with a focus on creating scalable,
            user-centric solutions.
          </motion.p>

          <motion.p
            className="text-muted-foreground text-lg"
            variants={itemVariants}
          >
            I'm passionate about continuous learning, implementing cutting-edge
            solutions, and sharing knowledge through practical applications.
            When I'm not coding, you might find me exploring emerging
            technologies or building innovative solutions to real-world
            problems.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 pt-2"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm hover:bg-secondary/80 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-hover="true"
              >
                {link.icon}
                <span>{link.label}</span>
                <ChevronRight size={16} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-6 rounded-xl"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
