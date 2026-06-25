import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { TimelineSection } from './components/TimelineSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FooterSection } from './components/FooterSection';
import { ThreeDBackground } from './components/ThreeDBackground';

function App() {
  return (
    <ThreeDBackground>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <TimelineSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
    </ThreeDBackground>
  );
}

export default App;
