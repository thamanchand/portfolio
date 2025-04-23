import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";

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
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const experiences: Experience[] = [
    {
      id: 0,
      role: "Founder / Product Engineer",
      company: "NavGoX (Side Project)",
      location: "Remote",
      period: "Mar 2024 - Present",
      description: [
        "Developed an AI-powered route optimization micro SaaS for delivery drivers, aiming to save time and fuel.",
        "Built using React.js, TypeScript, Tailwind CSS, Supabase, and Vercel.",
        "Focused on real-time adaptation to traffic, weather, and delivery patterns.",
      ],
    },
    {
      id: 1,
      role: "Founder / Product Engineer",
      company: "ParkScan (Side Project)",
      location: "Remote",
      period: "Mar 2024 - Present",
      description: [
        "Created an application to help users understand confusing street parking signs by taking a photo.",
        "Utilized React.js, TypeScript, Tailwind CSS, Supabase, and Vercel.",
        "Aimed to simplify parking rule interpretation and prevent tickets.",
      ],
    },
    {
      id: 2,
      role: "Frontend Team Lead / UI/UX Designer",
      company: "Aiforsite Oy",
      location: "Espoo, Finland",
      period: "Nov 2021 - Feb 2024",
      description: [
        "Led a team of 4 developers to build and optimize a SaaS platform, reducing page load time by 30% through performance optimization techniques.",
        "Designed reusable components and design systems, improving development efficiency by 20% and ensuring UI consistency.",
        "Managed the 360Reality Capture app lifecycle, from ideation to launch, delivering a user-centric product aligned with business goals.",
        "Created intuitive UI/UX designs for web and mobile apps, validated through user research and usability testing.",
        "Collaborated with cross-functional teams to deliver features on time, using agile methodologies to streamline workflows.",
      ],
    },
    {
      id: 3,
      role: "Frontend Engineer",
      company: "Invian Oy",
      location: "Espoo, Finland",
      period: "May 2017 - Nov 2021",
      description: [
        "Architected an ERP design system using Storybook, standardizing reusable React components and improving development efficiency.",
        "Developed key features like booking, map, and document functionalities, enhancing user navigation and system usability.",
        "Led a diverse team of freelancers, managing tasks and workflows to accelerate project delivery and improve team collaboration.",
      ],
    },
    {
      id: 4,
      role: "Software Engineer",
      company: "Turun yliopisto",
      location: "Turku, Finland",
      period: "Jan 2016 - May 2017",
      description: [
        "Engineered a Personnel Management System for the Turku Centre for Biotechnology, streamlining employee data management.",
        "Integrated with the University of Turku API, enabling seamless data synchronization and advanced search capabilities.",
        "Developed analytics and reporting tools, improving operational efficiency and decision-making for HR and management.",
      ],
    },
    {
      id: 1,
      role: "Chief Technology Officer",
      company: "Northcatalyst",
      location: "Turku Area, Finland",
      period: "Jul 2015 - Aug 2016",
      description: [
        "Developed custom e-learning platforms using open-source solutions.",
        "Spearheaded backend architecture with Python, Django, and PostgreSQL.",
        "Led technical team in implementing scalable and maintainable solutions.",
      ],
    },
    {
      id: 2,
      role: "UI/UX Designer & Marketing Assistant Intern",
      company: "Super Analytics",
      location: "Turku, Finland",
      period: "May 2015 - Jul 2015",
      description: [
        "Designed and developed the landing page for SuperBrain.io using HTML5, CSS, JavaScript, jQuery, and Bootstrap.",
        "Collaborated with marketing team to implement marketing plans, increasing user engagement.",
        "Optimized landing page for SEO, improving search rankings and organic traffic by 20%.",
        "Conducted A/B testing, improving conversion rates by 15%.",
        "Ensured cross-browser compatibility and accessibility for all users.",
      ],
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "Nordic Venture Family",
      location: "Turku, Finland",
      period: "May 2014 - Sep 2014",
      description: [
        "Designed and developed a video content management system (CMS) for client asset management.",
        "Implemented responsive design and cross-browser compatibility.",
        "Enabled clients to upload assets, select templates, and customize video productions.",
      ],
    },
    {
      id: 4,
      role: "Chief Technology Officer",
      company: "crowdTOD",
      location: "Turku, Finland",
      period: "Aug 2013 - Jul 2014",
      description: [
        "Selected for BoostTurku 2013 Summer camp, highlighting innovative potential.",
        "Developed a crowd-based platform for requesting, funding, and creating tutorials.",
        "Built platform using Python, Django, PostgreSQL, AngularJS, and modern web technologies.",
        "Implemented RESTful API, Bootstrap, Git, and cloud infrastructure.",
      ],
    },
    {
      id: 5,
      role: "Research Assistant",
      company: "Turku Centre for Biotechnology | Proteomics",
      location: "Turku, Finland",
      period: "Apr 2012 - Apr 2013",
      description: [
        "Developed web application for protein pattern analysis using Python, Django, and PostgreSQL.",
        "Optimized data extraction and visualization for proteomics research.",
        "Contributed to peer-reviewed publications on proteomics research.",
        "Conducted performance testing of statistical methods on proteomics data.",
      ],
    },
    {
      id: 6,
      role: "Software Engineer",
      company: "Turun yliopisto",
      location: "Turku, Finland",
      period: "Jan 2016 - May 2017",
      description: [
        "Engineered a Personnel Management System for the Turku Centre for Biotechnology.",
        "Integrated with the University of Turku API for seamless data synchronization.",
        "Developed analytics and reporting tools for HR and management.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="section bg-secondary/10 py-24"
      ref={sectionRef}
    >
      <div className="section-container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium mb-4">
            Career Path
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            My professional journey, highlighting key roles, responsibilities,
            and accomplishments.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block"
            aria-hidden="true"
          ></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-1 md:left-[-2px] w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-8 ring-secondary/10">
                  <Briefcase size={12} className="text-primary-foreground" />
                </div>

                <div className="bg-background p-6 rounded-xl shadow-md">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-md text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0 text-left md:text-right whitespace-nowrap">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
