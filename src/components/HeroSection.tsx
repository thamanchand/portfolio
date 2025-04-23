import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroCanvas from "./three/HeroCanvas";

const skills = {
  design: ["UI/UX Design", "Design System", "Figma", "Prototyping", "Sketch"],
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Three.js",
    "Framer Motion",
    "Tailwind CSS",
    "Cypress",
    "Storybook",
  ],
  backend: [
    "Node.js",
    "Python",
    "GraphQL",
    "REST APIs",
    "WebSockets",
    "Webhooks",
    "MongoDB",
    "PostgreSQL",
  ],
  cicd: [
    "Docker",
    "AWS",
    "Git",
    "CI/CD",
    "Agile",
    "Scrum",
    "Product Management",
    "Cursor IDE",
    "AI",
    "LLMs",
  ],
};

const FloatingSkills: React.FC = () => {
  const getRandomPosition = () => {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 300 + 200;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const allSkills = [
    ...skills.design,
    ...skills.frontend,
    ...skills.backend,
    ...skills.cicd,
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative w-full h-full">
        {allSkills.map((skill, index) => {
          const { x, y } = getRandomPosition();
          return (
            <motion.div
              key={index}
              className="absolute text-xl text-white font-bold px-6 py-3 rounded-full bg-background/40 backdrop-blur-sm shadow-lg"
              initial={{
                opacity: 0,
                x: x,
                y: y,
                scale: 2,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                x: [x, 0, 0, 0],
                y: [y, 0, 0, 0],
                scale: [2, 1, 1, 0.5],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: index * 0.5,
                ease: [0.2, 0, 0.1, 1],
                times: [0, 0.4, 0.8, 1],
              }}
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {skill}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden flex items-center"
      ref={sectionRef}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Content - Updated to 2-column layout */}
      <div className="relative z-10 h-full w-full flex items-center section-container">
        {/* Added flex container for columns */}
        <div className="flex flex-col md:flex-row items-center w-full gap-12">
          {/* Left Column (Text Content) */}
          <motion.div
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.span
              className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary text-foreground text-md font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Hands-on Product Engineer
            </motion.span>

            <motion.h1
              className="text-6xl md:text-9xl sm:text-4xl lg:text-9xl font-londrina-outline mb-6 tracking-wider uppercase text-balance leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <span className="text-foreground">Thaman Chand</span>
            </motion.h1>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-hover="true"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column (Skills) */}
          <motion.div
            className="md:w-1/2 h-full flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <FloatingSkills />
          </motion.div>
        </div>

        {/* Scroll Down Button - Remains centered */}
        <motion.button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={scrollToNextSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ y: 5 }}
          data-hover="true"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
