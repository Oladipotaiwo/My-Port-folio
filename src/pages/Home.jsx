import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/*Navbar */}
      <NavBar />
      {/*Main Content */}
      <main>
        <HeroSection />
        <div className="-mt-10">
          <AboutSection />
        </div>

        <div className="-mt-10">
          <SkillsSection />
        </div>

        <div className="-mt-10">
          <ProjectsSection />
        </div>

        <div className="-mt-10">
          <ContactSection />
        </div>
      </main>

      {/*Footer */}
      <Footer />
    </div>
  );
};
