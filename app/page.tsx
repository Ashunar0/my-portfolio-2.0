import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero";

const AboutSection = dynamic(() =>
  import("@/components/sections/about").then((mod) => mod.AboutSection)
);
const SkillsSection = dynamic(() =>
  import("@/components/sections/skills").then((mod) => mod.SkillsSection)
);
const ProjectsSection = dynamic(() =>
  import("@/components/sections/projects").then((mod) => mod.ProjectsSection)
);
const ContactSection = dynamic(() =>
  import("@/components/sections/contact").then((mod) => mod.ContactSection)
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
