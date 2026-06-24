import type { FC } from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-darkBg text-textLight px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* Absolute Decorative 3D Images */}
      
      {/* 1. Moon icon (Top-Left) */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D Decorative"
          className="w-full h-auto select-none"
          draggable="false"
        />
      </FadeIn>

      {/* 2. 3D object (Bottom-Left) */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="Object 3D Decorative"
          className="w-full h-auto select-none"
          draggable="false"
        />
      </FadeIn>

      {/* 3. Lego icon (Top-Right) */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D Decorative"
          className="w-full h-auto select-none"
          draggable="false"
        />
      </FadeIn>

      {/* 4. 3D group (Bottom-Right) */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="Group 3D Decorative"
          className="w-full h-auto select-none"
          draggable="false"
        />
      </FadeIn>

      {/* Main Content Wrapper */}
      <div className="flex flex-col justify-center items-center z-20 text-center max-w-full">
        {/* About Heading */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Text Paragraph */}
        <AnimatedText
          text="Graduate with a Bachelor's degree in Computer Applications, specializing in MERN stack and frontend development. I truly enjoy building responsive, clean, and visually appealing web interfaces. Let's create something incredible together!"
          className="text-textLight font-medium leading-relaxed max-w-[560px] text-center select-none flex flex-wrap justify-center"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* Gap between text and button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.4} y={30}>
          <ContactButton onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }} />
        </FadeIn>
      </div>
    </section>
  );
};
