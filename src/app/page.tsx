import { TopBar } from "@/components/TopBar";
import { Telemetry } from "@/components/Telemetry";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/ui/Section";
import { Constellation } from "@/components/Constellation";
import { About } from "@/components/About";
import { AIToolkit } from "@/components/AIToolkit";
import { Experience } from "@/components/Experience";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { WorkShowcase3D } from "@/components/WorkShowcase3D";
import { MobileShowcase } from "@/components/MobileShowcase";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Telemetry />
      <Hero />

      <Section id="work" kicker="INTERACTIVE · DRAG TO ROTATE">
        <WorkShowcase3D />
        <div className="mt-20">
          <ProjectsGrid />
        </div>
      </Section>

      <Section id="mobile" kicker="IOS · ANDROID">
        <MobileShowcase />
      </Section>

      <Section id="stack" kicker="HOVER TO EXPLORE">
        <Constellation />
      </Section>

      <Section id="about" kicker="3.5+ YEARS">
        <About />
      </Section>

      <Section id="toolkit" kicker="AI-NATIVE">
        <AIToolkit />
      </Section>

      <Section id="path" kicker="2023 → NOW">
        <Experience />
      </Section>

      <Section id="contact" kicker="OPEN TO WORK">
        <Contact />
      </Section>

      <Footer />
    </main>
  );
}
