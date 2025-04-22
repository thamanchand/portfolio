import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Header />

            <main className="relative">
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <ExperienceSection />
              <SkillsSection />
            </main>

            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
