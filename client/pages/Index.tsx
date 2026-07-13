import { HeroSection } from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { AchievementsSection } from "../components/AchievementsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { EducationSection } from "../components/EducationSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <section id="home">
        <HeroSection />
      </section>
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <AchievementsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
