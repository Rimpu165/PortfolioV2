import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FooterSection } from './components/FooterSection';

function App() {
  return (
    <div className="w-full min-h-screen bg-darkBg text-textLight font-kanit overflow-x-clip">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}

export default App;
