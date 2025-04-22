import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Updated interface for skill categories
interface SkillCategory {
  name: string;
  skillsList: string; // Changed from array of objects to a single string
}

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 }); // Adjusted amount for better trigger

  // Updated skill categories based on the provided image
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend Development",
      skillsList:
        "JavaScript (ES6+), TypeScript, React.js, Next.js, Redux.js, React Native, CSS, Sass, Styled Components, Three.js, Mapbox, Performance Optimization (Lazy Loading, Code Splitting, Virtualization)",
    },
    {
      name: "UI/UX & Design Systems",
      skillsList:
        "Figma, Sketch, Storybook, Wireframing, Material UI, Bootstrap, Tailwind CSS, Grommet, Web Accessibility",
    },
    {
      name: "Backend & DevOps",
      skillsList:
        "Node.js, Python, Django, REST & GraphQL APIs, PostgreSQL, Strapi, AWS S3, CI/CD, WebSockets",
    },
    {
      name: "Tools & Collaboration",
      skillsList:
        "Gulp, Webpack, Vite, Git, GitHub, Agile, Scrum, Jira, TDD (Test-Driven Development), Unit & E2E Testing (Jest, Cypress, React Testing Library)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2, // Adjusted delay
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="skills"
      className="section bg-background relative py-24"
      ref={sectionRef}
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium mb-4">
            My Toolbox
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Professional <span className="gradient-text">Skills</span> &
            Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            I've developed a diverse set of skills throughout my career,
            allowing me to build complete digital solutions from concept to
            deployment.
          </p>
        </motion.div>

        {/* Skills List */}
        <motion.div
          className="max-w-4xl mx-auto space-y-10" // Centered container for skills
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                {category.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {category.skillsList}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
