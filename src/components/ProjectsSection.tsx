import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  link: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "NavGoX",
    description: "Save $1,200/Year with AI-Optimized Multi-Stop Routes",
    longDescription:
      "Delivery drivers earn 25% more with routes that adapt to traffic, weather, and your delivery patterns in real-time. Join 560+ drivers saving time and fuel every day",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Resend",
      "Vercel",
    ],
    image: "/navgox.png",
    link: "https://navgox.com",
    github: "https://github.com/thamanchand/godel",
  },
  {
    id: 2,
    title: "Jaal.ai",
    description: "The AI Automation Marketplace — Buy & Sell Workflows",
    longDescription:
      "ChainAI is where builders, marketers, and founders trade time-saving automations for Make, Zapier, n8n and etc.",
    technologies: ["React.js", "TypeScript", "Tailwind", "Supabase", "Vercel"],
    image: "/jaal-ai.png",
    link: "https://www.jaalai.com/",
    github: "https://github.com/thamanchand/JaalAI",
  },
  {
    id: 3,
    title: "ParkScan",
    description: "Snap the Sign. Skip the Ticket.",
    longDescription:
      "ParkScan helps you understand confusing street signs in seconds — just take a photo.",
    technologies: ["React.js", "TypeScript", "Tailwind", "Supabase", "Vercel"],
    image: "/parkscan.png",
    link: "https://parksnapai.vercel.app/",
    github: "https://github.com/thamanchand/parksnap-landing-page",
  },
  {
    id: 4,
    title: "StopSpotter",
    description: "Find bus stops nearby in Helsinki, Vantaa, Espoo",
    longDescription:
      "Provides real-time bus stop information and locations within the Helsinki metropolitan area.",
    technologies: ["React.js", "TypeScript", "SCSS", "GraphQL", "Vercel"],
    image: "/hsl-api.png",
    link: "https://hsl-api-test.vercel.app/",
    github: "https://github.com/thamanchand/hsl-api-test",
  },
  {
    id: 5,
    title: "Muuvz.in",
    description: "Search, Book van instantly without hassle.",
    longDescription:
      "Get quotations from different van providers and accept what fits your budget. Simplify your van booking experience.",
    technologies: ["React.js", "Redux", "Strapi"],
    image: "muuvz.png",
    link: "https://muuvz.in",
  },
  {
    id: 6,
    title: "Perukirjakone",
    description: "Last will generator in a min not a week.",
    longDescription:
      "Streamline the process of creating a legally valid last will quickly and efficiently.",
    technologies: ["React.js", "Redux", "Strapi"],
    image: "perukirjakone.png",
    link: "https://perukirjakone.fi",
    github: "https://github.com/thamanchand/perukirjakone",
  },
];

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative bg-background py-24"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#22d3ee]/10 text-[#22d3ee] text-sm font-medium mb-4">
            Side Hustles
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Some of my <span className="text-[#22d3ee]">side hustle</span>{" "}
            projects
          </h2>
        </motion.div>

        {/* Projects */}
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-32 last:mb-0"
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-0.5 w-12 bg-primary"></div>
                    <span className="text-primary font-medium">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-2xl text-muted-foreground">
                    {project.description}
                  </p>

                  <p className="text-muted-foreground text-lg">
                    {project.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-hover="true"
                  >
                    <span>View project</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.a>

                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground text-lg font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-hover="true"
                    >
                      <Github className="mr-2 w-5 h-5" />
                      <span>Code</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Image */}
              <div className="relative">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
