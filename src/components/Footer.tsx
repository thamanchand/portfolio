import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
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

  // Find LinkedIn URL and Email URL
  const linkedInUrl =
    socialLinks.find((link) => link.label === "LinkedIn")?.url || "#";
  const emailUrl =
    socialLinks.find((link) => link.label === "Email")?.url || "#";

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo and Copyright */}
          <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left">
            <div className="mb-6">
              <img src="/logo.svg" alt="TC Logo" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Thaman Chand. All rights
              reserved.
            </p>
          </div>

          {/* Column 2: Let's Work Together CTA */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-foreground mb-4">
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

          {/* Column 3: Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Let's Connect
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                  data-hover="true"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
