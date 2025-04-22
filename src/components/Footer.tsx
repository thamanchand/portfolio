import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/thamanchand",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/thamanchand",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:thaman.me@gmail.com",
      label: "Email",
    },
  ];

  // Find LinkedIn URL for the new section
  const linkedInUrl =
    socialLinks.find((link) => link.label === "LinkedIn")?.url || "#";
  const emailUrl =
    socialLinks.find((link) => link.label === "Email")?.url || "#";

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Left Side - Logo and Description */}
          <div className="mb-10 md:mb-0 md:w-1/2">
            <img
              src="/logo.svg"
              alt="TC Logo"
              className="h-10 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-muted-foreground max-w-md mx-auto md:mx-0">
              Building exceptional digital experiences with modern technologies,
              focusing on product engineering and user-centric design.
            </p>
          </div>

          {/* Right Side - Contact CTA, Socials, Scroll Top */}
          <div className="flex flex-col items-center md:items-end md:w-1/2">
            {/* NEW: Let's Work Together Section */}
            <div className="mb-8 text-center md:text-right">
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                👋 Let's Work Together
              </h3>
              <p className="text-muted-foreground">
                Reach me at{" "}
                <a
                  href={emailUrl}
                  className="text-primary hover:underline underline-offset-4"
                  data-hover="true"
                >
                  thaman.me@gmail.com
                </a>{" "}
                or connect on{" "}
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4"
                  data-hover="true"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="mb-6 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              data-hover="true"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </motion.button>

            {/* Social Links */}
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                  data-hover="true"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Thaman Chand. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
