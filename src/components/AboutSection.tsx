import { useEffect } from 'react';
import type { FC } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: FC = () => {
  // Mouse coordinates for corner asset parallax layers
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Different multipliers for different depth layers
  const moonX = useTransform(springX, (val) => val * -60);
  const moonY = useTransform(springY, (val) => val * -60);

  const objectX = useTransform(springX, (val) => val * 40);
  const objectY = useTransform(springY, (val) => val * 40);

  const legoX = useTransform(springX, (val) => val * -80);
  const legoY = useTransform(springY, (val) => val * -80);

  const groupX = useTransform(springX, (val) => val * 60);
  const groupY = useTransform(springY, (val) => val * 60);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-transparent text-textLight px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* Absolute Parallax Decorative 3D Images */}
      
      {/* 1. Moon icon (Top-Left: Background Layer) */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-10 pointer-events-none"
      >
        <motion.div style={{ x: moonX, y: moonY }}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon 3D Decorative"
            className="w-full h-auto select-none opacity-80"
            draggable="false"
          />
        </motion.div>
      </FadeIn>

      {/* 2. 3D object (Bottom-Left: Foreground Layer) */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] z-10 pointer-events-none"
      >
        <motion.div style={{ x: objectX, y: objectY }}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Object 3D Decorative"
            className="w-full h-auto select-none"
            draggable="false"
          />
        </motion.div>
      </FadeIn>

      {/* 3. Lego icon (Top-Right: Deep Background Layer) */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-10 pointer-events-none"
      >
        <motion.div style={{ x: legoX, y: legoY }}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D Decorative"
            className="w-full h-auto select-none opacity-85"
            draggable="false"
          />
        </motion.div>
      </FadeIn>

      {/* 4. 3D group (Bottom-Right: Close Foreground Layer) */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] z-10 pointer-events-none"
      >
        <motion.div style={{ x: groupX, y: groupY }}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Group 3D Decorative"
            className="w-full h-auto select-none"
            draggable="false"
          />
        </motion.div>
      </FadeIn>

      {/* Main Content Wrapper (Floating Glassmorphic Card) */}
      <FadeIn
        delay={0}
        y={40}
        className="flex flex-col justify-center items-center z-20 text-center max-w-2xl px-6 py-12 sm:px-10 sm:py-16 md:px-16 rounded-[40px] border border-white/[0.04] bg-white/[0.02] backdrop-blur-[12px] shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
      >
        {/* About Heading */}
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
        >
          About me
        </h2>

        {/* Gap between heading and text */}
        <div className="h-8 sm:h-10 md:h-12" />

        {/* Animated Text Paragraph */}
        <AnimatedText
          text="Graduate with a Bachelor's degree in Computer Applications, specializing in MERN stack and full stack development. I truly enjoy building responsive, clean, and visually appealing web interfaces. Let's create something incredible together!"
          className="text-textLight font-medium leading-relaxed text-center select-none flex flex-wrap justify-center"
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)' }}
        />

        {/* Gap between text and button */}
        <div className="h-10 sm:h-12 md:h-14" />

        {/* Contact Button */}
        <ContactButton onClick={() => {
          const element = document.getElementById('contact');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }} />
      </FadeIn>
    </section>
  );
};
